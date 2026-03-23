import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Template3 from "@/templates/Template3";

const Template3Page = () => {
  return (
    <>
      <Link 
        to="/templates" 
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all flex items-center gap-2 text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Galeria de Templates
      </Link>
      <Template3 />
    </>
  );
};

export default Template3Page;
