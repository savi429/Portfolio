import { Link } from "react-router-dom";
import logo from "./../Assets/images/logo.png";
import {
  // AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
const Header = () => {
  const [sidebar, showSidebar] = useState(false);
  const sidebarHandler = () => {
    showSidebar((prev) => !prev);
  };
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    }

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isBottom ? "sticky" : ""}`}>
      <div className="header-wrapper">
        <div>
          <h2 style={{ color: "#800080" }}>SG</h2>
        </div>
        <RxHamburgerMenu className="burger" onClick={sidebarHandler} />
        <nav
          className={`nav-items ${sidebar ? "show-sidebar" : "hide-sidebar"}`}
        >
          <ul>
            <li>
              <Link to={"/"}>
                <AiOutlineHome style={{ marginRight: "5px" }} />
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <AiOutlineUser style={{ marginRight: "5px" }} />
                About
              </Link>
            </li>
            <li>
              <Link to={"/projects"}>
                <AiOutlineFundProjectionScreen style={{ marginRight: "5px" }} />
                Projects
              </Link>
            </li>
            <li>
              <Link to={"/resume"}>
                <CgFileDocument style={{ marginRight: "5px" }} />
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
