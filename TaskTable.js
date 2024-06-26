// TaskTable.js
import React from 'react';

function TaskTable() {
  const tasks = [
    { TaskId: 1, Title: 'Task 1', Description: 'Description for Task 1' },
    { TaskId: 2, Title: 'Task 2', Description: 'Description for Task 2' },
    { TaskId: 3, Title: 'Task 3', Description: 'Description for Task 3' },
    { TaskId: 4, Title: 'Task 4', Description: 'Description for Task 4' },
    { TaskId: 5, Title: 'Task 5', Description: 'Description for Task 5' },
    { TaskId: 6, Title: 'Task 6', Description: 'Description for Task 6' },
    { TaskId: 7, Title: 'Task 7', Description: 'Description for Task 7' },
    { TaskId: 8, Title: 'Task 8', Description: 'Description for Task 8' },
    { TaskId: 9, Title: 'Task 9', Description: 'Description for Task 9' },
    { TaskId: 10, Title: 'Task 10', Description: 'Description for Task 10' },
  ];

  const handleView = (taskId) => {
    alert(`View details for Task ID: ${taskId}`);
  };

  const handleUpdate = (taskId) => {
    alert(`Update details for Task ID: ${taskId}`);
  };

  return (
    <div className="task-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.TaskId}>
              <td>{task.TaskId}</td>
              <td>{task.Title}</td>
              <td>{task.Description}</td>
              <td>
                <button onClick={() => handleView(task.TaskId)}>View</button>
                <button onClick={() => handleUpdate(task.TaskId)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
