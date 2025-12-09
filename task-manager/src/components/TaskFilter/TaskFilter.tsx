import React from 'react';
import type { TaskFilterProps } from '../../types';

export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value || undefined;
    onFilterChange({ status: status as any });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const priority = e.target.value || undefined;
    onFilterChange({ priority: priority as any });
  };

  return (
    <div className="task-filter">
      <div className="task-filter-group">
        <label htmlFor="filter-status" className="task-filter-label">
          Status:
        </label>
        <select
          id="filter-status"
          className="task-filter-select"
          onChange={handleStatusChange}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="task-filter-group">
        <label htmlFor="filter-priority" className="task-filter-label">
          Priority:
        </label>
        <select
          id="filter-priority"
          className="task-filter-select"
          onChange={handlePriorityChange}
        >
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
};