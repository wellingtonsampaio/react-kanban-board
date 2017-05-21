/*
 * TasksApiService exposes functions to handle with Tasks.
 */

export default {

  // Lists all the tasks of the given Task List.
  list(tasklist) {
    return new Promise((resolve, reject) => {
      if (tasklist) {
        // Load the tasks of the Task List if informed
        gapi.client.tasks.tasks.list({ tasklist }).execute(
          result => (result.error ? reject(result.error) : resolve(result))
        );
      } else {
        // Otherwise reject the promise if a Task List was not informed
        reject('Task List must be informed');
      }
    });
  },

  // Get the details of a particular Task.
  get(task, tasklist) {
    return new Promise((resolve) => {
      // TODO Implement
      resolve(task, tasklist);
    });
  },

  // Insert a new Task.
  insert(tasklist, task) {
    return new Promise((resolve) => {
      // TODO Implement
      resolve(task, tasklist);
    });
  },

  // Update an existing task.
  update(tasklist, task) {
    return new Promise((resolve) => {
      // TODO Implement
      resolve(task, tasklist);
    });
  },

  // Delete a task
  delete(tasklist, task) {
    return new Promise((resolve) => {
      // TODO Implement
      resolve(task, tasklist);
    });
  },
};
