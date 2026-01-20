import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
        <div className="max-w-2xl text-center">
            <h1 className="text-6xl font-bold text-brand-500 mb-4">404</h1>
            <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-brand-500 text-sm font-bold hover:gap-3 transition-all"
            >
                Go Home <ArrowRight size={14} />
            </Link>
        </div>
    </section>
);

export default NotFound;
