import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
const container = document.getElementById('todo');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
);
