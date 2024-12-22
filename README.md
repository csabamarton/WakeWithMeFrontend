# WakeWithMe Frontend

## Project Description
WakeWithMe is a social alarm clock application that allows users to share wake-up messages and music. This repository contains the frontend codebase for the WakeWithMe application, which is built using React Native.

The backend API for the WakeWithMe project is hosted in a separate repository, which can be found at: [WakeWithMe API](https://github.com/csabamarton/wakewithme-api)

## Features
- User authentication (registration and login)
- Creating and managing alarms
- Displaying alarms in a sorted list
- Bottom navigation for navigation across the app (MVP phase)

## Demo Video
A demo video showcasing the current functionality of the WakeWithMe application 

https://github.com/user-attachments/assets/ff6c79bf-37a5-405a-ad96-f0024f3e957b


## MVP Phase
The current MVP (Minimum Viable Product) phase includes the following functionality:
1. **User Authentication**:
   - Users can register and log in to the app.
   - The app handles user credentials securely using Redux and AsyncStorage.

2. **Alarm Management**:
   - Users can create new alarms with specific times, labels, and visibility options.
   - The app fetches alarms from the backend API and displays them on the home screen.
   - Alarms are displayed in a sorted list by their date and time.

3. **Home Screen**:
   - The "Next Alarm" is highlighted at the top for better visibility.
   - A profile button is available for future profile management integration.
   - Bottom navigation provides a foundation for upcoming features like "Friends" and "Settings."

4. **Navigation**:
   - React Navigation is used to handle transitions between screens, including the Login, Create Alarm, and Home screens.

### Known Issues:
- **Sorting of Alarms**: Alarms are displayed but may not be perfectly sorted under all scenarios.
- **Registration Flow**: After registration, the user is directly taken to the Home Screen without confirmation.
- **Profile Display**: The Profile button currently doesn't display the user's name.
- **Recurring Alarms**: Recurring alarms are not yet implemented and will be addressed in future phases.

## Tech Stack
- **React Native** for building the mobile application.
- **Redux** for state management.
- **React Navigation** for navigation.
- **Axios** for making API requests.
- **AsyncStorage** for local data storage.

## Project Setup

### Prerequisites
- Node.js 18.18.2 LTS or higher
- React Native CLI
- Android Studio or Xcode (depending on your target platform)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wakewithme-frontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd wakewithme-frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the React Native packager:
   ```bash
   npx react-native start
   ```

5. In a separate terminal, run the app on an emulator or connected device:
   ```bash
   npx react-native run-android
   ```
   or
   ```bash
   npx react-native run-ios
   ```

   Make sure the backend API is running at the correct URL (`http://10.0.2.2:8080/api` for Android emulator, `http://localhost:8080/api` for iOS simulator, or your machine's IP address for physical devices).

## Project Structure
The project follows a standard React Native folder structure:
```
src/
├── api/
├── components/
├── navigation/
├── screens/
├── store/
└── types/
```

- **api/**: Contains the API client for communicating with the backend.
- **components/**: Reusable UI components used throughout the application.
- **navigation/**: Defines the app's navigation structure using React Navigation.
- **screens/**: Contains the main screens of the application.
- **store/**: Manages the application state using Redux.
- **types/**: Defines the TypeScript types used in the project.

## Available Scripts
- `npm start`: Starts the React Native packager.
- `npm run android`: Builds and runs the app on an Android device or emulator.
- `npm run ios`: Builds and runs the app on an iOS device or simulator.
- `npm run lint`: Runs the ESLint linter.
- `npm test`: Runs the unit tests.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
