import { Link } from "react-router-dom"
import { Search } from "./Search"

function Navbar(props) {
    return (
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
        <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
        <p className="text-2xl bg-blue-500 p-2 font-bold rounded-3xl text-gray-50 dark:bg-gray-400 dark:text-gray-900">
            G🟣🔵gle-2.0 🔥
          </p>
        </Link>
        <button type="button" onClick={() => props.setDarkTheme(!(props.darkTheme))} className="border-2 rounded-full p-2 hover:shadow-lg dark:hover:shadow-yellow-400">
          {props.darkTheme? "Light 🌝": "Dark 🌚"}
        </button>
        </div>
        <Search />
      </div>
    )
  }
  
  export default Navbar