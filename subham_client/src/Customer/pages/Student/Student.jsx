import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IMAGE_HELPER } from "../../../helper/Imagehelper";
import "./s.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import activity from "../../../assets/student/activity.png";

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

const Student = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      url: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg",
      caption: "Ferry Journey Experience",
    },
    {
      url: "https://images.pexels.com/photos/8926541/pexels-photo-8926541.jpeg",
      caption: "Students Learning Together",
    },
    {
      url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      caption: "Cultural Heritage Sites",
    },
    {
      url: "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg",
      caption: "Beautiful Coastal Views",
    },
    {
      url: activity,
      caption: "Educational Activities",
    },
  ];

  const itinerary = [
    {
      day: "Day 1",
      title: "Ferry Travel | Arrival in Jaffna | Cultural Sites",
      activities: [
        "Morning departure from Nagapattinam Ferry Terminal",
        "Arrive at Kankesanthurai (Jaffna)",
        "Check-in at hotel & freshen up",
        "Visit Nallur Kandaswamy Temple – iconic Dravidian-style temple",
        "Explore Jaffna Fort – Portuguese-Dutch colonial history",
        "Tour Jaffna Library – symbol of Tamil culture and resilience",
        "Evening group dinner + cultural discussion",
        "Overnight stay in Jaffna",
      ],
    },
    {
      day: "Day 2",
      title: "Nature & Heritage Exploration",
      activities: [
        "Breakfast at hotel",
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
    "ferry tickets",
    "2 nights hotel stay with breakfast ",
    "Local Sightseeing Transportation.",
    "1 Staff (or) Guardian Free per group",
  ];

  const showModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div>
                <img
                  src={IMAGE_HELPER.SubhamLogo}
                  alt="logo"
                  className="w-[100px] md:w-[140px]"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="tel:+919087143535"
                className="bg-white text-orange-600 focus:outline-none px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +919087143535
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative lg:py-20 py-8 price_section text-white bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50"></div>

        <div className="relative lg:max-w-[80%] w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Gradient heading with better contrast */}
            <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-[#fca74d] text-transparent bg-clip-text drop-shadow-lg">
              Explore Northern Sri Lanka
            </h1>

            <p className="text-lg md:text-2xl mb-4 font-medium text-[#f5f5f5] drop-shadow-lg">
              2 Nights / 3 Days Student Tour Package
            </p>

            {/* Tags with orange variants */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-md lg:text-lg font-semibold">
              <span className="bg-amber-500 text-[#f5f5f5] px-4 py-2 rounded-full border border-amber-400/30">
                Tamil Heritage
              </span>
              <span className="bg-orange-600 text-[#f5f5f5] px-4 py-2 rounded-full border border-orange-500/30">
                Culture
              </span>
              <span className="bg-amber-600 text-[#f5f5f5] px-4 py-2 rounded-full border border-amber-500/30">
                Ecology
              </span>
            </div>

            {/* Info items with icon colors adjusted */}
            <div className="flex items-center justify-center space-x-6 text-md lg:text-lg text-[#f5f5f5] font-bold w-full ">
              <div className="flex items-center">
                <Anchor className="w-6 h-6 mr-2 text-amber-300" />
                <span>Ferry Travel</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-amber-300" />
                <span>Age 12-25</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-amber-300" />
                <span>3 Days</span>
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
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Experience the Journey
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
              <p className="text-gray-600">12 to 25 years</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Group Size</h3>
              <p className="text-gray-600">Minimum 25 students</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Free Guardian</h3>
              <p className="text-gray-600">1 Free ticket for staff/guardian</p>
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
      <section className="py-16 bg-white">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Detailed Itinerary
            </h2>
            <p className="text-lg text-gray-600">
              Jaffna-focused cultural and educational experience
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {itinerary.map((day, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg shadow-lg p-4 md:p-6 w-full"
              >
                {/* Day Header - Responsive Flex */}
                <div className="flex flex-col  gap-4 md:gap-6 w-full">
                  {/* Day Number + Title - Centered on mobile, left-aligned on desktop */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 md:items-start md:min-w-[200px]">
                    <div className="bg-orange-600 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {day.day}
                      </h3>
                      <h4 className="text-md md:text-lg font-semibold text-orange-600">
                        {day.title}
                      </h4>
                    </div>
                  </div>

                  {/* Activities List - Full width */}
                  <div className="flex-1 mt-2 md:mt-0 lg:ml-16 ml-0">
                    <ul className="space-y-2 md:space-y-3">
                      {day.activities.map((activity, actIndex) => (
                        <li
                          key={actIndex}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <ArrowRight className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm md:text-base">
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              className="bg-white text-orange-600 px-8 focus:outline-none py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-9087143535
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
