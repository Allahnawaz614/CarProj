import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "../context/NavigationContext";
import { usePostAd } from "../context/PostAdContext";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import LoginImg from "./LoginImg";

const categories = [
  "SUV",
  "Sedan",
  "Crossover",
  "Hatchback",
  "Wegon",
  "Sports",
  "Hybride",
  "Convertible"
];

function Header() {
  const { isAuthenticated } = useAuth();
  const { navigateToCategory, navigateToHome } = useNavigation();
  const { openPostAd } = usePostAd();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categoriesRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (categoriesRef.current && !categoriesRef.current.contains(e.target)) {
        setIsCategoriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top Bar with Login and Signup or Profile */}
        <div className="bg-gray-200 px-4 py-2 flex justify-end overflow-visible">
          {isAuthenticated ? (
            <LoginImg />
          ) : (
            <div className="flex gap-2">
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="bg-pak-green text-white px-4 py-2 rounded-md text-base font-medium cursor-pointer transition-colors hover:bg-[#16a34a]"
              >
                Login
              </button>
              <button 
                onClick={() => setIsSignupOpen(true)}
                className="bg-[#16a34a] text-white px-4 py-2 rounded-md text-base font-medium cursor-pointer transition-colors hover:bg-[#15803d]"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      
      {/* Main Navigation Bar */}
      <div className="bg-gray-200 px-4 py-4">
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="m-0 text-pak-green text-2xl font-bold">PakClassified</h2>
          </div>
          
          {/* Navigation and Button on the right */}
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <button
                onClick={navigateToHome}
                className="text-gray-500 no-underline text-base font-normal transition-colors hover:text-pak-green bg-transparent border-0 cursor-pointer"
              >
                Home
              </button>
              <a 
                href="#about" 
                className="text-gray-500 no-underline text-base font-normal transition-colors hover:text-pak-green"
              >
                About
              </a>
              <div className="relative" ref={categoriesRef}>
                <a 
                  href="#categories" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsCategoriesOpen(!isCategoriesOpen);
                  }}
                  className="text-gray-500 no-underline text-base font-normal transition-colors hover:text-pak-green flex  items-center gap-1 cursor-pointer"
                >
                  Categories
                  <span className="text-[10px] leading-none">▼</span>
                </a>
                
                {isCategoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-[9999] overflow-hidden">
                    <ul className="py-2">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <button
                            onClick={() => {
                              navigateToCategory(category);
                              setIsCategoriesOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pak-green transition-colors"
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <a 
                href="#contact" 
                className="text-gray-500 no-underline text-base font-normal transition-colors hover:text-pak-green"
              >
                Contact
              </a>
            </nav>
            
            {/* Post Advertisement Button */}
            <button 
              onClick={openPostAd}
              className="bg-pak-green text-white border-0 px-6 py-2.5 text-base font-semibold cursor-pointer flex items-center gap-2 transition-colors hover:bg-[#16a34a] rounded-md"
            >
              Post Advertisement
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    
    {/* Login Modal */}
    <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    
    {/* Signup Modal */}
    <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </>
  )
}

export default Header
