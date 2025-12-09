Task Management App

This project implements a small reusable component library using React, TypeScript, and simple CSS styling.
Components include: TaskItem, TaskList, and TaskFilter.
All components are strictly typed using TypeScript interfaces and demonstrate component composition, prop handling, event handling, conditional rendering, and reusable UI patterns.

Components
1.TaskItem
Displays an individual task with its title, description, status, priority, and due date.
Includes controls for changing the task’s status and deleting the task.

Props:
type TaskStatus = "pending" | "in-progress" | "completed";

interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

2.TaskList
Renders a list of TaskItem components. Handles proper key management and passes event handlers down to each TaskItem.
Displays a message if no tasks match the current filters.

Props:
interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

3.TaskFilter
Allows users to filter tasks by status and priority.
Calls a callback whenever filter values change.

Props:
interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => void;
}

Features
Task list rendering with unique keys
Filtering by status and priority
Task status updates and deletions
Visual indicators for task priority and status
Conditional rendering for empty task lists
Fully typed with TypeScript interfaces

Styling
Simple CSS with class-based styling (app.css)
Hover and active states for buttons and task cards
Priority badges with color coding
Status text colored by task status
