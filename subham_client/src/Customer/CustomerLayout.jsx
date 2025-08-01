import { Outlet, useLocation } from "react-router-dom";
import Navbar,{SurpriceNav,MaddhaNav} from "./navebar/Navbar";
import Footer from "./footer/Footer";
// import { ImageGallery } from "./pages/surprice/Surprice";
import Vasan from "./surprice/Vasan";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";

const CustomerLayout = () => {
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(true);
  
  // Check if current route is 'surprice'
  const isSurpriceRoute = [,"payanam/groupmadhu","vasan-tour-package","madha-register", "Enquirey","new-register", "new-login","vaibhavam"].some(route => 
    location.pathname.includes(route)
  );
 const isSpecialRoute = ["new-register", "new-login","madha-register"].some(route => 
    location.pathname.includes(route)
  );

  const isMadha = ["payanam/groupmadhu","madha-register", "new-login",].some(route => 
    location.pathname.includes(route)
  );

  return (
    <div>
      <div className={`sticky top-0 !z-50 ${isSpecialRoute?"hidden":""}`}>

      {isMadha?<MaddhaNav/>:isSurpriceRoute ? <SurpriceNav /> : <Navbar />}

      </div>
      <ParallaxProvider>
        { <Outlet />}
      </ParallaxProvider>
      {/* Hide footer for surprise route */}
      <div className={`${isSpecialRoute?"hidden":""}`}></div>
      {!isSurpriceRoute && <Footer />}
    </div>
  );
};

export default CustomerLayout;