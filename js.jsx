import React, { useState } from 'react';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import Home from './src/components/Home';
import Projects from './src/components/Projects';
import Members from './src/components/Members';
import Newsletter from './src/components/Newsletter';

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
            <Newsletter />
            <Footer />
        </div>
    );
}
