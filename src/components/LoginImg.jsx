import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import loginImg from "../assets/IMG-20221108-WA0030.jpg";

function LoginImg() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <div className="relative bg-gray-200 px-4 py-2 flex justify-end overflow-visible" ref={dropdownRef}>
      <img
        src={loginImg}
        alt="Profile"
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full cursor-pointer border-2 border-white relative z-10"
      />

      {open && (
        <div className="absolute top-16 right-4 w-48 bg-white rounded-lg shadow-lg border z-[9999]">
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-semibold">{user?.name || "User"}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>

          <ul className="text-sm">
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                View Profile
              </button>
            </li>
            <li>
              <button 
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded-lg"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LoginImg;
