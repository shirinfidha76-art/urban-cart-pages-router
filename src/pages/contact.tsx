
export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] py-16 px-4">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[4px] text-[#A67C3D] font-semibold mb-3">
            WE ARE HERE TO HELP
          </p>

          

          <p className="mt-4 text-gray-600">
            Have any questions? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[#183C32] mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-[#D8C9B2] rounded-xl px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-[#A67C3D] focus:border-[#A67C3D] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#183C32] mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-[#D8C9B2] rounded-xl px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-[#A67C3D] focus:border-[#A67C3D] transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-[#183C32] mb-2">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-[#D8C9B2] rounded-xl px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-[#A67C3D] focus:border-[#A67C3D] transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-[#183C32] mb-2">
                Your Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full border border-[#D8C9B2] rounded-xl px-4 py-3 text-gray-700 outline-none resize-none focus:ring-2 focus:ring-[#A67C3D] focus:border-[#A67C3D] transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full !bg-[#183C32] !text-white py-3 !rounded-xl font-semibold hover:!bg-[#A67C3D] transition-all duration-300 border-0"
            >
              Send Message
            </button>

          </form>

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Thank you for choosing{" "}
            <span className="font-semibold text-[#183C32]">
              URBAN CART
            </span>
            . We look forward to hearing from you!
          </p>
        </div>

      </div>

    </div>
  );
}
