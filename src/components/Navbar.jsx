import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Beranda' },
        { id: 'projects', label: 'Proyek' },
        { id: 'members', label: 'Anggota' }
    ];

    return (
        <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
                        <Terminal className="text-blue-500" size={28} />
                        <span className="font-bold text-xl tracking-tight">DevConnect</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === item.id
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-800">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setCurrentPage(item.id);
                                setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-slate-800"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
