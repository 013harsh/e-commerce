import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className=" relative flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-500  px-4">
        <img
        className="absolute top-0 left-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1722182877533-7378b60bf1e8?q=80&w=1614&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="z-10 w-full max-w-md p-6 rounded-lg shadow bg-zinc-300">
        <h1 className="mb-1 text-2xl font-bold text-zinc-900">
          Create your account
        </h1>
        <p className="mb-6 text-sm text-gray-500">Sign up to start shopping</p>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="john_doe"
              className={
                "w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-black focus:border-black "
              }
            />
          </div>

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
            Sign up
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")}>login here</button>
        </p>
      </div>
    </div>
  );
};

export default Register;
