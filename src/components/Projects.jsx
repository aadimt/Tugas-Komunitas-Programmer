import React from 'react';
import { Layout, ExternalLink } from 'lucide-react';

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

export default Projects;
