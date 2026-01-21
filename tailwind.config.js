/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lime: {
                    400: '#A3E635',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Syne', 'sans-serif'],
                mono: ['monospace'], // Placeholder, will refine
            }
        },
    },
    plugins: [],
}
