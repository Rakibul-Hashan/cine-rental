import { useContext } from "react";
import MovieList from "../../../cine/MovieList";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { ThemeContext } from "../../../context";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? "dark" : ""} h-full w-full`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
