"use client";

import Input from "@/components/input";
import { useState, useCallback } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [varient, setVarient] = useState("login");
  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) =>
      currentVarient === "login" ? "Register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {varient === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {varient === "Register" && (
                <Input
                  id="Username"
                  onChange={(e: any) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                  label="username"
                  type="username"
                />
              )}
              <Input
                id="Email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                value={email}
                label="email"
                type="email"
              />
              <Input
                id="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                value={password}
                label="password"
                type="password"
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {varient === "login" ? "Login" : "Sign up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {varient === "login"
                ? "First time using Netflix?"
                : "Already have an account"}
              <span
                onClick={toggleVarient}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {varient === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
