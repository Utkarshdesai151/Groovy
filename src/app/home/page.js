"use client";
import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="relative min-h-screen bg-[#F0F0F5] text-[#1A1A1A] overflow-x-hidden">
      {/* Background blobs */}
      <div className="absolute -top-40 -left-32 w-[40rem] h-[40rem] bg-[#FF6A00] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 z-0"></div>
      <div className="absolute -bottom-32 -right-28 w-[40rem] h-[40rem] bg-[#00E6A7] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 z-0"></div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-xl rounded-b-2xl shadow-md">
        <div className="text-2xl font-bold text-[#FF6A00]">Groovy</div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white/30 px-4 py-2 rounded-xl border border-white/40 backdrop-blur-sm">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search groceries..."
            className="bg-transparent outline-none text-sm text-[#111] placeholder-gray-500 w-40 sm:w-64"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-xl text-[#333]">
          <FiSettings />
          <FaUserCircle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center mt-10 px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Welcome to <span className="text-[#FF6A00]">Groovy</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Order your daily essentials & groceries faster than ever — no waiting, no lines.
        </p>
      </section>

      {/* Admin Panel */}
      <section className="mt-12 px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {["Users", "Orders", "Revenue"].map((title, i) => (
          <div key={i} className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-2xl font-bold text-[#FF6A00]">{i * 37 + 200}</p>
          </div>
        ))}
      </section>

      {/* Items Section */}
      <section className="mt-16 px-6">
        <h2 className="text-2xl font-bold mb-6">Popular Items</h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {["Apples", "Milk", "Bread", "Rice", "Eggs", "Oil"].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/30 backdrop-blur-lg border border-white/40 shadow-md hover:scale-105 transition"
            >
              <div className="bg-[#FF6A00]/20 rounded-lg h-24 mb-3" />
              <h4 className="font-semibold">{item}</h4>
              <p className="text-sm text-gray-600">₹{(i + 1) * 20}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-20 px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6">FAQs</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do I order?",
              a: "Just login, search your item, and place your order. It's that easy!",
            },
            {
              q: "What is the delivery time?",
              a: "We deliver within 30 minutes in your local area.",
            },
            {
              q: "Can I cancel my order?",
              a: "Yes, you can cancel before it's dispatched.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white/30 backdrop-blur-md border border-white/40 p-4 rounded-xl"
            >
              <h4 className="font-semibold">{faq.q}</h4>
              <p className="text-sm text-gray-700 mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
