import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./hooks/useScrollToTop.ts";
import HomePage from "./pages/HomePage.tsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}
