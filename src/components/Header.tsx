import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate(query.trim() ? `/products?search=${query}` : "/products");
  };

  return (
    <header className="w-full bg-white font-inter">
      {/* Top bar */}
      <div className="h-[86px] border-b">
        <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-md flex items-center justify-center"
              style={{ background: "linear-gradient( #0D6EFD , #0D6EFD33) " }}
            >

              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span className="text-[22px] font-bold tracking-wide" style={{ color: "#8CB7F5" }}>
              Brand
            </span>


          </Link>

          {/* Search */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[640px]">
            <form onSubmit={handleSearch} className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="w-full h-10 pl-4 pr-36 border border-[#C6DDFF] rounded-md text-sm"
              />
              <select className="absolute right-28 top-1/2 -translate-y-1/2 h-8 px-3 border border-[#C6DDFF] rounded-md text-sm">
                <option>All category</option>
                <option>Electronics</option>
              </select>
              <button className="absolute right-0 top-1/2 -translate-y-1/2 h-9 px-8 rounded-md text-white text-sm font-medium
             bg-gradient-to-b from-[#0D6EFD] to-[#0B5ED7] hover:from-[#0B5ED7] hover:to-[#0A58CA] transition">
                Search
              </button>
            </form>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-6 text-sm text-muted">
            {["Profile", "Message", "Orders"].map(i => (
              <div key={i} className="flex items-center gap-2">
                <span className="hidden md:inline">{i}</span>
              </div>
            ))}

            <Link to="/cart" className="relative flex items-center gap-2">
              <span className="hidden md:inline">My cart</span>
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="h-12 border-t">
        <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between text-sm text-[#374151]">
          <div className="flex items-center gap-6">
            <span className="font-medium">All category</span>
            <span>Hot offers</span>
            <span>Gift boxes</span>
            <span>Projects</span>
            <span>Menu item</span>
          </div>

          <div className="flex items-center gap-6">
            <span>English, USD</span>
            <span className="flex items-center gap-2">
              Ship to <img src="https://flagcdn.com/w20/de.png" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
