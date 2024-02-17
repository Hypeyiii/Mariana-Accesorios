/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: 
    {
      "animation": {
        "text-gradient": "text-gradient 2s linear infinite"
      },
      "keyframes": {
        "text-gradient": {
          "to": {
            "backgroundPosition": "200% center"
          }
        }
      }
    }
    ,
  },
  plugins: [
    require('flowbite/plugin'),

  ],
}