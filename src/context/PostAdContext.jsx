import { createContext, useContext, useState } from "react";

const PostAdContext = createContext();

export function PostAdProvider({ children }) {
  const [isPostAdOpen, setIsPostAdOpen] = useState(false);

  const openPostAd = () => setIsPostAdOpen(true);
  const closePostAd = () => setIsPostAdOpen(false);

  return (
    <PostAdContext.Provider
      value={{
        isPostAdOpen,
        openPostAd,
        closePostAd,
      }}
    >
      {children}
    </PostAdContext.Provider>
  );
}

export function usePostAd() {
  const context = useContext(PostAdContext);
  if (!context) {
    throw new Error("usePostAd must be used within a PostAdProvider");
  }
  return context;
}

