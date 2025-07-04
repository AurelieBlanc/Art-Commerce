// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',     // si tu utilises /pages
      './app/**/*.{js,ts,jsx,tsx}',       // si tu utilises /app
      './components/**/*.{js,ts,jsx,tsx}', // pour tes composants
    ],
    theme: {
      extend: {
        fontFamily: {
            boogaloo: ['Boogaloo', 'sans-serif'], 
            rubik: ['Rubik', 'sans-serif'], 

        }, 
      },
    },
    plugins: [],
  }
  