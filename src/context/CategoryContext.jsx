import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectCategory = (category) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, selectCategory, clearCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}

