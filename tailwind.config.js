/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1024px",
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                akaya: ["Akaya Telivigala", "cursive"],
            },
            keyframes: {
                "slide-up": {
                    "0%": {
                        // "-webkit-transform": "translateY(-100%)",
                        // transform: "translateY(-100%)",
                        bottom: "-100%",
                    },
                    "100%": {
                        // "-webkit-transform": "translateY(0%)",
                        // transform: "translateY(0%)",
                        bottom: "0",
                    },
                },
            },
            animation: {
                "slide-up": "slide-up 0.2s ease both;",
            },
        },
        colors: {
            first: "hsl(353, 100%, 65%)",
            btn: "#f3695a",
            title: "hsl(244, 24%, 26%)",
            text: "hsl(244, 16%, 43%)",
            body: "hsl(258, 60%, 98%)",
            white: "#fff",
        },
        fontSize: {
            h1: "2.25rem",
            h2: "1.5rem",
            h3: "1.25rem",
            l: "1rem",
            m: "0.875rem",
            s: "0.8rem",
        },
        boxShadow: {
            1: "0 5px 20px 0 rgb(69 67 96 / 10%)",
        },
    },
    plugins: [],
};
