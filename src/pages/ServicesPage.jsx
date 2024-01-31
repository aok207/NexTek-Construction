import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/services/architecture-design", { replace: true });
  }, []);

  return <div></div>;
};

export default ServicesPage;
