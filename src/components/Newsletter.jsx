import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 mt-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Tetap Update dengan Komunitas</h2>
                <p className="text-blue-100 mb-8 text-lg">
                    Dapatkan update terbaru tentang project dan workshop dari DevConnect
                </p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                    <div className="flex-1 relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Masukkan email Anda"
                            className="w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-white hover:bg-slate-100 text-blue-600 font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                        Subscribe <Send size={18} />
                    </button>
                </form>
                
                {submitted && (
                    <div className="mt-4 text-white text-sm animate-pulse">
                        ✓ Terima kasih! Silakan cek email Anda untuk konfirmasi.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Newsletter;
