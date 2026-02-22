import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCarId, setSelectedCarId] = useState(null);

  const navigateToCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage("category");
    setSelectedCarId(null);
  };

  const navigateToCarDetails = (carId, category = null) => {
    setSelectedCarId(carId);
    if (category) {
      setSelectedCategory(category);
    }
    setCurrentPage("carDetails");
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    setSelectedCategory(null);
    setSelectedCarId(null);
  };

  const navigateBack = () => {
    if (currentPage === "carDetails") {
      setCurrentPage("category");
      setSelectedCarId(null);
    } else if (currentPage === "category") {
      navigateToHome();
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        selectedCategory,
        selectedCarId,
        navigateToCategory,
        navigateToCarDetails,
        navigateToHome,
        navigateBack,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}

