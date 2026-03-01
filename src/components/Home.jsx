import React from 'react';
import { Code2, Cpu, Users, Layout, ChevronRight, Figma } from 'lucide-react';

const Home = () => (
    <div className="animate-in fade-in duration-700">
        <div className="bg-slate-950 text-white py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
                    <Code2 size={16} />
                    <span>Komunitas Programmer Masa Depan</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Belajar, Kolaborasi, <br /> & Bangun Bersama.
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                    Wadah bagi para developer untuk berbagi pengetahuan, mengerjakan proyek open-source,
                    dan mengasah skill pemrograman dalam lingkungan yang suportif.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
                        Gabung Sekarang <ChevronRight size={18} />
                    </button>
                    <a href="https://figma.com" target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 border border-slate-700">
                        <Figma size={18} className="text-pink-500" /> Lihat Design
                    </a>
                </div>
            </div>
        </div>

        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                        <Cpu size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Teknologi Modern</h3>
                    <p className="text-slate-600">Menerapkan stack teknologi terbaru seperti React, Tailwind, dan Node.js.</p>
                </div>
                <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                        <Users size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Kolaborasi Tim</h3>
                    <p className="text-slate-600">Belajar bekerja dalam tim menggunakan Git Workflow profesional.</p>
                </div>
                <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                        <Layout size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Project Showcase</h3>
                    <p className="text-slate-600">Pamerkan hasil karyamu kepada dunia dan dapatkan feedback.</p>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
