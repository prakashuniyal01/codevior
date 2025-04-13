import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple to-teal">
        <span className="font-bold text-white">C</span>
      </div>
      <span className="text-lg font-bold">Company</span>
    </Link>
  );
};

export default Logo;