"use client";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function Home() {
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [uploadedData, setUploadedData] = useState([]);

  // Handle link and text upload
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (link || text) {
      try {
        await addDoc(collection(db, "uploads"), {
          link: link || null,
          text: text || null,
          createdAt: new Date(),
        });
        setLink("");
        setText("");
        fetchData(); // Refresh uploaded data
      } catch (error) {
        console.error("Error uploading data: ", error);
      }
    }
  };

  // Fetch uploaded data (links, text, and files)
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "uploads"));
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    setUploadedData(items);
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!id) {
      console.error("No document ID found for deletion.");
      return;
    }
    try {
      await deleteDoc(doc(db, "uploads", id));
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-md p-6 bg-gray-800 bg-opacity-80 rounded-xl shadow-lg backdrop-blur-lg text-white">
        <h1 className="text-2xl font-bold text-center mb-6">
          Quick<span className="text-indigo-400">Sync</span>
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="bg-gray-700 bg-opacity-40 p-3 rounded-lg border border-transparent focus:outline-none focus:border-indigo-500 transition"
          />
          <textarea
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-gray-700 bg-opacity-40 p-3 rounded-lg border border-transparent focus:outline-none focus:border-indigo-500 transition"
          />
          <button
            type="submit"
            className="bg-indigo-600 py-3 rounded-lg text-lg hover:bg-indigo-500 transition focus:outline-none"
          >
            Submit Link/Text
          </button>
        </form>

        <h2 className="text-xl font-semibold mt-8 mb-4">Uploaded Data:</h2>

        <div className="space-y-4 h-64 overflow-y-auto">
          {uploadedData.length === 0 && (
            <p className="text-gray-400 text-center">No data uploaded yet.</p>
          )}
          {uploadedData.map((item, index) => (
            <div
              key={item.id}
              className="relative p-4 bg-opacity-50 bg-gray-600 rounded-lg shadow-lg transition-all group"
            >
              {item.link && (
                <p className="text-indigo-400">
                  Link: <a href={item.link}>{item.link}</a>
                </p>
              )}
              {item.text && <p>Text: {item.text}</p>}
              <p className="text-gray-400 text-sm">
                Uploaded on:{" "}
                {new Date(item.createdAt.seconds * 1000).toLocaleString()}
              </p>

              {/* Delete button */}
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
