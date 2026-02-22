function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-10">

          {/* Company */}
          <div className="md:w-1/4">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Etiam vitae eros nec sapien.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/4">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Condition</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:w-1/4">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Freeport Road, Gulberg III, Lahore</li>
              <li>📞 0300 123 4567</li>
              <li>✉️ info@gmail.com</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded hover:bg-green-600">f</a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded hover:bg-green-600">t</a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded hover:bg-green-600">in</a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded hover:bg-green-600">ig</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:w-1/4">
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and news.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l bg-slate-700 text-sm focus:outline-none"
              />
              <button className="bg-green-600 px-4 py-2 rounded-r text-sm text-white hover:bg-green-700">
                Signup
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm">
          <p>© PakClassified. All Rights Reserved. Designed by Team LVS</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Help</a>
            <a href="#" className="hover:text-white">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
