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
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
      <p className="text-center mb-8 text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Log in
        </Link>
      </p>
      <form onSubmit={handleRegister} className="space-y-6">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="flex items-center text-gray-600">
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
          className="w-full py-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center mt-8">
        <p className="text-gray-600">or sign up with</p>
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

export default Register;
