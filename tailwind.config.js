/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      "padding":"10px",
    },
    extend: {
      backgroundColor: {
        "header-bg": "#00FFCA"
      },
      backgroundImage:{
        "hero": "url('assets/hero-bg.png')",
         "finance": "url('assets/finance.png')",
         "np": "url('assets/np.png')",
         "footer": "url('assets/footer.png')"
      },
    },
  },
  plugins: [],
}