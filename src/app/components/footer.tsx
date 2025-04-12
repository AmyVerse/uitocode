export default function Footer() {
  return (
    <div className="bg-gradient-to-b py-6 font-inter from-[#00275D] via-[#2f3d90] to-[#5757d3] text-white">
      <div className="relative px-6 md:px-24">
        {/* Header */}
        <div className="text-center md:text-left">
          <div className="font-inter text-[2rem] md:text-[3.5rem] font-[700] text-white">
            Hot Wheels
          </div>
          <div className="font-inter text-[1rem] md:text-[1.5rem] font-[400]">
            Visit Help
            <br />
            Center
          </div>
        </div>
        <hr className="my-4 rounded-lg border-[1.5px]" />

        {/* Footer Sections */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Section */}
          <div>
            <div className="font-inter mb-6 md:mb-10 text-[1.5rem] md:text-[1.8rem] font-[400]">
              Company
            </div>
            <ul className="style-none">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Offerings
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Newsroom
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Investors
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  AI
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <div className="font-inter mb-6 md:mb-10 text-[1.5rem] md:text-[1.8rem] font-[400]">
              Products
            </div>
            <ul className="style-none">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Cars
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Trucks
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Bikes
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Barbie
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Tracks
                </a>
              </li>
            </ul>
          </div>

          {/* Global Citizenship Section */}
          <div>
            <div className="font-inter mb-6 md:mb-10 text-[1.5rem] md:text-[1.8rem] font-[400]">
              Global Citizenship
            </div>
            <ul className="style-none">
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Safety
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Diversity and Inclusion
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* App Store Links */}
        <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-[42px] w-auto object-contain"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-[48px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/fb.svg"
                alt="Facebook"
                className="h-8 w-8 transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/ig.svg"
                alt="Instagram"
                className="h-8 w-8 transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/li.svg"
                alt="LinkedIn"
                className="h-8 w-8 transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/twitter.svg"
                alt="Twitter"
                className="h-8 w-8 transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="white"
                viewBox="0 0 576 512"
                className="h-8 w-8 transition-transform duration-200 hover:scale-110"
              >
                <path d="M549.7 124.1c-6.3-23.8-24.9-42.5-48.6-48.8C456.5 64 288 64 288 64s-168.5 0-213.1 11.3c-23.7 6.3-42.3 25-48.6 48.8C16 168.6 16 256 16 256s0 87.4 10.3 131.9c6.3 23.8 24.9 42.5 48.6 48.8C119.5 448 288 448 288 448s168.5 0 213.1-11.3c23.7-6.3 42.3-25 48.6-48.8C560 343.4 560 256 560 256s0-87.4-10.3-131.9zM232 336V176l142 80-142 80z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-8 w-full border-[1.5px]" />
      <p className="flex font-inter items-center font-[prompt] justify-center gap-2 p-8 text-[1rem] md:text-[1.3rem] text-sm text-white">
        Developed by aOS | Designed by Bindaas Bhide
      </p>
    </div>
  );
}
