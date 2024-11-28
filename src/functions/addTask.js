export function addTask(tasks, newTask) {
  if (typeof newTask !== 'object' || newTask === null)
    throw new Error('The newTask must be an object');

  if (!exists) tasks.push(newTask);

  return tasks;
}
