import { useContext, useState } from "react";
import { getImgURL } from "../utils/cineUtility";
import MovieModal from "./MovieModal";
import Rating from "./Rating";
import { MovieContext } from "../context";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);

  // handlers
  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  const handleSelection = (selectAMovie) => {
    setSelectedMovie(selectAMovie);
    setShowModal(true);
  };
  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const found = cartData.find((item) => item.id === movie.id);
    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      return alert(`The movie ${movie.title} has already been added to cart`);
    }
  };

  return (
    <>
      {showModal && (
        <MovieModal
          key={movie.id}
          onClose={handleCloseModal}
          selectedMovie={selectedMovie}
          onAddToCart={handleAddToCart}
        />
      )}
      {/* card body */}

      <figure className="p-4 hover:cursor-pointer border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <span onClick={() => handleSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgURL(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">
              Action/Adventure/Sci-fi
            </p>
            <div className="flex items-center space-x-1 mb-5">
              {/* Rating */}
              <Rating ratingCount={movie.rating} />
              {/* Rating */}
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href=""
              onClick={handleAddToCart}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </span>
      </figure>
    </>
  );
};

export default MovieCard;
