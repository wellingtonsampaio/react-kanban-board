/*
 * TasksApiService exposes functions to handle with Tasks.
 */

// Lists all the tasks of the given Task List.
export function listTasks(tasklist) {
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
}

// Insert a task
export function insertTask(tasklist, title, notes, status, due) {
  // Create the body of the POST request
  const body = { title, notes, status, due };

  return new Promise((resolve, reject) => {
    gapi.client.request({
      path: `tasks/v1/lists/${tasklist}/tasks`,
      method: 'POST',
      body,
    }).then(result => (result.error ? reject(result.error) : resolve(result)));
  });
}

// Delete a task
export function deleteTask(tasklist, task) {
  return new Promise((resolve, reject) => {
    gapi.client.tasks.tasks.delete({ tasklist, task }).execute(
      result => (result.error ? reject(result.error) : resolve(result))
    );
  });
}

/*
 * Move a task to another list.
 * The client API does not provide a method to perform such action.
 * The approach here is to make a copy of the task and insert on a new task, and later to delete the original task.
 */
export function moveTask(sourceTasklist, destinationTasklist, task) {
  return new Promise((resolve, reject) => {
    // Insert the task on the new list
    insertTask(destinationTasklist, task.title, task.notes, task.status, task.due).then(
      // In case of success, delete the original task
      () => deleteTask(sourceTasklist, task.id).then(() => resolve()),
      () => reject()
    );
  });
}
