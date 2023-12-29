import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import "./LogIn.css";

const LogIn = () => {
  const { login, profile, isLoading } = useShoppingCart();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bgLogIn">
        {isLoading && (
          <div className="isLoading d-flex justify-content-center align-items-center">
            <div className="spinner-border"></div>
          </div>
        )}
        {!profile ? (
          <div className="loginBoxPosition d-flex justify-content-center align-items-center">
            <div
              className="loginBoxSize d-flex align-items-center flex-column bg-primary border border-dark rounded-pill text-white"
              data-aos="fade-down"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h2 className="contentLogIn pt-5">Login to the user account.</h2>
              <br />
              <br />
              <>
                <p className="contentLogIn mb-1">
                  Registering allows you to make purchases/orders.
                </p>
                <br />
                <Button id="login" onClick={() => login()}>
                  Sign in with Google
                </Button>
                {/* <Nav.Link onClick={() => login()}>
                  <a href="#" className="HpBtn HpBtn--accent HpBtn--streched">
                    I'm ready to shop
                  </a>
                </Nav.Link> */}
              </>
            </div>
          </div>
        ) : (
          <Navigate to="/registration" />
        )}
      </div>
      <footer className="HpBlock HpBlock--dark footer">
        <div className="container grid footer__sections">
          <section className="footer__section">
            <div>
              <h2 className="footer__heading">Categories</h2>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="#">Furniture</a>
                </li>
                <li>
                  <a href="#">Home decoration</a>
                </li>
                <li>
                  <a href="#">Multimedia</a>
                </li>
                <li>
                  <a href="#">Footwear</a>
                </li>
                <li>
                  <a href="#">Clothes</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer__section">
            <div>
              <h2 className="footer__heading">Company</h2>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer__section">
            <div>
              <h2 className="footer__heading">Contact and services</h2>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="#">Store locations</a>
                </li>
                <li>
                  <a href="#">Payment methods and loans</a>
                </li>
                <li>
                  <a href="#">Delivery and assembly</a>
                </li>
                <li>
                  <a href="#">Reclamation</a>
                </li>
                <li>
                  <a href="#">Web shop business conditions</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer__section">
            <div>
              <h2 className="footer__heading">Inspiration</h2>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="#">Furnish the apartment</a>
                </li>
                <li>
                  <a href="#">Catalogues</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
            </div>
          </section>

          <div className="footer__brand">
            <img
              className="footer__logo"
              src="logo/bags.svg"
              alt="Brand image"
            />
            <p className="footer__copyright">Copyright 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LogIn;
