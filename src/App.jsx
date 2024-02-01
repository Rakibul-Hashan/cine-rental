import { useState } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Sidebar from "./components/Shared/Sidebar/Sidebar";
import { MovieContext } from "./context";

export default function App() {
  const [cartData, setCartData] = useState([]);
  console.log(cartData);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}
