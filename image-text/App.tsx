import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to a server
    setShowSuccessModal(true); // Show the custom success modal
    setFormData({ // Clear the form
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl w-full flex flex-col lg:flex-row">
        {/* Left Section: Leave Us A Message Form */}
        <div className="lg:w-1/2 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">LEAVE US A MESSAGE</h2>
          <p className="text-gray-600 mb-8 text-center lg:text-left">
            Use the form below to get in touch with the sales team.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors duration-200 shadow-md"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right Section: Our Store Information */}
        <div className="lg:w-1/2 bg-gray-50 p-8 sm:p-10 rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">OUR STORE</h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start">
              <span className="font-semibold mr-2">📍</span>
              <span>3055 Old Georgetown Rd, NW, Washington, DC 20007, United States Of America</span>
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">📞</span>
              <span>+880-277-286, +880-284-579</span>
            </p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">📧</span>
              <span>info@domain.com</span>
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 text-center lg:text-left">HOURS OF OPERATION</h3>
          <div className="space-y-2 text-gray-700">
            <p className="flex justify-between">
              <span>Saturday</span>
              <span>12:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Sunday</span>
              <span>12:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Monday</span>
              <span>12:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Tuesday</span>
              <span>12:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Wednesday</span>
              <span>12:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Thursday</span>
              <span>12:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Friday</span>
              <span>12:00 PM</span>
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 text-center lg:text-left">CAREERS</h3>
          <p className="text-gray-700 leading-relaxed">
            If you are interested in employment opportunities at RAFCart, please email us:{" "}
            <a href="mailto:careers@rafcart.com" className="text-blue-600 hover:underline">
              careers@rafcart.com
            </a>
            .
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full relative text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
            <p className="text-gray-700 mb-6">Your message has been sent successfully.</p>
            <button
              onClick={closeSuccessModal}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
