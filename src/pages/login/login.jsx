import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
      <p className="text-center mb-8 text-gray-600">
        Don't have an account yet?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Sign up for free
        </Link>
      </p>
      <form onSubmit={handleLogin} className="space-y-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <a
          href="/forgot-password"
          className="text-blue-600 block text-right hover:underline"
        >
          Forgot your password?
        </a>
        <button
          type="submit"
          className="w-full py-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Sign In
        </button>
      </form>
      <div className="text-center mt-8">
        <p className="text-gray-600">or sign in with</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
            Facebook
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300">
            Google
          </button>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-gray-600">
        By creating an account, you agree to our{" "}
        <Link to="/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to="/privacy" className="text-blue-600 hover:underline">
          Privacy Statement
        </Link>
        .
      </p>
    </div>
  );
}

export default Login;
