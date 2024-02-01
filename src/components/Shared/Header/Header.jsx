import Logo from "/assets/logo.svg";
import ring from "/assets/ring.svg";
import moon from "/assets/icons/moon.svg";
import cart from "/assets/shopping-cart.svg";
import CartDetailsModal from "../../../cine/CartDetailsModal";
import { useContext, useState } from "react";
import { MovieContext } from "../../../context";
const Header = () => {
  const { cartData, setCartData } = useContext(MovieContext);
  const [showCartModal, setShowCartModal] = useState(false);
  const handleShowCart = () => {
    setShowCartModal(true);
  };
  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };
  return (
    <>
      {showCartModal && (
        <CartDetailsModal onCloseCartModal={handleCloseCartModal} />
      )}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="ring" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={moon} width="24" height="24" alt="moon" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleShowCart}
              >
                <img src={cart} width="24" height="24" alt="cart" />
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
