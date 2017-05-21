/*
 * TaskListsApiService exposes functions to handle with Task Lists.
 */

export default {

  // List all the Tasks Lists of the current user
  list() {
    return new Promise((resolve, reject) => {
      gapi.client.tasks.tasklists.list().execute(
        result => (result.error ? reject(result.error) : resolve(result))
      );
    });
  },

  // Insert a new Task List with the given title
  insert(title) {
    return new Promise((resolve, reject) => {
      if (title) {
        // Insert the Task List if a title was informed
        gapi.client.tasks.tasklists.insert({ title }).execute(
          result => (result.error ? reject(result.error) : resolve(result))
        );
      } else {
        // Other reject the promise
        reject('Title must be informed');
      }
    });
  },
};
