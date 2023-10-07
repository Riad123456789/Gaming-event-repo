/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://i.ibb.co/n78tBCL/Gaming-Industry-Page-header.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
}

