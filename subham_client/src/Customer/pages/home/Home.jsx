// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import News from "../../newsLetter/News";
import Instapic from "../../Dashbord/Instapic";
import Testimonial from "../../Dashbord/Testimonial";
import Event from "../../Dashbord/Event";
import Smabout from "../../Dashbord/Smabout";
import Hero from "../../Dashbord/Hero";
import Smblogs from "../../Dashbord/Smblogs";
import { Helmet } from "react-helmet-async";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>India to Sri Lanka Ferry Service | Sail Subham Tours
</title>
<meta name="description" content="Experience the easiest India–Sri Lanka travel with Sail Subham’s ferry service. Affordable packages, hotel stay, transport & temple tours – book now!
" />
<meta name="keywords" content="India to Sri Lanka ferry, Ferry service to Sri Lanka, Nagapattinam to Jaffna ferry, Sri Lanka tour packages, Sri Lanka ferry booking, Budget Sri Lanka travel, Ferry from India to Sri Lanka
" />
      </Helmet>
      <div className="">
        <Hero />
        <Smabout />
        <Event />
        {/* <Testimonial/> */}
        <Instapic />
        {/* <Smblogs /> */}
      </div>
    </div>
  );
};

export default Home;
