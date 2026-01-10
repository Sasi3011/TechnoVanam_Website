import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { useLocation } from "react-router-dom";



const servicesList = [
  { name: "Web Design", color: "border-red-500", image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825592/Web_Design_Service_Contact_lbyojo.png" },
  { name: "UI/UX Design", color: "border-green-500", image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825592/UX_Design_Service_Contact_pxltn3.png" },
  { name: "Development", color: "border-brand-500", image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825593/Development_Service_Contact_f3lrum.png" },
  { name: "Branding", color: "border-yellow-400", image: "https://res.cloudinary.com/dnmvriw3e/image/upload/v1757825592/Branding_Service_Contact_y7thya.png" },
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [projectType, setProjectType] = useState("");
  const [deadline, setDeadline] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const location = useLocation();
  const scrollContainer = document.querySelector(".custom-scrollbar");
  const turnstileRef = React.useRef(null);

  useEffect(() => {
    // Initialize Turnstile
    const renderTurnstile = () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY, // Cloudflare Turnstile Site Key
          callback: (token) => {
            setTurnstileToken(token);
          },
        });
      } else {
        setTimeout(renderTurnstile, 100);
      }
    };
    renderTurnstile();
  }, []);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailFromURL = params.get("email");
    if (emailFromURL) {
      setEmail(emailFromURL);
    }
  }, [location]);

  const countWords = (text) =>
    text.trim().split(/\s+/).filter(Boolean).length;

  const handleTextareaChange = (e) => {
    const text = e.target.value;
    if (countWords(text) <= 1000) {
      setMessage(text);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (
      !name.trim() ||
      !email.trim() ||
      selectedServices.length === 0 ||
      message.trim() === "" ||
      !turnstileToken
    ) {
      setSubmissionStatus("error");
      return;
    }

    const formData = {
      name,
      email,
      company,
      website,
      services: selectedServices.join(", "),
      projectType,
      deadline,
      message,
      "cf-turnstile-response": turnstileToken
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/official@technovanam.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success === "true" || response.ok) {
        setSubmissionStatus("success");
        setName("");
        setEmail("");
        setCompany("");
        setWebsite("");
        setSelectedServices([]);
        setProjectType("");
        setDeadline("");
        setMessage("");
        setTurnstileToken(null);
        setFormSubmitted(false);

        // Reset Turnstile widget
        if (window.turnstile) window.turnstile.reset();

        setTimeout(() => setSubmissionStatus(null), 3000);
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <section className="min-h-[calc(100vh-3rem)] flex flex-col pt-6 sm:pt-12 md:pt-16 lg:pt-20 pb-20">
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8">
        {/* Contact label */}
        <p className="text-sm sm:text-base md:text-lg text-brand-500 font-semibold uppercase">
          Contact us
        </p>

        {/* Main heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 sm:mt-3">
          Connect With Us <span className="inline-block">👋</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2 sm:mt-3">
          Fill the form below and one of our team members will get back to you
          within 24 business hours <br className="hidden sm:block" />
          to schedule a project discovery call.
        </p>

        {/* Submission status messages */}
        {submissionStatus === "success" && (
          <p className="text-green-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
            Message sent successfully!
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="text-red-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
            Please fill out all required fields or try again later.
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-3 sm:mt-6 md:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2"
              >
                What's your name?<span className="text-red-500"> *</span>
              </label>
              {formSubmitted && !name.trim() && (
                <p className="text-red-500 text-xs sm:text-sm md:text-base mb-2">
                  Name is required.
                </p>
              )}
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-2 sm:px-4 py-1.5 sm:py-2 md:py-3 rounded-md border-2 transition-all outline-none placeholder:text-xs sm:placeholder:text-base md:placeholder:text-lg placeholder-gray-400 ${formSubmitted && !name.trim()
                  ? "border-red-500"
                  : "border-gray-200 hover:border-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  }`}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2"
              >
                What's your email?<span className="text-red-500"> *</span>
              </label>
              {formSubmitted && !email.trim() && (
                <p className="text-red-500 text-xs sm:text-sm md:text-base mb-2">
                  Email is required.
                </p>
              )}
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-2 sm:px-4 py-1.5 sm:py-2 md:py-3 rounded-md border-2 transition-all outline-none placeholder:text-xs sm:placeholder:text-base md:placeholder:text-lg placeholder-gray-400 ${formSubmitted && !email.trim()
                  ? "border-red-500"
                  : "border-gray-200 hover:border-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                  }`}
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2"
              >
                What's your company?
              </label>
              <input
                id="company"
                type="text"
                name="company"
                placeholder="Enter your company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-2 sm:px-4 py-1.5 sm:py-2 md:py-3 rounded-md border-2 border-gray-200 hover:border-gray-400 transition-all outline-none placeholder:text-xs sm:placeholder:text-base md:placeholder:text-lg placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>

            {/* Website */}
            <div>
              <label
                htmlFor="website"
                className="block text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2"
              >
                What's your current website?
              </label>
              <input
                id="website"
                type="text"
                name="website"
                placeholder="Enter your website URL"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full px-2 sm:px-4 py-1.5 sm:py-2 md:py-3 rounded-md border-2 border-gray-200 hover:border-gray-400 transition-all outline-none placeholder:text-xs sm:placeholder:text-base md:placeholder:text-lg placeholder-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mt-6">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
              What services are you looking for?<span className="text-red-500"> *</span>
            </p>
            {formSubmitted && selectedServices.length === 0 && (
              <p className="text-red-500 text-xs sm:text-sm md:text-base mb-2">
                Please select at least one service.
              </p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
              {servicesList.map((service, index) => {
                const isSelected = selectedServices.includes(service.name);
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => toggleService(service.name)}
                    className={`flex flex-col items-center justify-between p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-3xl bg-white shadow cursor-pointer border-2 sm:border-4 transition-all duration-300 ease-in-out min-h-[120px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[200px] ${isSelected ? service.color : "border-gray-200 hover:border-gray-400"
                      }`}
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      className="mb-3 sm:mb-4 md:mb-6 w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 object-cover rounded-lg shadow-sm"
                    />
                    <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 text-center">
                      {service.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Type */}
          <div className="mt-6">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
              What kind of project are you looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
              {["One-time project", "Ongoing maintenance", "Both"].map(
                (type, index) => (
                  <label
                    key={index}
                    className="flex-1 min-w-[100px] sm:min-w-[120px] flex items-center gap-3 px-3 sm:px-6 py-2 rounded-3xl border-2 border-gray-300 hover:border-brand-500 cursor-pointer transition-all"
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value={type}
                      checked={projectType === type}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="form-radio text-brand-500 w-4 sm:w-5 h-4 sm:h-5 border-gray-300 checked:border-brand-500 hover:border-brand-500"
                    />
                    <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">
                      {type}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Deadline */}
          <div className="mt-6">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
              When is the project deadline?
            </p>
            <div className="flex flex-wrap gap-3 md:gap-5">
              {["ASAP", "1 month", "2 – 3 months", "3+ months"].map(
                (deadlineOption, index) => (
                  <label
                    key={index}
                    className="flex-1 min-w-[100px] sm:min-w-[120px] flex items-center gap-3 px-3 sm:px-6 py-2 rounded-3xl border-2 border-gray-300 hover:border-brand-500 cursor-pointer transition-all text-xs sm:text-sm md:text-base font-semibold text-gray-700"
                  >
                    <input
                      type="radio"
                      name="deadline"
                      value={deadlineOption}
                      checked={deadline === deadlineOption}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="form-radio text-brand-500 w-4 sm:w-5 h-4 sm:h-5 border-gray-300 checked:border-brand-500 hover:border-brand-500"
                    />
                    {deadlineOption}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2"
            >
              Tell us a little more about your project
              <span className="text-red-500"> *</span>
            </label>
            {formSubmitted && message.trim() === "" && (
              <p className="text-red-500 text-xs sm:text-sm md:text-base mb-2">
                This field is required.
              </p>
            )}
            <textarea
              id="message"
              rows="4"
              name="message"
              value={message}
              onChange={handleTextareaChange}
              placeholder="Write here..."
              className={`w-full resize-none px-3 sm:px-4 py-2 sm:py-3 md:py-4 rounded-md border-2 transition-all outline-none placeholder:text-xs sm:placeholder:text-base md:placeholder:text-lg placeholder-gray-400 ${formSubmitted && message.trim() === ""
                ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                : "border-gray-200 hover:border-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                }`}
            />
            <div className="text-xs sm:text-sm md:text-base mt-2 text-gray-500">
              {countWords(message)} / 1000 words
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6 flex justify-center sm:justify-start">
            <button
              type="submit"
              className="relative group overflow-hidden bg-brand-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-full shadow hover:bg-brand-600 active:scale-95 transition-all flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Send message <Send className="w-4 sm:w-5 h-4 sm:h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            </button>
          </div>

          <div className="mt-4">
            <div ref={turnstileRef}></div>
            {formSubmitted && !turnstileToken && (
              <p className="text-red-500 text-xs sm:text-sm md:text-base mt-2">
                Please complete the security check.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
