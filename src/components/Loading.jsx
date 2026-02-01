
import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-brand-500/30 border-t-brand-500 rounded-full animate-spin"></div>
                <span className="text-brand-500 text-sm font-medium animate-pulse">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
