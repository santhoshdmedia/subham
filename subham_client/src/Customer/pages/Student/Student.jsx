import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import {
  Ship,
  Users,
  Calendar,
  MapPin,
  GraduationCap,
  Camera,
  Leaf,
  BookOpen,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Anchor,
  Globe,
} from "lucide-react";
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
import { HiOutlineUserGroup } from "react-icons/hi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { IMAGE_HELPER } from "../../../helper/Imagehelper";
import { ICON_HELPER } from "../../../helper/IconHelper";
import { Link } from "react-router-dom";
import "./s.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { GiTeamIdea, GiNightSleep, GiShipBow } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { MdSportsEsports } from "react-icons/md";
// slider images
import activity from "../../../assets/student/activity.png";
import StuGroup from "../../../assets/student/student/gropStu.jpg";
import Stu from "../../../assets/student/student/gropStuCol.webp";
import GroupStu from "../../../assets/student/student/college_group.webp";
import Beach from "../../../assets/student/student/beach.webp";
import dambula from "../../../assets/student/student/dambula.webp";
import university from "../../../assets/student/student/university.webp";
import lib from "../../../assets/student/student/librarey.jpg";
import Beachchill from "../../../assets/student/student/beach_chil.jpg";
// mail
const Stumail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `Hi, I’m interested in Explore Northern Sri Lanka package for students can you please provide me with more details.`,
    package: "Explore Northern Sri Lanka package",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleChange()
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        "https://subham-backend-2.onrender.com/api/auth/send-inquiry",
        formData
      );

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        package: "",
      });

      toast.success(
        "Thank you! Your inquiry has been submitted successfully. We will contact you within 24 hours."
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to submit inquiry. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg  max-w-3xl mx-auto">
      {submitStatus && (
        <div
          className={`mb-6 p-4 rounded ${
            submitStatus.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-start">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700  mb-1"
          >
            Full Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-black ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-start">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-black ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col items-start">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={(e) => {
                // Validation on blur
                const phoneRegex = /^(\+91[\-\s]?)?[6789]\d{9}$/;
                if (!phoneRegex.test(e.target.value.trim())) {
                  setErrors({
                    ...errors,
                    phone: "Please enter a valid 10-digit Indian mobile number",
                  });
                } else {
                  const newErrors = { ...errors };
                  delete newErrors.phone;
                  setErrors(newErrors);
                }
              }}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-black ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="+91 9876543210"
              maxLength="14" // For +91 and 10 digits
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 text-start">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start">
          <label
            htmlFor="package"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select package*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.package}
            onChange={handleChange}
            readOnly
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-black ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+91 9876543210"
            maxLength="14" // For +91 and 10 digits
          />
          {errors.package && (
            <p className="mt-1 text-sm text-red-600">{errors.package}</p>
          )}
        </div>

        <div className="flex flex-col items-start">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Message*
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={
              formData.message ||
              `Hi, I’m interested in ${
                formData.package || "basilica package"
              } can you please provide me with more details.`
            }
            onSubmit={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-black ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Tell us about your pilgrimage requirements..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-md shadow transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  viewBox="0 0 24 24"
                >
                  {/* Spinner SVG */}
                </svg>
                Processing...
              </span>
            ) : (
              "Submit Inquiry"
            )}
          </button>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

const studentTour = {
  title: "BASILIC A TOUR – SRI LANKA",
  days: [
    {
      day: 1,
      title: "Arrival & Coastal Orientation",
      schedule: [
        {
          time: "6:30 AM",
          activity: "Assemble at Nagapattinam Port",
        },
        {
          time: "7:30 AM– 11:30 AM",
          activity: " Ferry ride to KKS (Packed Indian-style breakfast – Free)",
          note: "Learning Opportunity: Observe international marine routes, discuss ferry transportation, customs & immigration process",
          activity_icon: "Ferry departs",
          noteIcon: "book",
        },

        {
          time: "12:30 PM",
          activity: "Check-in to hotel | Packed Sri Lankan Lunch",
          activity_icon: "Hotel",
        },
        {
          time: "2:00 – 6:30 PM",
          activity: "Beachside Games & Coastal Ecosystem Activities",
          attractions: [
            "Ice-breaking games, Team building tasks, Sand study, tide observation",
            "Environmental awareness discussion (plastic waste, tide behavior)",
          ],
          Games: true,
          activity_icon: "Activity",
        },
        {
          time: "8:00 PM",
          activity: "Dinner at hotel",
          activity_icon: "Breakfast",
        },
        {
          time: "9:00 PM",
          activity: "Lights off / Reflection writing on ferry experience",
          activity_icon: "sleep",
        },
      ],
    },
    {
      day: 2,
      title: " City Discovery & Heritage Study",
      schedule: [
        {
          time: "7:30 AM",
          activity: " Hotel Breakfast (LKR 550)",
          activity_icon: "Breakfast",
        },
        {
          time: "9:00 AM – 6:00 PM",
          activity:
            "Full-Day Jaffna Educational Exploration Places and Purpose",
          activity_icon: "travel",
          attractions: [
            "Jaffna Library – Post-war heritage, Tamil literature legacy",
            "Jaffna Fort – Portuguese & Dutch history + colonial influence",
            "Nallur Kandaswamy Kovil – Dravidian temple architecture and rituals",
            "University of Jaffna / Farm visit – Learn about higher education, research & local agricultural practices",
            "Point Pedro – Northernmost tip: Study of geography, local fishermen life",
            "Dambakolapatuna Port – Buddhism & trade routes",
          ],
          note: "Lunch In route",
          noteIcon: "Breakfast",
        },
        {
          time: "6:30 PM – 8:00 PM",
          activity:
            "Cultural Program or Guest Lecture on Tamil Literature/History",
          activity_icon: "book",
          note: "Optional: Debate or quiz based on the day’s visit",
          noteIcon: "quiz",
        },
        {
          time: "8:30 PM",
          activity: "Dinner & sleep",
          activity_icon: "Breakfast",
        },
      ],
    },
    {
      day: 3,
      title: "Nature & Reflection",
      schedule: [
        {
          time: "8:00 AM",
          activity: "Breakfast",
        },
        {
          time: "8:30 AM",
          activity:
            "Visit Keerimalai Springs – Traditional health springs, learn about water resources and wellness",
          activity_icon: "explore",
        },
        {
          time: "10:00 AM",
          activity: "Return to hotel, pack up",
          activity_icon: "Hotel",
        },
        {
          time: "11:00 AM",
          activity: "Arrive at KKS Port",
          activity_icon: "shipYard",
        },
        {
          time: "1:30 PM – 5:30 PM",
          activity: "Return ferry to Nagapattinam",
          activity_icon: "Ferry departs",
        },
        {
          time: "06:00 PM",
          activity: "Dispersal",
          activity_icon: "travel",
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
  "Ferry departs": <FaShip className="text-orange-500" />,
  Breakfast: <FaUtensils className="text-amber-500" />,
  Arrive: <FaMapMarkerAlt className="text-green-500" />,
  Activity: <MdSportsEsports className="text-black" />,
  Lunch: <FaUtensils className="text-amber-600" />,
  Hotel: <FaHotel className="text-purple-500" />,
  Sightseeing: <FaMapMarkerAlt className="text-red-500" />,
  quiz: <GiTeamIdea className="text-green-500" />,
  Dinner: <FaUtensils className="text-amber-700" />,
  Mass: <FaChurch className="text-rose-500" />,
  Visit: <FaSun className="text-yellow-500" />,
  travel: <FaCarSide className="text-blue-500" />,
  book: <FaBookOpen className="text-blue-500" />,
  shipYard: <GiShipBow className="text-amber-700" />,
  sleep: <GiNightSleep className="text-blue-500" />,
  explore: <GrOverview className="text-green-500" />,
  default: <GiSundial className="text-gray-500" />,
};

const Slides = [
  {
    src: "https://res.cloudinary.com/dmvc40kyp/image/upload/v1754141390/Subham/1754141390563.webp",
    caption: "Jafna Fort",
  },
  {
    src: "https://res.cloudinary.com/dmvc40kyp/image/upload/v1754141492/Subham/1754141492161.jpg",
    caption: "Dambakolapatuna Port",
  },
  {
    src: "https://res.cloudinary.com/dmvc40kyp/image/upload/v1754141605/Subham/1754141605117.jpg",
    caption: "Keerimalai Springs ",
  },
  {
    src: "https://res.cloudinary.com/dmvc40kyp/image/upload/v1754141664/Subham/1754141663778.jpg",
    caption: "Nallur Kandaswamy Kovil",
  },
  {
    src: "https://res.cloudinary.com/dmvc40kyp/image/upload/v1754141795/Subham/1754141794892.jpg",
    caption: "Point Pedro",
  },
  {
    src: "https://res.cloudinary.com/dmvc40kyp/image/upload/v1754141858/Subham/1754141857466.jpg",
    caption: "University of Jaffna / Farm visit",
  },
];
const Student = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedDay, setExpandedDay] = useState(1);
   const socialIcons = [
    {
      id: 1,
      title: ICON_HELPER.FACEBOOK_ICON,
      path: "https://www.facebook.com/share/18qKefQnzg/",
    },
 
    {
      id: 3,
      title: ICON_HELPER.INSTAGRAM_ICON,
      path: "https://www.instagram.com/sail_subham?igsh=MWtvOWxrMHVrYWp5eg==",
    },
  ];

  const images = [
    {
      url: lib,
      caption: "Ferry Journey Experience",
    },
    {
      url: StuGroup,
      caption: "Students Learning Together",
    },
    {
      url: Stu,
      caption: "Unite Through History",
    },
    {
      url: GroupStu,
      caption: "Cultural Heritage Sites",
    },
    {
      url: Beach,
      caption: "Educational Activities",
    },
    {
      url: Beachchill,
      caption: "Educational Activities",
    },
  ];

  const getActivityIcon = (activity) => {
    const key = Object.keys(activityIcons).find((iconKey) =>
      activity.startsWith(iconKey)
    );
    return key ? activityIcons[key] : activityIcons.default;
  };

  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival & Coastal Orientation",
      activities: [
        "6:30 AM: Assemble at Nagapattinam Port",
        "7:30 AM – 11:30 AM: Ferry ride to KKS (Packed Indian-style breakfast – Free)",
        " Learning Opportunity: Observe international marine routes, discuss ferry transportation, customs & immigration process",
        "12:30 PM: Check-in to hotel | Packed Sri Lankan Lunch",
        "2:00 – 6:30 PM: Beachside Games & Coastal Ecosystem Activities",
        "Ice-breaking games, Team building tasks, Sand study, tide observation",
        "Environmental awareness discussion (plastic waste, tide behavior)",
        "8:00 PM: Dinner at hotel ",
        "9:00 PM: Lights off / Reflection writing on ferry experience ",
      ],
    },
    {
      day: "Day 2",
      title: " City Discovery & Heritage Study",
      activities: [
        "7:30 AM: Hotel Breakfast (LKR 550)",
        "Explore Keerimalai Natural Spring & Naguleswaram Temple",
        "Visit Point Pedro – northernmost tip of Sri Lanka",
        "Relax at Casuarina Beach – eco-learning activities",
        "Optional: Jaffna Market Walk – local crafts and lifestyle",
        "Evening reflection session or group activity",
        "Overnight stay in Jaffna",
      ],
    },
    {
      day: "Day 3",
      title: "Eco-Activity | Return to India",
      activities: [
        "Early morning beach walk / clean-up drive",
        "Breakfast & quick local shopping",
        "Return transfer to Kankesanthurai Port",
        "Ferry back to Nagapattinam",
        "Tour ends with educational feedback session",
      ],
    },
  ];

  const learningOutcomes = [
    {
      subject: "History",
      topics: "Jaffna Kingdom, colonial heritage, Tamil culture",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      subject: "Culture",
      topics: "Temples, local cuisine, arts, language, traditions",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      subject: "Ecology",
      topics: "Coastal biodiversity, natural springs, conservation",
      icon: <Leaf className="w-6 h-6" />,
    },
  ];

  const inclusions = [
    "Ferry tickets",
    "2 Nights Hotel stay with Breakfast ",
    "Local Sightseeing Transportation.",
    "Tamil and English Speaking Guide",
  ];

  const showModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const toggleDay = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-1  lg:py-3">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div>
                <img
                  src={IMAGE_HELPER.SubhamLogo}
                  alt="logo"
                  className="w-[70px] md:w-[140px]"
                />
              </div>
            </div>
           
            <div className="flex gap-2  items-center justify-end lg:justify-center ">
              <div className="flex items-center lg:space-x-4 space-x-2 ">
              <a
                href="tel:+919087143535"
                className="bg-white text-[10px] lg:text-lg text-orange-600 focus:outline-none px-2 lg:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="lg:w-5 w-3 lg:h-5 h-3 mr-2" />
                +91 90871 43535
              </a>
            </div>
             <div className="flex lg:space-x-4 space-x-2">
                {socialIcons.map((Icon) => (
                  <Link
                    key={Icon.id}
                    to={Icon.path}
                    target="_blank"
                    className="text-gray-400 hover:text-white hover:bg-primary hover:border-primary rounded-full border p-1 text-sm"
                  >
                    <Icon.title className="p-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative lg:py-20 py-8  text-white bg-cover bg-center h-[90vh] lg:h-[80vh]">
        {/* Overlay */}
        <div className="absolute inset-0 z-0">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              // lowercase 'a' and object format
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]} // Add the Autoplay module
            className="w-full h-full"
          >
            {Slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img
                    src={slide.src}
                    alt={slide.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        <div className="relative lg:max-w-[80%] w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
          <div class=" flex items-center justify-center p-4">
            <div class="text-center max-w-4xl">
              {/* Main heading with animated gradient */}
              <h1 class="text-4xl md:text-7xl font-bold mb-4 md:mb-6 text-white bg-clip-text drop-shadow-[0_5px_5px_rgba(235,133,25,0.4)] text-pulse">
                Students Pack
              </h1>

              {/* Subheading with similar effect but smaller */}
              <h2
                class="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 
                animate-gradient text-transparent bg-clip-text drop-shadow-[0_3px_3px_rgba(235,133,25,0.4)]"
              >
                Explore Northern Lanka
              </h2>

              <p class="text-md md:text-2xl mb-6 font-medium text-gray-200 drop-shadow-lg">
                2 Nights / 3 Days Student Tour Package
              </p>

              {/* Tags with animated hover effects */}
              <div class="flex flex-wrap justify-center gap-4 mb-8 text-sm lg:text-lg font-semibold">
                <span
                  class="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full border border-amber-400/30 
                  hover:scale-105 transition-transform duration-300"
                >
                  Tamil Heritage
                </span>
                <span
                  class="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full border border-orange-500/30 
                  hover:scale-105 transition-transform duration-300"
                >
                  Culture
                </span>
                <span
                  class="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-4 py-2 rounded-full border border-amber-500/30 
                  hover:scale-105 transition-transform duration-300"
                >
                  Ecology
                </span>
              </div>

              {/* Info items with improved layout */}
              <div class="flex flex-wrap justify-center gap-6 text-md text-gray-200 font-medium max-w-lg mx-auto">
                <div class="flex items-center justify-center">
                  <span class="w-8 h-8 mr-3 text-amber-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </span>
                  <span>Ferry Travel</span>
                </div>
                <div class="flex items-center justify-center">
                  <span class="w-8 h-8 mr-3 text-amber-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <span>Age 12-25</span>
                </div>
                <div class="flex items-center justify-center">
                  <span class="w-8 h-8 mr-3 text-amber-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span>3 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Book-shaped Price Tag */}
        <div className="absolute lg:bottom-12 bottom-4 left-[20%] lg:left-12 animate-float">
          <div className="book">
            <div className="book-cover bg-gradient-to-br from-amber-100 to-amber-50 text-orange-900">
              <div className="ribbon bg-gradient-to-r from-orange-600 to-amber-600">
                STUDENT DEAL
              </div>
              <div className="text-center p-6">
                <h3 className="font-bold text-xl mb-1">Tour Package</h3>
                <div className="price-display">
                  <span className="original-price">₹15,000</span>
                  <span className="discounted-price">₹9,999</span>
                </div>
                <p className="text-xs mt-2 text-orange-700">
                  Minimum 25 students
                </p>
                <div className="book-spine bg-gradient-to-b from-amber-600 to-amber-700"></div>
              </div>
            </div>
            <div className="book-page bg-amber-50/90"></div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(-5deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
          transform-origin: bottom left;
        }

        .book {
          position: relative;
          width: 200px;
          height: 140px;
          perspective: 1000px;
          filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
        }

        .book-cover {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 2px 8px 8px 2px;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
          transform-style: preserve-3d;
          transform: rotateY(-10deg);
          transition: all 0.5s ease;
          z-index: 10;
          padding-right: 15px;
          border-right: 1px solid #d97706;
        }

        .book-spine {
          position: absolute;
          left: 0;
          top: 5%;
          height: 90%;
          width: 8px;
          border-radius: 2px 0 0 2px;
        }

        .book-page {
          position: absolute;
          width: 95%;
          height: 96%;
          border-radius: 2px 6px 6px 2px;
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
          top: 2%;
          left: 0;
        }

        .ribbon {
          position: absolute;
          top: 10px;
          right: -5px;
          color: white;
          padding: 3px 10px;
          font-size: 12px;
          font-weight: bold;
          transform: rotate(15deg);
          box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
          z-index: 20;
        }

        .price-display {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin: 10px 0;
        }

        .original-price {
          text-decoration: line-through;
          opacity: 0.7;
          font-size: 16px;
        }

        .discounted-price {
          font-size: 24px;
          font-weight: bold;
          color: #dc2626;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Image Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Explore the Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Big featured image (left) */}
            <div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-xl shadow-lg lg:h-[550px]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  waitForTransition: true, // Add this if using CSS transitions
                }}
                modules={[Autoplay]}
                className="unique-swiper-class w-full h-full"
                onInit={(swiper) => {
                  console.log("Swiper initialized", swiper.autoplay); // Debug check
                }}
              >
                {Slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img
                        src={slide.src}
                        alt={slide.caption}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                        <div>
                          <p className="text-white font-bold text-sm lg:text-xl">
                            {slide.caption}
                          </p>
                          <p className="text-gray-200 text-[12px] mt-1 flex items-center">
                            <FaMapMarkerAlt className="mr-1" />
                            Sri lankha
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Smaller images (right) */}
            {images.slice(1, 6).map((image, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-xl shadow-lg  ${
                  index % 2 === 0 ? "h-64" : "h-64"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-medium text-sm md:text-base">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - full width image */}
          {images.length > 6 && (
            <div className="mt-6 relative group overflow-hidden rounded-xl shadow-lg h-64 md:h-80">
              <img
                src={images[5]?.url}
                alt={images[5]?.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-md lg:text-xl">
                    {images[5]?.caption}
                  </p>
                  <p className="text-gray-200 text-sm mt-1 flex items-center">
                    <FaMapMarkerAlt className="mr-1" />{" "}
                    {images[5]?.location || "Featured Location"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Ferry Travel Details */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Ship className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ferry Travel Experience
            </h2>
            <p className="text-lg text-gray-600">
              Unique India-Sri Lanka ferry connection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                Journey Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                  <span>
                    <strong>Departure:</strong> Nagapattinam Port, Tamil Nadu
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <span>
                    <strong>Arrival:</strong> Kankesanthurai Port, Jaffna
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <span>
                    <strong>Duration:</strong> 3.5 to 4 hours
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-red-600">
                Important Requirements
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span>Passport mandatory (6 months validity)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span>Only 7 kg hand luggage allowed</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <span>Student ID + Passport required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Eligibility */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <GraduationCap className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Student Eligibility & Conditions
            </h2>
            <p className="text-lg text-gray-600">
              Designed specifically for educational groups
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Age Group</h3>
              <p className="text-gray-600 capitalize">12 to 25 years</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Group Size</h3>
              <p className="text-gray-600 capitalize">Minimum 25 Students</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Staff (or) Guardian</h3>
              <p className="text-gray-600 ">
                Staff or Guardian is mandatory for the group tour
              </p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700 text-justify">
                  <strong>Special Note:</strong> Uniform compulsory for students
                  up to 12th standard. Staff ID required for guardians. One
                  accompanying guardian/staff member is mandatory per group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
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
            {studentTour.days.map((day) => (
              <div
                key={day.day}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full p-4 flex justify-between items-center bg-primary text-white hover:from-primary-dark hover:to-primary transition-colors"
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
                                {item.Games ? (
                                  <>
                                    <FaMapMarkerAlt className="text-primary text-sm" />
                                    Activity:
                                  </>
                                ) : (
                                  <>
                                    <FaMapMarkerAlt className="text-primary text-sm" />
                                    Visiting:
                                  </>
                                )}
                              </p>
                              <ul className="space-y-1">
                                {item.attractions.map((attraction, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start text-sm"
                                  >
                                    <span className="text-primary mr-1">•</span>
                                    <span className="text-gray-700 text-justify">
                                      {attraction}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {item.note && (
                            <p className="bg-primary/10  p-2 lg:w-1/2 w-full text-justify mt-2 rounded-lg flex items-center gap-4">
                              <span>{getActivityIcon(item.noteIcon)}</span>
                              {item.note}
                            </p>
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

      {/* Learning Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Educational Learning Outcomes
            </h2>
            <p className="text-lg text-gray-600">
              What students will learn from this enriching experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    {outcome.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {outcome.subject}
                  </h3>
                </div>
                <p className="text-gray-600">{outcome.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Inclusions */}
      <section className="py-16 bg-green-50">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Package Inclusions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for a worry-free educational tour
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {inclusions.map((inclusion, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{inclusion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Educational Adventure?
          </h2>
          <p className="text-xl mb-8">
            Join us for an unforgettable journey to Jaffna that combines
            education, culture, and adventure
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+919087143535"
              className="bg-white text-orange-600 lg:px-8 px-4 focus:outline-none py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center  justify-center text-[12px] lg:text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91 90871 43535
            </a>
            <button
              onClick={() => {
                setSelectedPackage({
                  name: "Northern Sri Lanka Student Tour",
                  price: 9999,
                });
                setIsModalOpen(true);
              }}
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Quote
            </button>
            
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
                  <h3 className="text-lg font-semibold text-black">
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
                    <Stumail />
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Student;
