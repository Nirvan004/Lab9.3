import React, { useState } from 'react';
import type { Task, TaskStatus } from './types';

import { TaskList } from './components/TaskList/TaskList';
import { TaskFilter } from './components/TaskFilter/TaskFilter';

import './app.css';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Study React',
    description: 'Complete the React task manager project',
    status: 'pending',
    priority: 'high',
    dueDate: '12-9-2025',
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Milk, Bread, Eggs, Fruits',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '12-14-2025',
  },
  {
    id: '3',
    title: 'Clean room',
    description: 'Organize desk & vacuum',
    status: 'completed',
    priority: 'low',
    dueDate: '12-15-2025',
  },
];

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (newFilters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchStatus =
      !filters.status || task.status === filters.status;

    const matchPriority =
      !filters.priority || task.priority === filters.priority;

    return matchStatus && matchPriority;
  });

  return (
    <div className="app-container">
      <h1 className="app-title">Task Manager</h1>

      <TaskFilter onFilterChange={handleFilterChange} />

      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
