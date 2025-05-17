import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <div className="bg-white shadow p-6 rounded-md">
        <h2 className="text-xl font-bold mb-2">LEAVE US A MESSAGE</h2>
        <p className="text-sm text-gray-600 mb-6">
          Use the form below to get in touch with the sales team.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Your message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-pink-600 text-white px-5 py-2 rounded hover:bg-pink-700"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Store Info */}
      <div className="bg-white shadow p-6 rounded-md text-sm text-gray-700">
        <h3 className="font-semibold mb-3">OUR STORE</h3>
        <ul className="mb-6 space-y-2">
          <li>📍 1962 St Noe Ave, NY 10003, United States of America</li>
          <li>📞 +965-277-256, +965-234-579</li>
          <li>📧 info@example.com</li>
        </ul>

        <h3 className="font-semibold mb-3">HOURS OF OPERATION</h3>
        <ul className="mb-6">
          {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
            (day) => (
              <li key={day} className="flex justify-between">
                <span>{day}</span>
                <span>12:01 PM</span>
              </li>
            )
          )}
        </ul>

        <h3 className="font-semibold mb-2">CAREERS</h3>
        <p>
          If you are interested in employment opportunities at RAFCART, please email us:
          <br />
          <a
            href="mailto:careers@example.com"
            className="text-red-500 underline"
          >
            careers@example.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
