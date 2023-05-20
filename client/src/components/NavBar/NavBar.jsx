import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
function NavBar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Jhon Doe",
    isSeller: true,
  };
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">freelance</span>
          </Link>

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Buisness</span>
          <span>Explore</span>
          <span>English</span>

          {currentUser?.isSeller && <span>Become a seller</span>}
          <span>Sign in</span>
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.unsplash.com/photo-1625522129296-b0107552c21a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="add">
                        Add new gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="orders">
                    orders
                  </Link>
                  <Link className="link" to="messages">
                    messages
                  </Link>
                  <Link className="link">Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
