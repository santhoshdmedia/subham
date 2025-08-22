// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { ICON_HELPER } from "../../../helper/IconHelper";
import { Link, useNavigate } from "react-router-dom";
import { IMAGE_HELPER } from "../../../helper/Imagehelper";
import { get_srilanka_packages } from "../../../api";
import _ from "lodash";
import { Clock, Eye } from "lucide-react";
import { GiPriceTag } from "react-icons/gi";
import { MdMessage } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import "./destination.css";
import Stu from "../../../assets/image/students.webp";

const Destination_india = () => {
  const [travelPackages, setTravelPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const result = await get_srilanka_packages();
        const fetchedPackages = _.get(result, "data.data", []);
        setTravelPackages(fetchedPackages);
      } catch (err) {
        console.error("Error fetching packages:", err);
        setTravelPackages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (id) => {
    navigation(`/destination-explore/${id}`);
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="">
      <Helmet>
        <title>
          Book India–Sri Lanka Ferry | Budget Sri Lanka Tour Package
        </title>
        <meta
          name="description"
          content="Book your India to Sri Lanka ferry service online. Explore our budget-friendly Sri Lanka tour packages with ferry tickets, hotel stay, and sightseeing included."
        />
        <meta
          name="keywords"
          content="India to Sri Lanka ferry booking, Sri Lanka budget tour package, Online ferry booking to Sri Lanka, Sri Lanka tour from Tamil Nadu, India Sri Lanka travel by sea"
        />
      </Helmet>
      <div className="bg-gray-50">
        {/* Banner */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
          <img
            src={IMAGE_HELPER.srilanka}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center px-6 sm:px-12 lg:px-24">
            <div className="text-white space-y-2">
              <p className="flex items-center gap-2 text-sm sm:text-base">
                <Link to="/" className="hover:text-primary ">
                  Home
                </Link>
                <ICON_HELPER.RIGHT_ARROW />
                <span className="text-sky-400 font-semibold">
                  Sri Lanka Packages
                </span>
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-pri_head">
                Sri Lanka Packages
              </h1>
              <p className="text-sm sm:text-base text-primary font-pri_para">
                Choose Your Travel Packages!
              </p>
            </div>
          </div>
        </div>

        <section className="w-50%  px-4 py-8 sm:px-[6vw] lg:py-14 ">
          <div className="student_section relative rounded-lg overflow-hidden p-10">
            <div className="absolute w-full h-full bg-[#00000091] top-0 left-0"></div>
            <div className=" package-custom relative z-10">
              <div className="custom-pack">
                <a href="https://sailsubham.com/students-tour-package">
                  <div className="relative cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={Stu}
                        alt="MISTIK NORTHERN LANKA"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 right-2 flex items-center bg-white py-1 px-2 rounded font-semibold text-gray-500 text-sm gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clock"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>2 Nights / 3 Days</span>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                          SPECIAL STUDENT'S PACKAGE{" "}
                        </h2>
                      </div>

                      <div className="flex items-start text-gray-600 text-sm font-medium gap-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="14"
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                        </svg>
                        <span>On Every Tuesday & Saturday not Available</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary"
                        >
                          <path d="M303.297 42.269c-1.54.025-3.033.077-4.476.158-11.55.649-19.422 3.475-22.47 6.438L18.923 299.087 184.807 469.75l257.43-250.222c3.047-2.963 6.096-10.75 7.072-22.278.976-11.527.207-26.288-1.645-42.248-1.605-13.84-3.991-28.476-6.597-42.96-12.99 9.51-28.1 16.583-48.25 20.222a40 40 0 0 1-11.38 36.191 40 40 0 0 1-56.562-.802 40 40 0 0 1 .803-56.563 40 40 0 0 1 29.031-11.3 40 40 0 0 1 27.532 12.103 40 40 0 0 1 2.998 3.5c24.115-3.229 38.245-11.132 52.109-23.326-1.891-9.87-3.776-19.475-5.47-28.424-27.556-6.032-61.042-14.049-90.872-18.371-11.925-1.728-23.195-2.83-32.957-2.998-1.627-.028-3.212-.03-4.752-.004zm159.469 34.836c-3.39.175-6.773 1.444-9.342 3.283a2734.251 2734.251 0 0 1 3.7 19.365l5.326-3.707c.268.372.45.517.765 1.106 2.648 4.937 5.797 16.02 7.912 30.437 4.231 28.833 5.344 71.6 1.848 116.16-3.496 44.56-11.623 91.069-25.262 127.625-13.639 36.557-32.614 61.986-55.453 68.49-8.264 2.354-12.21.983-16.803-3.57-4.593-4.552-9.035-13.679-12.054-26.199-5.115-21.207-6.457-51.417-5.526-83.469l-18.336 17.824c-.067 25.974 1.633 50.248 6.364 69.864 3.443 14.277 8.383 26.341 16.882 34.765 8.5 8.424 21.359 11.814 34.405 8.098 31.734-9.038 52.827-40.494 67.384-79.512 14.558-39.017 22.756-86.771 26.344-132.508 3.589-45.736 2.547-89.302-1.984-120.181-2.266-15.44-5.15-27.556-9.858-36.332-2.353-4.388-5.217-8.459-10.513-10.627-1.324-.542-2.736-.832-4.174-.91-.54-.03-1.082-.03-1.625-.002zM293.1 187.796l12.549 12.906-29.38 28.563c6.195 6.952 11.437 14.253 15.71 21.908 5.1 9.1 8.755 18.47 10.96 28.12l-16.91 16.212c-.948-10.96-3.498-21.125-7.652-30.496-4.154-9.37-9.91-17.894-17.27-25.57-14.505-15.131-29.423-22.66-44.751-22.59-15.276.126-30.857 7.804-46.744 23.035-15.835 15.181-24.137 30.4-24.907 45.656-.716 15.312 6.178 30.534 20.684 45.664 5.665 5.91 11.193 10.73 16.584 14.463 5.443 3.684 10.96 6.396 16.553 8.135l31.539-30.236-26.205-27.336 13.054-12.516 42.09 43.9-50.416 48.335c-10.546-2.29-20.679-6.247-30.398-11.872-8.672-5.09-16.86-11.463-24.569-19.097l-25.826 24.635-12.424-13.026 26.303-25.088c-12.28-16.036-18.338-32.69-18.164-49.963.32-21.183 10.05-40.95 29.188-59.298 18.59-17.824 38.09-26.72 58.498-26.692.658.001 1.316.012 1.976.031 17.69.524 34.44 7.564 50.254 21.069z"></path>
                        </svg>
                        <div className="flex items-center gap-1 text-primary text-lg font-bold">
                          <div className="h-4 w-auto overflow-hidden shadow-sm">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/330px-Flag_of_India.svg.png"
                              alt="country-flag"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>INR 9999</span>
                        </div>
                        <div className="text-xs line-through text-gray-400 font-medium">
                          INR 15000
                        </div>
                      </div>

                      <button className="w-full mt-3 py-2 text-sm font-semibold bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-eye"
                          aria-hidden="true"
                        >
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        View Details
                      </button>
                    </div>

                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 round font-semibold shadow">
                      33% OFF
                    </div>
                  </div>
                </a>
              </div>

              <div className="custom-details">
                <div className="content">
                  <h3 class="text-2xl bg-gradient-to-r from-orange-500 to-orange-100  bg-clip-text sm:text-3xl lg:text-4xl font-bold font-pri_head mb-6 text-transparent drop-shadow-md">
                    SPECIAL STUDENT'S PACKAGE
                  </h3>
                </div>

                <p className="text:xl pack-description w-70 text-white">
                  Limited Time Offer! Student Tours for the Next{" "}
                  <b>6 Months –  Just ₹9,999</b>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Package Section */}
        <section className="w-full px-4 py-8 sm:px-[6vw] lg:py-14">
          {travelPackages.length === 0 ? (
            <div className="w-full h-[400px] flex flex-col justify-center items-center text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-pri_head mb-6">
                COMING S<span className="text-primary">OO</span>N
              </h1>
              <Link
                to="/"
                className="bg-primary hover:bg-primary/90 transition text-white text-base sm:text-xl px-6 py-3 rounded-lg shadow-md"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {travelPackages.map((item) => (
                <div
                  key={item._id}
                  onClick={() => handleClick(item._id)}
                  className="relative cursor-pointer bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col justify-between"
                >
                  <div className="">
                    {/* Image */}
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {item.duration && (
                        <div className="absolute bottom-2 right-2 flex items-center bg-white py-1 px-2 rounded font-semibold text-gray-500 text-sm gap-1">
                          <Clock size={14} />
                          <span>{item.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 pb-0 space-y-2 flex flex-col justify-between">
                      <div className="">
                        <div className="">
                          <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                            {item.name}
                          </h2>
                        </div>

                        {item.message_description && (
                          <div
                            className="flex flex-row items-start
                              text-gray-600 text-sm font-semibold gap-1"
                          >
                            <div className="mt-1">
                              <MdMessage size={14} className="mt-0.5" />
                            </div>
                            <span>{item.message_description}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <GiPriceTag size={16} className="text-primary" />
                        <div className="flex items-center gap-1 text-primary text-lg font-bold">
                          <div className="h-4 w-auto overflow-hidden shadow-sm">
                            <img
                              src={
                                item.country === "india"
                                  ? "https://cdn.britannica.com/13/4413-050-98188B5C/Flag-Sri-Lanka.jpg"
                                  : "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/330px-Flag_of_India.svg.png"
                              }
                              alt="country-flag"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>
                            {item.country === "india" ? "LKR" : "INR"}{" "}
                            {item.discount_price}
                          </span>
                        </div>
                        <div className="text-xs line-through text-gray-400 font-medium">
                          {item.country === "india" ? "LKR" : "INR"}{" "}
                          {item.original_price}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    {/* View Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(item._id);
                      }}
                      className="w-full mt-2 py-2 text-sm font-semibold bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition flex items-center justify-center gap-2"
                    >
                      <Eye size={16} /> View Details
                    </button>
                  </div>

                  {/* Discount Badge */}
                  {item.original_price > item.discount_price && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg font-semibold shadow">
                      {Math.round(
                        ((item.original_price - item.discount_price) /
                          item.original_price) *
                          100
                      )}
                      % OFF
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Destination_india;
