// src/App.tsx
import './App.css';
import AuthForm from './componet/LogIn_SignUp';
import DynamicTodoForm from './componet/TodoList';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/todo" replace />
            ) : (
              <AuthForm setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/todo"
          element={
            isAuthenticated ? (
              <DynamicTodoForm />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
