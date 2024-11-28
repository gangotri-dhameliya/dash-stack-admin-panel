import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set the initial width
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
