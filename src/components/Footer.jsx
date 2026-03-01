import React from 'react';
import { Terminal, Github, Figma } from 'lucide-react';

const Footer = () => (
    <footer className="bg-slate-900 text-white py-12 mt-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Terminal className="text-blue-500" size={24} />
                    <span className="font-bold text-lg">DevConnect</span>
                </div>
                <p className="text-slate-400 text-sm">© 2024 Tugas Besar Praktikum Version Control. <br />Dibuat dengan semangat kolaborasi.</p>
            </div>
            <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors"><Figma size={24} /></a>
            </div>
        </div>
    </footer>
);

export default Footer;
