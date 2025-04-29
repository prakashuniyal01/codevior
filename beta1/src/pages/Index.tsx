
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Get the path from the location and redirect appropriately
    const path = location.pathname.toLowerCase();
    
    // Valid paths in our application
    if (path === '/portfolio' || 
        path === '/about' || 
        path === '/services' || 
        path === '/contact') {
      navigate(path, { replace: true });
    } else {
      // Default redirect to Home
      navigate('/', { replace: true });
    }
  }, [navigate, location]);
  
  return null;
};

export default Index;
