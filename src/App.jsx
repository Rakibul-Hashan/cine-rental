import { useReducer, useState } from "react";
import Home from "./components/Pages/Home/Home";
import { MovieContext, ThemeContext } from "./context";
import { CartReducer, initialState } from "./reducers/CartReducer";

export default function App() {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);
console.log(state);
  return (
    <>
      <MovieContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Home />
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  );
}
