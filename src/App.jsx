import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import ArchitectureDesignPage from "./pages/ArchitectureDesignPage";
import ConstructionWorkPage from "./pages/ConstructionWorkPage";
import "bootstrap/dist/css/bootstrap.min.css";
import GreenEnvironmentPage from "./pages/GreenEnvironmentPage";
import SustainabilityPage from "./pages/SustainabilityPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/services/architecture-design"
          element={<ArchitectureDesignPage />}
        />
        <Route
          path="/services/construction-work"
          element={<ConstructionWorkPage />}
          exact
        />
        <Route path="/about-us" element={<AboutPage />} />
        <Route
          path="/about-us/green-environment"
          element={<GreenEnvironmentPage />}
        />
        <Route
          path="/about-us/sustainability"
          element={<SustainabilityPage />}
        />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
