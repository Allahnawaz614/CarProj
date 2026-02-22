import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../context/AuthContext";

const signupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  apiKey: yup.string().required("API Key is required"),
  loginId: yup.string().required("Login ID is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  securityQuestion: yup.string().required("Security question is required"),
  securityAnswer: yup.string().required("Security answer is required"),
  birthDate: yup.string().required("Birth date is required"),
  contactNumber: yup.string().required("Contact number is required"),
  image: yup.mixed().required("Image is required"),
});

function SignupModal({ isOpen, onClose }) {
  const { login } = useAuth();
  const [fileName, setFileName] = useState("No file chosen");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      reset();
      setFileName("No file chosen");
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
    console.log("Signup data:", data);
    // Handle signup logic here (API call would go here)
    // For demo purposes, automatically log in the user after signup
    const userData = {
      name: data.name,
      email: data.email,
    };
    login(userData);
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
      
      {/* Signup Modal */}
      <div 
        className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close Button */}
        <div className="flex items-center justify-between mb-6 sticky top-0 bg-white pb-2">
          <h2 className="text-2xl font-bold text-gray-800 m-0">Sign Up</h2>
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
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* API Key Field */}
          <div>
            <label 
              htmlFor="apiKey" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              API Key
            </label>
            <input
              type="text"
              id="apiKey"
              {...register("apiKey")}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.apiKey ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter API key"
            />
            {errors.apiKey && (
              <p className="text-red-500 text-sm mt-1">{errors.apiKey.message}</p>
            )}
          </div>

          {/* Login ID Field */}
          <div>
            <label 
              htmlFor="loginId" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Login ID
            </label>
            <input
              type="text"
              id="loginId"
              {...register("loginId")}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.loginId ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter login ID"
            />
            {errors.loginId && (
              <p className="text-red-500 text-sm mt-1">{errors.loginId.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Security Question Field */}
          <div>
            <label 
              htmlFor="securityQuestion" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Security Question
            </label>
            <input
              type="text"
              id="securityQuestion"
              {...register("securityQuestion")}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.securityQuestion ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter security question"
            />
            {errors.securityQuestion && (
              <p className="text-red-500 text-sm mt-1">{errors.securityQuestion.message}</p>
            )}
          </div>

          {/* Security Answer Field */}
          <div>
            <label 
              htmlFor="securityAnswer" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Security Answer
            </label>
            <input
              type="text"
              id="securityAnswer"
              {...register("securityAnswer")}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.securityAnswer ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter security answer"
            />
            {errors.securityAnswer && (
              <p className="text-red-500 text-sm mt-1">{errors.securityAnswer.message}</p>
            )}
          </div>

          {/* Birth Date Field */}
          <div>
            <label 
              htmlFor="birthDate" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Birth Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="birthDate"
                {...register("birthDate")}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 ${
                  errors.birthDate ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="mm/dd/yyyy"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                📅
              </span>
            </div>
            {errors.birthDate && (
              <p className="text-red-500 text-sm mt-1">{errors.birthDate.message}</p>
            )}
          </div>

          {/* Contact Number Field */}
          <div>
            <label 
              htmlFor="contactNumber" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              {...register("contactNumber")}
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.contactNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter contact number"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>
            )}
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
                Choose file
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

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium text-base cursor-pointer hover:bg-blue-700 transition-colors mt-6"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupModal;

