import React from 'react';
import type { TaskItemProps, TaskStatus } from '../../types';

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as TaskStatus;
    onStatusChange(task.id, newStatus);
  };

  return (
    <div className="task-item">
      <div className="task-item-header">
        <h3 className="task-title">{task.title}</h3>

        <span className={`task-priority priority-${task.priority}`}>
          {task.priority.toUpperCase()}
        </span>
      </div>

      <p className="task-description">{task.description}</p>
      <p className="task-due-date">Due: {task.dueDate}</p>

      <div className="task-status-row">
        <span className={`task-status status-${task.status}`}>
          Status: {task.status}
        </span>

        <select
          value={task.status}
          onChange={handleStatusChange}
          className="task-status-select"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="task-delete-btn"
      >
        Delete Task
      </button>
    </div>
  );
};