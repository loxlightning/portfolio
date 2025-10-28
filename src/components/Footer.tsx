import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary/50 py-8 border-t border-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-text-secondary">
                    &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;