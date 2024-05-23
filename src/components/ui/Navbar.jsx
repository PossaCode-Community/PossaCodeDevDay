import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
// import { logo } from "../images/possacodelogo.png";

function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  function handleToggleMenu() {
    setShowMenu(!showMenu);
    console.log("fais");
  }

  return (
    <div>
      <nav className="relative ">
        <div className="flex item-center justify-between text-white">
          <a href="#">
            <img src="./possacodelogo.png" alt="logo image" />
          </a>
          {/* Desktop nav */}
          <ul className="hidden space-x-5 items-center font-semibold text-sm md:text-xl lg:flex">
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">A propos</a>
            </li>
            <li>
              <a href="#">Speaker</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="hidden py-3 px-5 bg-white text-primaryOrange transition-all rounded-md shadow-customShadow hover:shadow-none lg:block"
            >
              <a href="#" className="w-full text-xl font-bold">
                S'Inscrire
              </a>
            </button>
            <button
              type="button"
              onClick={handleToggleMenu}
              className="lg:hidden flex items-center"
            >
              {showMenu ? <AlignJustify /> : <X />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {!showMenu && (
          <div className=" lg:hidden">
            <ul className="absolute z-30 flex flex-col items-center self-end py-8 mt-5 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#">A propos</a>
              </li>
              <li>
                <a href="#">Speaker</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
