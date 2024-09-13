# QuickSync

QuickSync is a personal application designed to easily copy and paste data between multiple devices. It also includes a delete functionality and stores all data in Firebase.

## Features

- **Copy and Paste**: Seamlessly copy and paste data across multiple devices.
- **Delete Functionality**: Easily delete any data you no longer need.
- **Firebase Storage**: All data is securely stored in Firebase.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Firebase account

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/quicksync.git
   cd quicksync
   ```
2. Install the dependencies:
```sh
npm install
```
3. Create a `.env` file in the root directory and add your Firebase configuration:
```sh
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```
### Running the Application
- To start the development server:
```sh
npm run dev
```
- To build the application for production:
```sh
npm run build
```
- To start the production server:
```sh
npm start
```

### Linting

- To run the linter:
```sh
npm run lint
```


## Project Structure
- `app/`: Contains the main application components.
    - `fonts/`: Custom fonts used in the application.
    - `globals.css`: Global CSS styles.
    - `layout.js`: Root layout component.
    - `page.js`: Home page component.
- `firebaseConfig.js`: Firebase configuration and initialization.
- `next.config.mjs`: Next.js configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `.eslintrc.json`: ESLint configuration.
- `package.json`: Project metadata and dependencies.
## Dependencies
- `firebase`: ^10.13.1
- `next`: 14.2.11
- `react`: ^18
- `react-dom`: ^18
- `react-firebase-hooks`: ^5.1.1
- `eslint`: ^8
- `eslint-config-next`: 14.2.11
- `postcss`: ^8
- `tailwindcss`: ^3.4.1
## License
This project is licensed under the MIT License.