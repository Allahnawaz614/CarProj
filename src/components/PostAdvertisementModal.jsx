import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const postAdSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup.string().required("Price is required"),
  description: yup.string().required("Description is required"),
  features: yup.string().required("Features are required"),
  startsOn: yup.string().required("Start date is required"),
  endsOn: yup.string().required("End date is required"),
  category: yup.string().required("Category is required"),
  cityArea: yup.string().required("City Area is required"),
  type: yup.string().required("Type is required"),
  image: yup.mixed().required("Image is required"),
});

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

const cityAreas = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Faisalabad",
  "Rawalpindi",
  "Multan",
  "Peshawar",
  "Quetta"
];

const types = [
  "New",
  "Used",
  "Certified Pre-Owned"
];

function PostAdvertisementModal({ isOpen, onClose }) {
  const [fileName, setFileName] = useState("No file chosen");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(postAdSchema),
  });

  const selectedCategory = watch("category");
  const selectedCityArea = watch("cityArea");
  const selectedType = watch("type");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      reset();
      setFileName("No file chosen");
      setShowCategoryDropdown(false);
      setShowCityDropdown(false);
      setShowTypeDropdown(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, reset]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  const onSubmit = (data) => {
    console.log("Post Advertisement data:", data);
    // Handle post advertisement logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Dark Overlay Background */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Post Advertisement Modal */}
      <div 
        className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close Button */}
        <div className="flex items-center justify-between mb-6 sticky top-0 bg-white pb-2">
          <h2 className="text-2xl font-bold text-pak-green m-0">Post Advertisement</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none cursor-pointer bg-transparent border-0 p-0 w-6 h-6 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter car name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Price Field */}
          <div>
            <label 
              htmlFor="price" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              {...register("price")}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.price ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
            )}
          </div>

          {/* Description Field */}
          <div>
            <label 
              htmlFor="description" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              rows={4}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Features Field */}
          <div>
            <label 
              htmlFor="features" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Features
            </label>
            <textarea
              id="features"
              {...register("features")}
              rows={4}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y ${
                errors.features ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter features"
            />
            {errors.features && (
              <p className="text-red-500 text-sm mt-1">{errors.features.message}</p>
            )}
          </div>

          {/* Date Fields */}
          <div className="grid grid-cols-2 gap-4">
            {/* Starts On */}
            <div>
              <label 
                htmlFor="startsOn" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Starts On
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="startsOn"
                  {...register("startsOn")}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 ${
                    errors.startsOn ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="mm/dd/yyyy"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                  📅
                </span>
              </div>
              {errors.startsOn && (
                <p className="text-red-500 text-sm mt-1">{errors.startsOn.message}</p>
              )}
            </div>

            {/* Ends On */}
            <div>
              <label 
                htmlFor="endsOn" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ends On
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="endsOn"
                  {...register("endsOn")}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 ${
                    errors.endsOn ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="mm/dd/yyyy"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                  📅
                </span>
              </div>
              {errors.endsOn && (
                <p className="text-red-500 text-sm mt-1">{errors.endsOn.message}</p>
              )}
            </div>
          </div>

          {/* Dropdown Fields */}
          <div className="grid grid-cols-3 gap-4">
            {/* Category Dropdown */}
            <div className="relative">
              <label 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Category
              </label>
              <button
                type="button"
                onClick={() => {
                  setShowCategoryDropdown(!showCategoryDropdown);
                  setShowCityDropdown(false);
                  setShowTypeDropdown(false);
                }}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left flex items-center justify-between ${
                  errors.category 
                    ? "border-red-500 bg-white text-gray-700" 
                    : selectedCategory 
                      ? "border-gray-300 bg-pak-green text-white"
                      : "border-gray-300 bg-pak-green text-white"
                }`}
              >
                <span>{selectedCategory || "Select Category"}</span>
                <span className="text-sm">▼</span>
              </button>
              {showCategoryDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setValue("category", category);
                        setShowCategoryDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
              )}
            </div>

            {/* City Area Dropdown */}
            <div className="relative">
              <label 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                City Area
              </label>
              <button
                type="button"
                onClick={() => {
                  setShowCityDropdown(!showCityDropdown);
                  setShowCategoryDropdown(false);
                  setShowTypeDropdown(false);
                }}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left flex items-center justify-between ${
                  errors.cityArea 
                    ? "border-red-500 bg-white text-gray-700" 
                    : selectedCityArea 
                      ? "border-gray-300 bg-pak-green text-white"
                      : "border-gray-300 bg-pak-green text-white"
                }`}
              >
                <span>{selectedCityArea || "Select City Area"}</span>
                <span className="text-sm">▼</span>
              </button>
              {showCityDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {cityAreas.map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => {
                        setValue("cityArea", city);
                        setShowCityDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
              {errors.cityArea && (
                <p className="text-red-500 text-sm mt-1">{errors.cityArea.message}</p>
              )}
            </div>

            {/* Type Dropdown */}
            <div className="relative">
              <label 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Type
              </label>
              <button
                type="button"
                onClick={() => {
                  setShowTypeDropdown(!showTypeDropdown);
                  setShowCategoryDropdown(false);
                  setShowCityDropdown(false);
                }}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-left flex items-center justify-between ${
                  errors.type 
                    ? "border-red-500 bg-white text-gray-700" 
                    : selectedType 
                      ? "border-gray-300 bg-pak-green text-white"
                      : "border-gray-300 bg-pak-green text-white"
                }`}
              >
                <span>{selectedType || "Select Type"}</span>
                <span className="text-sm">▼</span>
              </button>
              {showTypeDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {types.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setValue("type", type);
                        setShowTypeDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
              {errors.type && (
                <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
              )}
            </div>
          </div>

          {/* Image Field */}
          <div>
            <label 
              htmlFor="image" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Image
            </label>
            <div className="flex items-center gap-2">
              <label
                htmlFor="image"
                className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Choose files
              </label>
              <input
                type="file"
                id="image"
                {...register("image")}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <span className="text-sm text-gray-500">{fileName}</span>
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
            )}
          </div>

          {/* Post Advertisement Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium text-base cursor-pointer hover:bg-blue-700 transition-colors mt-6"
          >
            Post Advertisement
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostAdvertisementModal;

