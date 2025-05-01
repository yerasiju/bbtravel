import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [promotions, setPromotions] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Логика для отправки данных на сервер
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Welcome back</h2>
      <p className="text-center mb-6">
        Already have an account yet?{" "}
        <Link to="/login" className="text-blue-500">
          Log in
        </Link>
      </p>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={promotions}
            onChange={(e) => setPromotions(e.target.checked)}
            className="mr-2"
          />
          Email me exclusive Agoda promotions. I can opt out later as stated in
          the Privacy Policy.
        </label>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign Up
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

export default Register;
