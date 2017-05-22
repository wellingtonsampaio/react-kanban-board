/*
 * AuthApiService exposes functions to initialize the GAPI client and to authorize users. *
 */

// No problems storing these keys as other applications are not in the project's acceptance list
const API_KEY = 'AIzaSyCtncgZtWpeMmnqWGNzOIxuAcPiTKvtk_0';
const CLIENT_ID = '476277079523-ic4ue1ltna9v55lp0ool5i7vijj6qjq3.apps.googleusercontent.com';
const SCOPE = 'https://www.googleapis.com/auth/tasks';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest'];

// Load the required GAPI libraries and initialize the client for this application
export function initializeApi() {
  return new Promise((resolve) => {
    // Load the client and Auth2 libraries
    gapi.load('client:auth2', () => {
      // Initialize the client with this application's config
      gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPE,
      }).then(() => resolve());
    });
  });
}

// Authorize a user. The GAPI client will open a popup for the user to authenticate and grant access to his account for this application
export function authorizeUserOnGapi() {
  return new Promise((resolve, reject) => {
    // If user is already signedin, just resolve the promise
    if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
      resolve();
    } else {
      // Otherwise use the GAPI client to start the authorization
      gapi.auth2.getAuthInstance().signIn().then(
        () => resolve(),
        () => reject()
      );
    }
  });
}
