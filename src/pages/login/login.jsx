import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Логика для отправки данных на сервер
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Welcome back</h2>
      <p className="text-center mb-6">
        Don't have an account yet ?{" "}
        <Link to="/register" className="text-blue-500">
          Sign up for free
        </Link>
      </p>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <a href="/forgot-password" className="text-blue-500 block text-right">
          Forgot your password?
        </a>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
      <div className="text-center mt-6">
        <p>or sign in with</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Facebook
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded">
            Google
          </button>
        </div>
      </div>
      <p className="text-center mt-6 text-sm">
        By creating an account, you agree to our{" "}
        <Link to="/terms" className="text-blue-500">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to="/privacy" className="text-blue-500">
          Privacy Statement
        </Link>
        .
      </p>
    </div>
  );
}

export default Login;
