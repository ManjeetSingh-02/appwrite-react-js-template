# Appwrite React JS Template

1. This is just a personal project or template that i mostly used for my appwrite.
2. It contains mostly used methods of the appwrite and implementation of React Redux for state control.
3. This git contains source code which demonstrates the configuration of Appwrite and usage of Appwrite services including authentication, database, and storage and React-Redux in a React JS application.
4. If needed, make changes in `store` and `app` dirs for `React-Redux` and `Appwrite` functions respectively.

## Project Structure

```
.
├── app
│   ├── authService.js
│   ├── dbService.js
│   ├── index.js
│   └── storageService.js
├── config
│   └── backendConfig.js
├── main.jsx
├── README.md
└── store
   ├── features
   │   ├── document
   │   │   └── documentSlice.js
   │   ├── file
   │   │   └── fileSlice.js
   │   ├── index.js
   │   └── user
   │       └── userSlice.js
   └── store.js

8 directories, 12 files
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ManjeetSingh-02/appwrite-template.git
   cd appwrite-template
   ```

2. Create a react application and move `app`, `config` and `store` dirs inside `src` dir:

   ```bash
   npm create vite@latest
   ```

3. Install dependencies:

   ```bash
   npm install appwrite react-redux @reduxjs/toolkit
   ```

4. Create a `.env` file, copy and paste the content in the file:

   ```bash
   VITE_APPWRITE_ENDPOINT_URL=
   VITE_APPWRITE_PROJECT_ID=
   VITE_APPWRITE_DATABASE_ID=
   VITE_APPWRITE_BLOGS_COLLECTION_ID=
   VITE_APPWRITE_BLOGS_BUCKET_ID=
   ```

5. Provide all the required ID's and URL from Appwrite console:

   ```bash
   https://cloud.appwrite.io/console
   ```

6. Import `store` and `Provider` in `main.jsx` file:

   ```jsx
   import { Provider } from "react-redux";
   import store from "./store/store";
   ```

7. Wrap `App` component inside `Provider` in `main.jsx` file:

   ```jsx
   <Provider store={store}>
     <App />
   </Provider>
   ```

## Usage

1. Start the development server by `npm run dev` or `npm run start`.

2. Open your browser and navigate to the `http://localhost:3000` to see the application in action.

3. Import the functions from `app/index.js` written in the `app/*.js` files as required and use them directly or use `UseDispatch` and `UseSelector` hooks for functions written in `store/*Slices.js` as needed.

## Services

### Authentication Service
Located in `app/authService.js`, this service handles user authentication with Appwrite.

### Database Service
Located in `app/dbService.js`, this service manages database operations with Appwrite.

### Storage Service
Located in `app/storageService.js`, this service manages file storage with Appwrite.

### Appwrite Config
Located in `config/backendConfig.js`, it imports the `.env` variables and convert them to `string` for usage with Appwrite.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
