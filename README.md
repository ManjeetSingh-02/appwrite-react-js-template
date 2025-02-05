# Appwrite React JS Template

1. This is just a personal project or template that i mostly used for my appwrite.
2. It contains mostly used methods of the appwrite.
3. This git contains source code which demonstrates the configuration of Appwrite and usage of Appwrite services including authentication, database, and storage in a React JS application.

## Project Structure

```
.
├── app
│   ├── authService.js
│   ├── dbService.js
│   ├── index.js
│   └── storageService.js
├── config
│   └── appConfig.js
└── README.md

3 directories, 6 files
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ManjeetSingh-02/appwrite-template.git
   cd appwrite-template
   ```

2. Create a react application and move `app` and `config` folder inside `src` folder:

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
   VITE_APPWRITE_COLLECTION_ID=
   VITE_APPWRITE_BUCKET_ID=
   ```

5. Provide all the required ID's and URL from Appwrite console

   ```
   https://cloud.appwrite.io/console
   ```

## Usage

1. Start the development server by `npm run dev` or `npm run start`.

2. Open your browser and navigate to the `http://localhost:3000` to see the application in action.

3. Import the functions from `app/index.js` written in the `app/*.js` files as required and use them.

## Services

### Authentication Service

Located in `app/authService.js`, this service handles user authentication with Appwrite.

### Database Service

Located in `app/dbService.js`, this service manages database operations with Appwrite.

### Storage Service

Located in `app/storageService.js`, this service manages file storage with Appwrite.

### Appwrite Config

Located in `config/appConfig.js`, it imports the `.env` variables and convert them to `string` for usage with Appwrite.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
