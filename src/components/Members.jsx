import React from 'react';
import { Users } from 'lucide-react';

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

export default Members;
