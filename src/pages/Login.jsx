import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-500 px-4">
      <div className="w-full max-w-md p-6 rounded-lg shadow bg-zinc-300">
        <h1 className="mb-1 text-2xl font-bold text-zinc-900">Welcome back</h1>
        <p className="mb-6 text-sm text-gray-500">
          Sign in to continue to your account
        </p>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={
                "w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black focus:border-black"
              }
            />
          </div>

          <div>
            <input
              type="password"
              autoComplete="new-password"
              placeholder="•••••••••"
              className={
                "w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black focus:border-black"
              }
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-black text-white rounded-md font-semibold hover:bg-gray-900 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <button onClick={() => navigate("/Account")}>Create one</button>
        </p>
      </div>
    </div>
  );  
};

export default Login;
