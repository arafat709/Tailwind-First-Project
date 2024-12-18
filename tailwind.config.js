/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.html" // If you have HTML files in the public folder
  ],
  
  theme: {
    container:{
      "padding":"10px",
    },
    extend: {
      backgroundColor: {
        "header-bg": "#00FFCA"
      },
      backgroundImage:{
        "hero": "url('/assets/hero-bg.png')",
         "finance": "url('/assets/finance.png')",
         "np": "url('/assets/np.png')",
         "footer": "url('/assets/footer.png')"
      },
    },
  },
  plugins: [],
}