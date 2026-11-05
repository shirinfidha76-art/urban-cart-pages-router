
export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] py-16 px-4">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[4px] text-[#A67C3D] font-semibold mb-3">
            GET TO KNOW US
          </p>

        </div>

        {/* About Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">

          <h2 className="text-2xl font-semibold text-[#183C32] mb-5">
            Welcome to URBAN CART
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            URBAN CART is your convenient online shopping destination,
            designed to make everyday shopping simple and enjoyable.
            Explore a wide range of products and discover items that
            suit your lifestyle and needs.
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            We believe shopping should be easy, accessible and enjoyable.
            Our goal is to provide a smooth browsing experience,
            organized product collections and a user-friendly platform
            where you can shop with confidence.
          </p>

          {/* Our Mission */}
          <div className="border-l-4 border-[#A67C3D] pl-5 mb-8">
            <h3 className="text-xl font-semibold text-[#183C32] mb-3">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-7">
              To make online shopping simple, convenient and enjoyable
              by bringing quality products and a seamless shopping
              experience together.
            </p>
          </div>

          {/* Brand Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="bg-[#F8F5EF] rounded-xl p-5 text-center">
              <h3 className="text-lg font-semibold text-[#183C32] mb-2">
                Quality
              </h3>
              <p className="text-gray-600 text-sm">
                Discover products selected for your everyday needs.
              </p>
            </div>

            <div className="bg-[#F8F5EF] rounded-xl p-5 text-center">
              <h3 className="text-lg font-semibold text-[#183C32] mb-2">
                Convenience
              </h3>
              <p className="text-gray-600 text-sm">
                Enjoy a simple and easy online shopping experience.
              </p>
            </div>

            <div className="bg-[#F8F5EF] rounded-xl p-5 text-center">
              <h3 className="text-lg font-semibold text-[#183C32] mb-2">
                Trust
              </h3>
              <p className="text-gray-600 text-sm">
                We aim to make every shopping experience comfortable.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
