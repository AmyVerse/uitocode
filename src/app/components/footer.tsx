const Footer = () => {
  return (
    <div className="bg-gradient-to-b font-inter from-[#00275D] via-[#2f3d90] to-[#5757d3] text-white">
      <div className="relative px-24">
        <div className="font-inter text-[3.5rem] font-[700] text-white">
          Hot wheels
        </div>
        <div className="font-inter text-[1.5rem] font-[400]">
          Visit Help
          <br />
          Center
        </div>
        <hr className="-mx-3 my-4 rounded-lg border-[1.5px]" />
        <div className="my-8 grid grid-cols-3">
          <div>
            <div className="font-inter mb-10 text-[1.8rem] font-[400]">
              Company
            </div>
            <ul className="style-none">
              <li className="mb-1">
                <a href="#">About Us</a>
              </li>
              <li className="mb-1">
                <a href="#">Our offerings</a>
              </li>
              <li className="mb-1">
                <a href="#">Newsroom</a>
              </li>
              <li className="mb-1">
                <a href="#">Investors</a>
              </li>
              <li className="mb-1">
                <a href="#">Blog</a>
              </li>
              <li className="mb-1">
                <a href="#">Careers</a>
              </li>
              <li className="mb-1">
                <a href="#">AI</a>
              </li>
              <li className="mb-1">
                <a href="#">Gift cards</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-inter mb-10 text-[1.8rem] font-[400]">
              Products
            </div>
            <ul className="style-none">
              <li className="mb-1">
                <a href="#">Cars</a>
              </li>
              <li className="mb-1">
                <a href="#">Trucks</a>
              </li>
              <li className="mb-1">
                <a href="#">Bikes</a>
              </li>
              <li className="mb-1">
                <a href="#">Barbie</a>
              </li>
              <li className="mb-1">
                <a href="#">Tracks</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-inter mb-10 text-[1.8rem] font-[400]">
              Global citizenship
            </div>
            <ul className="style-none">
              <li className="mb-1">
                <a href="#">Safety</a>
              </li>
              <li className="mb-20">
                <a href="#">Diversity and inclusion</a>
              </li>
            </ul>
          </div>
          <div className="absolute right-60 bottom-2 mt-8 flex flex-col gap-4">
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
                className="h-[42px] w-auto object-contain"
              />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 320 512"
              className="h-8 w-8 transition-transform duration-200 hover:scale-110"
            >
              <rect width="100%" height="100%" fill="white" rx="8" />
              <path
                fill="black"
                d="M279.14 288l14.22-92.66h-88.91V134c0-25.35 12.42-50.06 52.24-50.06H293V6.26S261.24 0 231.36 0c-73.11 0-121 44.38-121 124.72v70.62H22.89V288h87.47v224h104.78V288z"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 512 512"
              className="h-8 w-8 transition-transform duration-200 hover:scale-110"
            >
              <rect width="100%" height="100%" fill="white" rx="8" />
              <path
                d="M349.33 69.33H162.67A93.34 93.34 0 0069.33 162.67v186.66A93.34 93.34 0 00162.67 442.67h186.66A93.34 93.34 0 00442.67 349.33V162.67A93.34 93.34 0 00349.33 69.33zM256 346.67A90.67 90.67 0 11192.64 165a90.68 90.68 0 0162.72 181.67zM370.67 174.93a21.34 21.34 0 1121.33-21.33 21.33 21.33 0 01-21.33 21.33z"
                fill="black"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 448 512"
              className="h-8 w-8 transition-transform duration-200 hover:scale-110"
            >
              <rect width="100%" height="100%" fill="white" rx="8" />
              <path
                fill="black"
                d="M100.28 448H7.4V149.66h92.88zm-46.44-339a53.61 53.61 0 1 1 53.61-53.61 53.61 53.61 0 0 1-53.61 53.61zM447.92 448h-92.68V302.4c0-34.7-12.43-58.4-43.55-58.4-23.73 0-37.88 16-44.09 31.42-2.27 5.49-2.84 13.14-2.84 20.83V448h-92.68s1.24-269.92 0-297.34h92.68v42.13c12.32-19 34.32-46.13 83.48-46.13 60.91 0 106.48 39.79 106.48 125.31z"
              />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="white"
              viewBox="0 0 24 24"
              className="h-8 w-8 transition-transform duration-200 hover:scale-110"
            >
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 001.88-2.35 8.3 8.3 0 01-2.7 1.03 4.15 4.15 0 00-7.1 3.78A11.78 11.78 0 013 4.89a4.13 4.13 0 001.29 5.54 4.14 4.14 0 01-1.88-.52v.05a4.15 4.15 0 003.32 4.07 4.23 4.23 0 01-1.87.07 4.15 4.15 0 003.88 2.89A8.34 8.34 0 012 19.54 11.75 11.75 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.18 8.18 0 0024 6.6a8.26 8.26 0 01-2.36.65 4.15 4.15 0 001.82-2.28z" />
            </svg>
          </a>

          {/* YouTube */}
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
      <hr className="mt-8 w-full border-[1.5px]" />
      <p className="flex font-inter items-center justify-center gap-2 p-8 text-[1.3rem] text-sm text-white">
        <span>©</span> Created by Bindaas Bhide
      </p>
    </div>
  );
};

export default Footer;
