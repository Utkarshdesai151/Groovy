"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import groc from "../../images/finalout.png";

export default function UserDetails() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin
      ? console.log("Logging in ->", { email, password })
      : console.log("Signing up ->", { name, email, password });

    router.push("/home");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#F0F0F5] overflow-hidden p-4">
      {/* Background gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[45rem] h-[45rem] bg-[#FF6A00] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 z-0" />

      {/* Glass Card */}
      <div className="relative w-full max-w-6xl bg-white/20 border border-white/30 backdrop-blur-3xl rounded-3xl shadow-2xl flex flex-col md:flex-row z-10 transition-all duration-300 hover:shadow-[0_0_80px_#ff6a0033]">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-10 bg-gradient-to-br from-transparent to-[#ffffff12] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
          <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-6 leading-tight text-center">
            {isLogin ? "New Here?" : "Welcome Back!"}
          </h2>
          <Image
            src={groc}
            alt="Grocery Illustration"
            className="w-full max-w-xs "
            priority
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 text-[#2C2C2C] bg-white/10 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#111]">
            {isLogin ? "Login to Groovy" : "Join Groovy Today"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/30 text-[#111] placeholder-gray-500 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-[#111] placeholder-gray-500 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/30 text-[#111] placeholder-gray-500 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#FF6A00] hover:bg-orange-600 transition duration-300 rounded-xl text-white font-semibold shadow-lg hover:scale-[1.02]"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>

            <div className="text-sm text-center text-gray-700 mt-4">
              {isLogin ? "New to Groovy?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#FF6A00] font-semibold hover:underline transition"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </div>
          </form>

          <p className="text-xs text-center text-[#555] mt-8 font-medium">
            © {new Date().getFullYear()} Groovy. Your cravings, our command.
          </p>
        </div>
      </div>
    </div>
  );
}
