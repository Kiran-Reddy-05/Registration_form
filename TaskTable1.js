import React from 'react';
import './HrPage';

const tasks = [
  { taskId: 1, description: 'Task 1', status: 'Pending' },
  { taskId: 2, description: 'Task 2', status: 'Completed' },
  { taskId: 3, description: 'Task 3', status: 'In Progress' },
  { taskId: 4, description: 'Task 4', status: 'Pending' },
  { taskId: 5, description: 'Task 5', status: 'Completed' },
];

const TaskTable1 = ({ employee }) => {
  const handleDelete = (taskId) => {
    console.log(`Delete task with id: ${taskId}`);
    // Implement delete functionality here
  };

  return (
    <div className="employee-table">
      <h2>{employee.name}'s Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Task Id</th>
            <th>Task Description</th>
            
            <th>Commit</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.taskId}>
              <td>{employee.id}</td>
              <td>{task.taskId}</td>
              <td>{task.description}</td>
              <td>
                {task.Commit}
                <button onClick={() => handleDelete(task.taskId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable1;
