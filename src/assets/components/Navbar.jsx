import React, { useState} from "react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = ["Shop", "Measurements", "Dashboard", "Login"];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="#" className="h-8" alt="tailorapp logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tailorapp</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="#" className="text-sm text-gray-500 dark:text-white hover:underline"> (555) 412-1234</a>
                        <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                    </div>
                </div>
                </nav>
                {/* Desktop */}
                <nav className="bg-gray-50 dark:bg-gray-700">
                    <div className="max-w-screen-xl px-4 py-3 mx-auto">
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
        </header>
    );
};


export default Navbar;