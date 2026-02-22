import { useRef } from "react";
import { AuthProvider } from "./context/AuthContext";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { PostAdProvider, usePostAd } from "./context/PostAdContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import ExploreByCat from "./components/ExploreByCatagories";
import LatestPostings from "./components/LatestPostings";
import Footer from "./components/Footer";
import CategoryDetail from "./components/CategoryDetail";
import CarDetails from "./components/CarDetails";
import PostAdvertisementModal from "./components/PostAdvertisementModal";
import SearchResult from "./components/SearchResult";

function AppContent() {
  const searchRef = useRef(null);
  const { currentPage, selectedCategory, selectedCarId, navigateToHome, navigateBack } = useNavigation();
  const { isPostAdOpen, closePostAd } = usePostAd();

  const scrollToSearch = () => {
    searchRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (currentPage === "carDetails" && selectedCarId) {
    return (
      <>
        <Header />
        <CarDetails carId={selectedCarId} category={selectedCategory} onBack={navigateBack} />
        <Footer />
        <PostAdvertisementModal isOpen={isPostAdOpen} onClose={closePostAd} />
      </>
    );
  }

  if (currentPage === "category" && selectedCategory) {
    return (
      <>
        <Header />
        <CategoryDetail category={selectedCategory} onBack={navigateToHome} />
        <Footer />
        <PostAdvertisementModal isOpen={isPostAdOpen} onClose={closePostAd} />
      </>
    );
  }

  return (
    <>
      <Header />
      <Hero onSearchClick={scrollToSearch} />
      <SearchBar ref={searchRef} />
      <ExploreByCat />
      <LatestPostings />
      <Footer />
      <PostAdvertisementModal isOpen={isPostAdOpen} onClose={closePostAd} />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <NavigationProvider>
        <PostAdProvider>
          <AppContent />
        </PostAdProvider>
      </NavigationProvider>
    </AuthProvider>
  );
}

export default App;

