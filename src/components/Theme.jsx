import React, { useState, useEffect } from 'react';

const Theme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'slate');

    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.id = 'theme-link';
        link.href = `https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/${theme}/bootstrap.min.css`;
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [theme]);

    const handleThemeChange = (event) => {
        const newTheme = event.target.value;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="container">
            <div className="form-check form-switch mt-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="themeSwitch"
                    onChange={handleThemeChange}
                    value={theme === 'slate' ? 'yeti' : 'slate'}
                    checked={theme === 'yeti'}
                />
                <label className="form-check-label" htmlFor="themeSwitch">
                    {theme === 'slate' ? 'Switch to Light' : 'Switch to Dark'}
                </label>
            </div>
        </div>
    );
};

export default Theme;

