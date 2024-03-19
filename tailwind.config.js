/** @type {import('tailwindcss').Config} */
module.exports = {
    // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: ["./src/**/*.{edge,js,ts,jsx,tsx,vue}"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
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
        },
    },
    plugins: [],
};
