import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl text-green-600">
              Store
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/favorites"
              className="flex items-center text-gray-600 hover:text-green-600"
            >
              <Heart className="w-6 h-6 mr-2" />
              Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
