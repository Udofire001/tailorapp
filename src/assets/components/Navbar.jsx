import React, { useState} from "react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = ["Shop", "Measurements", "Dashboard", "Login"];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">
                    TailorApp</div>

                {/* Desktop */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-sm">
                    {navItems.map((item)  => (
                        <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button
                  className="md:hidden text-gray-700 focus:outline-none" onClick={()  => setMobileMenuOpen(!mobileMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                         d={mobileMenuOpen
                          ? "M6 18L18 6M6 6l12 12" // X icon
                          : "M4 6h16M4 12h16M4 18h16" //hamburger
                          }
                          />
                    </svg>
                  </button>
            </nav>

            {/* Mobile dropdown */}
            {mobileMenuOpen && (
                <ul className="md:hidden px-6 pb-4 space-y-3 text-gray-700 font-medium text-sm bg-white shadow-md">
                    {navItems.map((item)  => (
                        <li key={item} onclick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 cursor-pointer">{item}</li>
                    ))}
                </ul>
            )}
        </header>
    );
};


export default Navbar;