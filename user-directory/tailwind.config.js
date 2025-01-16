/** @type {import('tailwindcss').Config} */
export default {
  content: ["../context/UserContext",
    "./pages/HomePage", 
   "./pages/UserDetailPage", "./components/SearchBar",
   "./components/SortingControls",
   "./components/UserCard"

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

