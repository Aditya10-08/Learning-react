import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex px-6 py-2 bg-emerald-700">
        <div className="w-full items-center justify-between">
          <h2 className="text-2xl">Logo</h2>
        </div>
        <div className="flex gap-6 text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
