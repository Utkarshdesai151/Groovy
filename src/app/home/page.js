"use client";
import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Navbar from '../../Component/NavBar'
import HeroSlider from '../../Component/HeroSlider'
import FeaturedCategories from '../../Component/FeaturedCatagory'
export default function HomePage() {

  return (
   <div>
    <Navbar />
    <HeroSlider />
    <FeaturedCategories />

   </div>
  )
}
