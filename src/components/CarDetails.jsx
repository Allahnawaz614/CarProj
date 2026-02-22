import { useEffect } from "react";
import carsImage from '../assets/cars.jpeg';
import mustang from '../assets/mustang-convertible-100960546_l.webp';

// Sample car data with full details
const carDetailsData = {
  1: {
    id: 1,
    name: "Ford Mustang Convertible",
    thumbnail: mustang,
    heroImage: carsImage,
    location: "Lyallpur Town",
    views: "4500000",
    description: "The Ford Mustang Convertible is a classic American muscle car that offers a blend of power, style, and comfort. With its bold design and powerful engine options, the Mustang Convertible delivers an exhilarating driving experience. The convertible top allows you to enjoy the wind in your hair and the open road. Inside, the Mustang features a modern and comfortable cabin with advanced technology and premium materials. The Mustang Convertible combines performance with everyday usability, making it perfect for both weekend adventures and daily commutes. With its iconic design and powerful V8 engine options, this car delivers an unmatched driving experience that captures the essence of American automotive heritage.",
    features: [
      "5.0L V8 engine with 450 horsepower",
      "10-speed automatic transmission",
      "Rear-wheel drive",
      "Leather-trimmed seats",
      "12-inch digital instrument cluster",
      "SYNC 3 infotainment system with Apple CarPlay and Android Auto",
      "Bang & Olufsen premium audio system",
      "Adaptive cruise control",
      "Lane keep assist",
      "Blind spot monitoring",
      "Rear cross traffic alert"
    ],
    advertiser: "Usama Arif",
    date: "05/08/2024",
    price: "4500000",
    contact: "123-456-7890"
  },
  2: {
    id: 2,
    name: "Toyota RAV4",
    thumbnail: mustang,
    heroImage: carsImage,
    location: "Karachi",
    views: "3200000",
    description: "The Toyota RAV4 is a compact SUV that offers a perfect combination of style, performance, and advanced technology. With its sleek and modern design, the RAV4 stands out on the road while providing exceptional comfort and reliability.",
    features: [
      "2.5L 4-cylinder engine",
      "CVT transmission",
      "All-wheel drive",
      "Leather-trimmed seats",
      "8-inch touchscreen display",
      "Apple CarPlay and Android Auto",
      "JBL premium audio system",
      "Toyota Safety Sense 2.0",
      "Adaptive cruise control",
      "Lane departure warning",
      "Automatic emergency braking"
    ],
    advertiser: "Ahmed Khan",
    date: "10/08/2024",
    price: "3500000",
    contact: "234-567-8901"
  },
  3: {
    id: 3,
    name: "Honda CR-V",
    thumbnail: mustang,
    heroImage: carsImage,
    location: "Lahore",
    views: "2800000",
    description: "The Honda CR-V is a versatile SUV that combines practicality with style. With its spacious interior and advanced safety features, the CR-V is perfect for families and adventure seekers alike.",
    features: [
      "1.5L turbocharged engine",
      "CVT transmission",
      "All-wheel drive",
      "Heated front seats",
      "7-inch touchscreen",
      "Honda Sensing suite",
      "Adaptive cruise control",
      "Collision mitigation braking",
      "Road departure mitigation",
      "Lane keeping assist"
    ],
    advertiser: "Fatima Ali",
    date: "15/08/2024",
    price: "4200000",
    contact: "345-678-9012"
  },
  4: {
    id: 4,
    name: "Toyota Camry",
    thumbnail: mustang,
    heroImage: carsImage,
    location: "Islamabad",
    views: "2100000",
    description: "The Toyota Camry is a midsize sedan that offers exceptional reliability and fuel efficiency. With its comfortable interior and advanced safety features, the Camry is perfect for daily commuting and long trips.",
    features: [
      "2.5L 4-cylinder engine",
      "8-speed automatic transmission",
      "Front-wheel drive",
      "Leather-trimmed seats",
      "9-inch touchscreen",
      "Apple CarPlay and Android Auto",
      "JBL premium audio",
      "Toyota Safety Sense 2.5+",
      "Pre-collision system",
      "Dynamic radar cruise control"
    ],
    advertiser: "Hassan Malik",
    date: "20/08/2024",
    price: "3800000",
    contact: "456-789-0123"
  }
};

function CarDetails({ carId, category, onBack }) {
  // Use carId to get car details, defaulting to first car if not found
  const car = carDetailsData[carId] || carDetailsData[1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [carId]);

  return (
    <>
      {/* Hero Banner Section */}
      <section
        className="min-h-[400px] relative overflow-hidden py-8 bg-cover bg-center bg-no-repeat flex flex-col justify-center"
        style={{
          backgroundImage: `url(${car.heroImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-pak-dark/85"></div>

        <div className="relative z-10 mx-auto px-4">
          <div className="flex items-start">
            {/* Left Bracket */}
            <div className="w-[12px] h-[200px] shrink-0 mt-1 mr-3 relative">
              <div className="w-[200px] h-[12px] -bottom-40 left-0 bg-pak-green"></div>
              <div className="w-[12px] h-full left-0 top-40 bg-pak-green"></div>
              <div className="w-[200px] h-[12px] -bottom-40 left-0 bg-pak-green"></div>
            </div>

            <div className="p-5 flex flex-col gap-4">
              <h1 className="text-white text-3xl lg:text-5xl font-bold leading-tight m-0">
                Car Details
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Car Information */}
            <div className="flex-1">
              {/* Car Overview */}
              <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-200">
                <img
                  src={car.thumbnail}
                  alt={car.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">
                    {car.name}
                  </h2>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-pak-green">
                      <span className="text-lg">📍</span>
                      <span>{car.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-pak-green">
                      <span className="text-lg">👁️</span>
                      <span>{car.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Car Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Car Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {car.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Features
                </h3>
                <ul className="space-y-3">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-pak-green text-xl mt-0.5">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Advertisement Summary */}
            <div className="lg:w-80">
              <div className="bg-pak-light-green rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Advertisement Summary
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-pak-green text-sm">→</span>
                    <span className="text-gray-700">{car.advertiser}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pak-green text-sm">→</span>
                    <span className="text-gray-700">{car.date}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pak-green text-sm">→</span>
                    <span className="text-gray-700">{car.location}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pak-green text-sm">→</span>
                    <span className="text-gray-700">Price: {car.price}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pak-green text-sm">→</span>
                    <span className="text-gray-700">Contact: {car.contact}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarDetails;

