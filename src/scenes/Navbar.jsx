import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage 
          ? "text-yellow bg-yellow/10 px-4 py-2 rounded-full" 
          : "px-4 py-2 rounded-full"
      } hover:text-yellow hover:bg-yellow/10 transition-all duration-300 transform hover:scale-105 relative group`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
      {/* Animated underline */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow transition-all duration-300 group-hover:w-full"></span>
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  // Enhanced background with glassmorphism effect
  const navbarBackground = isTopOfPage 
    ? "bg-transparent" 
    : "bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4 transition-all duration-500`}>
      <div className="flex items-center justify-between mx-auto w-5/6 max-w-7xl">
        {/* Enhanced Logo/CV Button */}
        <a
          href="https://drive.google.com/file/d/1Cx1kbpD170Krjlyt3dcsd-gH13mU2vOX/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white px-6 py-3 rounded-2xl font-playfair text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
        >
          <span className="relative z-10">CV</span>
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Shine effect */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/30 rounded-full blur-sm group-hover:animate-ping"></div>
        </a>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex items-center gap-8 font-opensans text-sm font-semibold">
            {/* Navigation Links Container */}
            <div className="flex gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 border border-white/20">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            
            {/* Theme Toggle Button */}
           
          </div>
        ) : (
          /* Enhanced Mobile Menu Button */
          <button
            className="relative p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110 group"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {/* Hamburger Icon with Animation */}
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuToggled ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white mt-1 transition-all duration-300 ${isMenuToggled ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white mt-1 transition-all duration-300 ${isMenuToggled ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        )}

        {/* ENHANCED MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setIsMenuToggled(false)}
            ></div>
            
            {/* Menu Panel */}
            <div className="fixed right-0 top-0 h-full w-80 bg-gradient-to-br from-blue-900/95 to-purple-900/95 backdrop-blur-xl border-l border-white/20 shadow-2xl transform transition-transform duration-300">
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button 
                  onClick={() => setIsMenuToggled(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col gap-6 px-8 mt-8">
                {['Home', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((page, index) => (
                  <div
                    key={page}
                    className="transform transition-all duration-500 hover:translate-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link
                      page={page}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                ))}
                
                {/* Social Links */}
                <div className="flex gap-4 mt-8 pt-8 border-t border-white/20">
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.01-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.74.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;