import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import bg_1 from "../../../assets/madhu matha/madha_1.png";
import bg_2 from "../../../assets/madhu matha/madha_2.png";
import bg_3 from "../../../assets/madhu matha/mada_3.png";
import bg_4 from "../../../assets/madhu matha/madha_4.jpg";
import madha from "../../../assets/madhu matha/madha.png";
import { Clock, Eye, Star } from "lucide-react";
import { GiPriceTag } from "react-icons/gi";
import { MdMessage } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Madhamail } from "../Surprice/mail/Mail";
import {
  FaClock,
  FaMapMarkerAlt,
  FaShip,
  FaUtensils,
  FaHotel,
  FaChurch,
  FaSun,
  FaMoon,
  FaInfoCircle,
  FaChevronDown,
} from "react-icons/fa";
import { GiSundial } from "react-icons/gi";
import { GiJourney } from "react-icons/gi";
import { GrOverview } from "react-icons/gr";
import { FaCarSide } from "react-icons/fa";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const packages = [
  {
    _id: "687b51baab00690f1d74a5f6",
    name: "MADHU MARIAN PILGRIMAGE",
    image: "https://msmwebfiles.s3.amazonaws.com/1752912299445.jpg",
    original_price: 27500,
    discount_price: 22500,
    message_description: "On Every Tuesday - Sunday Not Available",
    duration: "2 Nights / 3 Days",
    location: "North Srilanka",
    contact: "+91 9087143535",
    description:
      "Christian pilgrimages in Sri Lanka offer a spiritually meaningful journey through some of the island's most historic and sacred sites...",
  },
];

const basilicaTour = {
  title: "BASILIC A TOUR – SRI LANKA",
  days: [
    {
      day: 1,
      title: "Departure from Nagapattinam – Arrival & Jaffna City Tour",
      schedule: [
        {
          time: "5:00 AM",
          activity:
            "Assemble at Nagapattinam Port for ferry check-in and immigration",
        },
        {
          time: "7:30 AM",
          activity: "Ferry departs to Sri Lanka (Subham Ferry)",
        },
        {
          time: "8:00 AM",
          activity: "Breakfast served on board",
        },
        {
          time: "11:30 AM",
          activity: "Arrive at Kankesanthurai (KKS) Port, Sri Lanka",
        },
        {
          time: "1:00 PM",
          activity: "Lunch en route or at hotel",
        },
        {
          time: "2:00 PM",
          activity: "Hotel check-in and freshen up",
        },
        {
          time: "3:00 PM to 7:30 PM",
          activity: "Local Jaffna Sightseeing",
          activity_icon: "explore",

          attractions: [
            "Jaffna Fort",
            "St. Antony's Church",
            "Jaffna Library",
            "Nallur Kandaswamy Temple",
          ],
          note: "Evening shopping at Jaffna Market",
        },
        {
          time: "8:00 PM",
          activity: "Dinner and overnight stay in Jaffna",
          activity_icon: "Dinner",
        },
      ],
    },
    {
      day: 2,
      title: "Madhu Church & Mannar Exploration",
      schedule: [
        {
          time: "7:00 AM",
          activity: "Breakfast at hotel",
          activity_icon: "Breakfast",
        },
        {
          time: "8:00 AM",
          activity: "Start to Madhu Church (approx. 3-hour journey)",
          activity_icon: "travel",
        },
        {
          time: "11:00 AM",
          activity: "Attend Mass and explore Our Lady of Madhu Shrine",
          activity_icon: "Mass",
        },
        {
          time: "1:30 PM",
          activity: "Post-lunch, depart for Mannar",
          activity_icon: "Breakfast",
        },
        {
          time: "2:30 PM to 5:00 PM",
          activity: "Mannar Sightseeing",
          activity_icon: "explore",
          attractions: [
            "Mannar Pier",
            "Mannar Lighthouse",
            "Adam's Bridge (Rama's Bridge)",
            "Beach walk and local interaction",
          ],
        },
        {
          time: "6:00 PM",
          activity: "Return journey to Jaffna",
          activity_icon: "travel",
        },
        {
          time: "8:30 PM",
          activity: "Arrive at hotel, dinner and overnight stay",
          activity_icon: "Hotel",
        },
      ],
    },
    {
      day: 3,
      title: "Keerimalai Springs & Return to India",
      schedule: [
        {
          time: "8:00 AM",
          activity: "Breakfast and hotel check-out",
        },
        {
          time: "9:00 AM",
          activity: "Visit",
          activity_icon: "explore",
          attractions: [
            "Keerimalai Springs (optional bath)",
          ],
        },
        {
          time: "12:00 PM",
          activity: "Proceed to KKS Port for immigration and ferry boarding",
          activity_icon: "Ferry departs",
        },
      ],
    },
  ],
  notes: [
    "All timings are approximate and subject to change",
    "Itinerary may be adjusted based on weather conditions and local circumstances",
  ],
};

const activityIcons = {
  Assemble: <FaClock className="text-primary" />,
  "Ferry departs": <FaShip className="text-blue-500" />,
  Breakfast: <FaUtensils className="text-amber-500" />,
  Arrive: <FaMapMarkerAlt className="text-green-500" />,
  Lunch: <FaUtensils className="text-amber-600" />,
  Hotel: <FaHotel className="text-purple-500" />,
  Sightseeing: <FaMapMarkerAlt className="text-red-500" />,
  Dinner: <FaUtensils className="text-amber-700" />,
  Mass: <FaChurch className="text-rose-500" />,
  Visit: <FaSun className="text-yellow-500" />,
  travel: <FaCarSide className="text-blue-500" />,
  explore: <GrOverview className="text-green-500" />,
  default: <GiSundial className="text-gray-500" />,
};

const testimonials = [
  {
    initial: "M",
    name: "Maria Fernandez",
    location: "Colombo, Sri Lanka",
    message:
      "The retreat was perfectly organized. Visiting all the churches in Jaffna was spiritually uplifting. The schedule was well-planned without feeling rushed.",
    stars: 5,
  },
  {
    initial: "A",
    name: "Anita Rajesh",
    location: "Chennai, India",
    message:
      "The Madhu pilgrimage was a life-changing experience. The organizers took care of every detail, allowing us to focus on our spiritual journey.",
    stars: 5,
  },
  {
    initial: "S",
    name: "Suresh Kumar",
    location: "Bangalore, India",
    message:
      "The visit to Jaffna Public Library was an unexpected highlight. The entire pilgrimage was seamless and meaningful. Special thanks to Pradeepa mam!",
    stars: 5,
  },
  {
    initial: "R",
    name: "Rohit Mehta",
    location: "Mumbai, India",
    message:
      "The ferry journey was breathtaking and the hotel stay was very comfortable. Everything was perfectly arranged - truly a pilgrimage to remember!",
    stars: 5,
  },
];

const Top_attractions = [
  {
    name: "Jaffna Fort",
    image: "https://msmwebfiles.s3.amazonaws.com/1752910391257.jpg",
    description:
      "Jaffna Fort, located near the Jaffna Lagoon in northern Sri Lanka, is a historic Dutch fort that stands as a powerful reminder of the island's colonial past.",
    _id: "687b51baab00690f1d74a5f7",
  },
  {
    name: "St. Mary's Cathedral",
    image: "https://msmwebfiles.s3.amazonaws.com/1752910534061.webp",
    description:
      "St. Mary's Cathedral, also affectionately known as Periye Kovil, stands as the majestic seat of the Roman Catholic Diocese of Jaffna in Gurunagar.",
    _id: "687b51baab00690f1d74a5f8",
  },

  {
    name: "Madhu Madha Church ",
    image: "https://msmwebfiles.s3.amazonaws.com/1752922319573.jpg",
    description:
      "Shrine of Our Lady of Madhu (Madhu Madha Church) in Mannar is Sri Lanka’s holiest Catholic Marian shrine and a revered site of unity, healing, and faith.",
    _id: "687b7aedab00690f1d777590",
  },
  {
    name: "St. Anthony's Church",
    image: "https://msmwebfiles.s3.amazonaws.com/1752921948695.jpg",
    description:
      "St. Anthony’s Church (Passaiyoor), Jaffna is a historic Roman Catholic shrine built in 1911, famous for its open-pillared façade and coastal setting in the Passaiyoor suburb of Jaffna.",
    _id: "687b7aedab00690f1d77758d",
  },
  {
    name: "Mannar Fort ",
    image: "https://msmwebfiles.s3.amazonaws.com/1752922049342.jpg",
    description:
      "Mannar Fort, built by the Portuguese in 1560 and later expanded by the Dutch, is a coastal fort on Mannar Island known for its coral-stone walls and square bastions.",
    _id: "687b7aedab00690f1d77758e",
  },
  {
    name: "Keerimalai Springs ",
    image: "https://msmwebfiles.s3.amazonaws.com/1752922481325.jpg",
    description:
      "Keerimalai Springs, also known as the Keerimalai Holy Pond, is a sacred freshwater spring located about 20–25 km north of Jaffna.",
    _id: "687b7aedab00690f1d777591",
  },
];

const included_excluded = [
  {
    type: "included",
    description: "Ferry tickets",
    _id: "687b51baab00690f1d74a601",
  },
  {
    type: "included",
    description: "only breakfast",
    _id: "687b51baab00690f1d74a602",
  },
  {
    type: "included",
    description: "Double / Triple-sharing accommodations upon availability in a two-star hotel",
    _id: "687b51baab00690f1d74a602",
  },
  {
    type: "included",
    description: "Local Sightseeing Transportation",
    _id: "687b51baab00690f1d74a603",
  },
  {
    type: "excluded",
    description: "All entry tickets & Attraction transits",
    _id: "687b51baab00690f1d74a605",
  },
  {
    type: "excluded",
    description: "Additional Activities",
    _id: "687b51baab00690f1d74a606",
  },
];

const Madha = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [expandedDay, setExpandedDay] = useState(1);

  const getActivityIcon = (activity) => {
    const key = Object.keys(activityIcons).find((iconKey) =>
      activity.startsWith(iconKey)
    );
    return key ? activityIcons[key] : activityIcons.default;
  };
  const navigate = useNavigate();

  const toggleDay = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };
 

  const Madha_imag = [
    { id: 1, src: bg_1, name: "madha" },
    { id: 2, src: bg_2, name: "" },
    { id: 3, src: bg_3, name: "" },
    { id: 4, src: bg_4, name: "" },
  ];

  const showModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Image Slider */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative"
      >
        {/* Background Slider */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="w-full"
        >
          {Madha_imag.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="w-full h-[50vh] lg:h-[80vh] overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.name}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Madha Image Overlay - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-0 left-[30%] lg:left-[40%]  z-10"
        >
          <img
            src={madha}
            alt="Madha"
            className="h-[200px] md:h-[700px] object-contain"
          />
        </motion.div>

        {/* Headline with gradient text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-[4rem] lg:top-1/3 left-4  z-10 px-4 text-center"
        >
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#f5f5f5] to-[#f5f5f5] bg-clip-text text-transparent drop-shadow-lg">
            Walk with the Divine
          </h1>
          <p className="text-md md:text-2xl font-semibold text-white mt-4 max-w-3xl mx-auto">
            Guided Pilgrimage to Our Lady of Madhu
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden lg:block absolute top-1/3 right-4  z-10 px-4 text-center "
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#f5f5f5] to-[#f5f5f5] bg-clip-text text-transparent drop-shadow-lg">
            Book Now for 2025!
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white mt-4 max-w-3xl mx-auto">
            Spiritual Renewal at Ancient Marian Shrine
          </p>
        </motion.div>

        {/* Floating prayer beads decoration (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1 }}
          className="absolute bottom-20 left-10 z-0"
        >
          <div className="text-white text-8xl">📿</div>
        </motion.div>
      </motion.section>
      {/* Package Details Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mx-auto px-4 py-2 md:py-4"
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <motion.div
              variants={slideUp}
              className="flex flex-col bg-white p-4 rounded-xl "
            >
              <div className="flex flex-col gap-4 lg:flex-row items-center justify-between lg:w-full lg:text-xl text-lg w-[80%] font-semibold text-primary">
                <div>
                  {"INR"}&nbsp;
                  {Number(22500 || 0).toFixed(2)}
                  <span className="line-through ml-2 text-gray-400 text-base">
                    INR &nbsp;
                    {Number(28000 || 0).toFixed(2)}
                  </span>
                  <span className="ml-2 text-black text-base font-normal">
                    / Per Person
                  </span>
                </div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <button
                    onClick={() => showModal(selectedPackage)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300"
                  >
                    Book Now
                  </button>
                </motion.div>
              </div>

              {isModalOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                >
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
                  >
                    <div className="flex justify-between items-center border-b p-4">
                      <h3 className="text-lg font-semibold">
                        Book Your Package
                      </h3>
                      <button
                        onClick={handleCancel}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="p-0">
                      <p className="text-center py-8">
                        <Madhamail/>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              <motion.div
                variants={fadeIn}
                className="mt-8 text-gray-700 text-base font-normal leading-relaxed"
              >
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Available Pilgrimage Batches
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded-md shadow-sm border border-blue-100">
                      <div className="flex items-center gap-2">
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-sm">
                          Batch 1
                        </span>
                        <span className="font-medium">July 26 - 28, 2025</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Departure from Nagapattinam
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-md shadow-sm border border-blue-100">
                      <div className="flex items-center gap-2">
                        <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-sm">
                          Batch 2
                        </span>
                        <span className="font-medium">July 28 - 30, 2025</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Special Feast Week Departure
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mb-4">
                  Christian pilgrimages in Sri Lanka offer a spiritually
                  meaningful journey through some of the island's most historic
                  and sacred sites. Though Christianity is a minority religion
                  in the country, its deep roots—shaped by Portuguese, Dutch,
                  and British colonial history—have given rise to several
                  revered places of worship.
                </p>

                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mb-4">
                  <p className="font-medium text-amber-800 flex items-start gap-2">
                    <span className="text-amber-600">★</span>
                    <span>
                      The{" "}
                      <span className="font-semibold">July 28-30 Batch</span>{" "}
                      coincides with the annual feast celebrations at the Shrine
                      of Our Lady of Madhu, offering pilgrims a unique
                      opportunity to participate in these sacred festivities.
                    </span>
                  </p>
                </div>

                <p>
                  Among the most significant is the Shrine of Our Lady of Madhu
                  in Mannar, a 400-year-old Marian shrine visited by thousands
                  of devotees annually. Both pilgrimage batches include visits
                  to this holy site, with Batch 2 specially timed to experience
                  the vibrant feast day celebrations.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={slideUp}
            className="text-3xl font-bold text-center text-primary mb-12"
          >
            Pilgrim Experiences
          </motion.h2>

          <motion.div variants={fadeIn}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              centeredSlides={false}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="!pb-12"
            >
              {testimonials.map((review, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-md h-full border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4">
                        {review.initial}
                      </div>
                      <div className="flex flex-col gap-0">
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-gray-500 text-sm">
                          {review.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">"{review.message}"</p>
                    <div className="flex items-center text-primary">
                      <span className="text-black font-semibold mr-2">
                        Review:
                      </span>
                      {[...Array(review.stars)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.section>

      {/* Top Attractions Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-white py-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="w-[80%] mx-auto">
          <motion.h2
            variants={slideUp}
            className="text-3xl font-bold text-center text-primary mb-12"
          >
            Top Attractions
          </motion.h2>

          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Top_attractions.map((attraction, index) => (
              <motion.div
                key={attraction._id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Star className="text-yellow-500 mr-1" size={16} />
                    <h3 className="font-semibold text-lg">{attraction.name}</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {attraction.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Included/Excluded Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gray-50 py-16 px-20 sm:px-6 lg:px-8"
      >
        <div className="w-full lg:max-w-7xl mx-auto">
          <motion.h2
            variants={slideUp}
            className="text-3xl font-bold text-center text-primary mb-12"
          >
            What's Included
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                Included
              </h3>
              <ul className="space-y-3">
                {included_excluded
                  .filter((item) => item.type === "included")
                  .map((item) => (
                    <motion.li
                      key={item._id}
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{item.description}</span>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                Not Included
              </h3>
              <ul className="space-y-3">
                {included_excluded
                  .filter((item) => item.type === "excluded")
                  .map((item) => (
                    <motion.li
                      key={item._id}
                      whileHover={{ x: 5 }}
                      className="flex items-start"
                    >
                      <span className="text-red-500 mr-2">✗</span>
                      <span>{item.description}</span>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12 bg-gray-50"
      >
        <div className="max-w-[90%] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Tour Itinerary
          </h2>

          <div className="space-y-4">
            {basilicaTour.days.map((day) => (
              <div
                key={day.day}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full p-4 flex justify-between items-center  bg-primary  text-white hover:from-primary-dark hover:to-primary transition-colors"
                >
                  <h3 className="text-lg font-bold">
                    Day {day.day}: {day.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedDay === day.day ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-white" />
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: expandedDay === day.day ? "auto" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-4 space-y-3">
                    {day.schedule.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 rounded"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            {getActivityIcon(
                              item.activity_icon || item.activity
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-primary-dark">
                            {item.time}
                          </p>
                          <p className="text-gray-800">{item.activity}</p>
                          {item.attractions && (
                            <div className="mt-2 pl-3 border-l-2 border-primary/20">
                              <p className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                                <FaMapMarkerAlt className="text-primary text-sm" />
                                Visiting:
                              </p>
                              <ul className="space-y-1">
                                {item.attractions.map((attraction, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start text-sm"
                                  >
                                    <span className="text-primary mr-1">•</span>
                                    <span className="text-gray-700">
                                      {attraction}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Madha;
