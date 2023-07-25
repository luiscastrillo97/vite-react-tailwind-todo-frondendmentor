/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "mobile-bg": "url('./assets/images/bg-mobile-light.jpg')",
            },
        },
    },
    plugins: [],
};
