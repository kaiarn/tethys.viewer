/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: ["./src/**/*.{edge,js,ts,jsx,tsx,vue}"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        asideScrollbars: {
            light: 'light',
            gray: 'gray',
        },
        extend: {
            colors: {
                primary: "#22C55E",
                inprogress: "rgb(94 234 212)",
                released: "rgb(52 211 153)",
                "editor-accepted": "rgb(125 211 252)",
                approved: "#BFCE40",
                "rejected-editor": "#f97316",
                "rejected-reviewer": "#f97316",
                reviewed: "#34d399", // emerald
                published: "#34d399", // sky
                "primary-dark": "#DCFCE7",
                lime: {
                    DEFAULT: "#BFCE40",
                    dark: "rgba(5,46,55,0.7)",
                    50: "#FBFCF7",
                    100: "#F8FBE1",
                    200: "#EEF69E",
                    300: "#DCEC53",
                    400: "#A8D619",
                    500: "#65DC21",
                    600: "#429E04",
                    700: "#357C06",
                    800: "#295B09",
                    900: "#20450A",
                },
            },
            zIndex: {
                '-1': '-1',
            },
            flexGrow: {
                5: '5',
            },
            maxHeight: {
                'screen-menu': 'calc(100vh - 3.5rem)',
                'modal': 'calc(100vh - 160px)',
            },
            transitionProperty: {
                position: 'right, left, top, bottom, margin, padding',
                textColor: 'color',
            },
            keyframes: {
                'fade-out': {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
                'fade-in': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
            animation: {
                'fade-out': 'fade-out 250ms ease-in-out',
                'fade-in': 'fade-in 250ms ease-in-out',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'aside-scrollbars': (value) => {
                        const track = value === 'light' ? '100' : '900';
                        const thumb = value === 'light' ? '300' : '600';
                        const color = value === 'light' ? 'gray' : value;

                        return {
                            'scrollbarWidth': 'thin',
                            'scrollbarColor': `${theme(`colors.${color}.${thumb}`)} ${theme(`colors.${color}.${track}`)}`,
                            '&::-webkit-scrollbar': {
                                width: '8px',
                                height: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: theme(`colors.${color}.${track}`),
                            },
                            '&::-webkit-scrollbar-thumb': {
                                borderRadius: '0.25rem',
                                backgroundColor: theme(`colors.${color}.${thumb}`),
                            },
                        };
                    },
                },
                { values: theme('asideScrollbars') },
            );
        }),
    ],
};
