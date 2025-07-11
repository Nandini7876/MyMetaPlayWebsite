import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import axios from "axios";

const ContactFormPage = () => {
  const formRef = useRef(null);
  const messageRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    gsap.from(formRef.current, {
      duration: 0.8,
      y: 60,
      ease: "power2.out",
    });
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setFormSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });

      gsap.fromTo(
        messageRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center px-4 py-16">
      {!formSubmitted ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-[#1f1f1f] p-10 rounded-2xl shadow-2xl border border-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-400 tracking-wide uppercase">
            Contact Us
          </h2>
          <p className="text-center text-sm text-gray-400 mb-8 max-w-md mx-auto">
            We'd love to hear from you. Fill out the form and we’ll get back to you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Nandini"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Raj"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <div className="text-center mt-10">
            <button
              type="submit"
              className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300 shadow-lg uppercase tracking-wide"
            >
              Send Message
            </button>
          </div>
        </form>
      ) : (
        <div
          ref={messageRef}
          className="bg-[#1f1f1f] p-10 rounded-2xl shadow-2xl text-center border border-gray-700 w-full max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
            Form is submitted successfully.
          </h2>
          <p className="text-gray-300 text-lg">Thank you!</p>
        </div>
      )}
    </div>
  );
};

export default ContactFormPage;
