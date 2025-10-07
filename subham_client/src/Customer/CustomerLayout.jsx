import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar, { SurpriceNav, MaddhaNav } from "./navebar/Navbar";
import Footer from "./footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import Student from "./pages/Student/Student";

const CustomerLayout = () => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);
  const navigate = useNavigate();

  // Define route checks first
  const isDestinationRoute = ["destination"].some((route) =>
    location.pathname.includes(route)
  );
  const isDestinationIndiaRoute = ["destination-india"].some((route) =>
    location.pathname.includes(route)
  );

  const isSurpriceRoute = [
    "payanam/groupmadhu",
    "vasan-tour-package",
    "madha-register",
    "Enquirey",
    "new-register",
    "new-login",
    "vaibhavam",
  ].some((route) => location.pathname.includes(route));

  const isSpecialRoute = ["new-register", "new-login", "madha-register"].some(
    (route) => location.pathname.includes(route)
  );

  const StuRoute = ["students-tour"].some((route) =>
    location.pathname.includes(route)
  );

  const isMadha = ["payanam/groupmadhu", "madha-register", "new-login"].some(
    (route) => location.pathname.includes(route)
  );

  // Handle redirects
  useEffect(() => {
    if (isDestinationRoute) {
      navigate("/srilanka-tour-packages");
    }
    if (isDestinationIndiaRoute) {
      navigate("/indian-tour-packages");
    }
  }, [navigate, isDestinationRoute, isDestinationIndiaRoute]);

  return (
    <div>
      {/* <div
        className={`sticky top-0 !z-50 ${
          isSpecialRoute  ? "hidden" : ""
        }`}
      >
        {isMadha ? (
          <MaddhaNav />
        ) : isSurpriceRoute ? (
          <SurpriceNav />
        ) : (
          <Navbar />
        )}
      </div>

      <ParallaxProvider>
        <Outlet />
      </ParallaxProvider>

      {/* Hide footer for surprise route */}
      {/* <div className={`${isSpecialRoute || StuRoute ? "hidden" : ""}`}>
        {!isSurpriceRoute && <Footer />}
      </div> */} 
      <Student/>
    </div>
  );
};

export default CustomerLayout;
