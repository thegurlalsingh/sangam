import React from 'react';

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white pt-32 md:pt-40 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Heading */}
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Contact <span className="text-green-400">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us!
          </p>
        </div>

        {/* Contact Info (optional – customize as needed) */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-3">Email</h3>
            <p className="text-gray-300">nss@bennett.edu.in</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-3">Phone</h3>
            <p className="text-gray-300">+91 99999 99999</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-3">Location</h3>
            <p className="text-gray-300">Bennett University, Greater Noida</p>
          </div>
        </div>

        {/* Google Map – responsive iframe */}
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-green-900/30 border border-green-900/20 mt-12">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9591649080207!2d77.5820079445839!3d28.450647334492754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University!5e0!3m2!1sen!2sin!4v1771545120303!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bennett University Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;