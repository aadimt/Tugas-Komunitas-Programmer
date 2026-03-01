import React, { useState } from 'react';
import {
    Github,
    Figma,
    Users,
    Code2,
    ExternalLink,
    Terminal,
    Cpu,
    Layout,
    ChevronRight,
    Menu,
    X
} from 'lucide-react';

// --- Komponen Navbar ---
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

// --- Halaman Beranda (Hero Section) ---
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

// --- Halaman Projects (Grid Mockup) ---
const Projects = () => {
    const projectList = [
        {
            title: "Task Management App",
            desc: "Aplikasi produktivitas berbasis web dengan drag-and-drop.",
            tech: ["React", "Firebase"],
            color: "bg-blue-500"
        },
        {
            title: "Developer Portfolio",
            desc: "Template portofolio responsif untuk para programmer.",
            tech: ["HTML", "Tailwind"],
            color: "bg-purple-500"
        },
        {
            title: "Code Snippet Manager",
            desc: "Simpan dan kelola potongan kode favoritmu dengan mudah.",
            tech: ["JavaScript", "LocalDB"],
            color: "bg-emerald-500"
        },
        {
            title: "Weather Dashboard",
            desc: "Visualisasi data cuaca real-time menggunakan OpenWeather API.",
            tech: ["React", "Chart.js"],
            color: "bg-orange-500"
        }
    ];

    return (
        <div className="py-16 max-w-7xl mx-auto px-4 animate-in slide-in-from-bottom-4 duration-500">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Hasil Kerja Terbaik</h2>
                <p className="text-slate-600">Berikut adalah beberapa project unggulan yang dibangun oleh komunitas kami.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projectList.map((p, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all">
                        <div className={`h-48 ${p.color} opacity-80 flex items-center justify-center text-white`}>
                            <Layout size={60} className="opacity-30 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                                <ExternalLink size={18} className="text-slate-400 cursor-pointer hover:text-blue-600" />
                            </div>
                            <p className="text-slate-600 mb-4 text-sm leading-relaxed">{p.desc}</p>
                            <div className="flex gap-2">
                                {p.tech.map(t => (
                                    <span key={t} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded border border-slate-200">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Halaman Anggota (Members) ---
const Members = () => {
    const team = [
        { name: "Ketua Kelompok", role: "Fullstack Dev / Repo Manager", nim: "12345678" },
        { name: "Anggota 1", role: "UI/UX Designer", nim: "22345671" },
        { name: "Anggota 2", role: "Frontend Developer", nim: "22345672" },
        { name: "Anggota 3", role: "Technical Writer", nim: "22345673" }
    ];

    return (
        <div className="py-16 max-w-7xl mx-auto px-4 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Anggota Tim Proyek</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((m, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:border-blue-500 transition-colors">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                            <Users size={32} />
                        </div>
                        <h4 className="font-bold text-slate-900">{m.name}</h4>
                        <p className="text-blue-600 text-sm font-medium mb-2">{m.role}</p>
                        <p className="text-slate-400 text-xs">NIM: {m.nim}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Komponen Footer ---
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

// --- App Utama ---
export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home': return <Home />;
            case 'projects': return <Projects />;
            case 'members': return <Members />;
            default: return <Home />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}
