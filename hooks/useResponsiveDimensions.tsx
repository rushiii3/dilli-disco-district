"use client";
import { useState, useEffect } from 'react';

// Define the breakpoints and their corresponding dimensions
const BREAKPOINTS = [
  { minWidth: 3569.6, width: 3569.6, height: 2231 },  // 4K
  { minWidth: 1921.6, width: 1921.6, height: 1201 }, // Laptop
  { minWidth: 1665.6, width: 1665.6, height: 1041 }, // Laptop
  { minWidth: 1249.6, width: 1249.6, height: 781 },  // Tablet / Mobile L/M/S
];

const useResponsiveDimensions = () => {
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0, // Initial value, will be updated once mounted
    height: 0, // Initial value, will be updated once mounted
  });

  useEffect(() => {
    // Ensure we are running on the client side (window is available)
    if (typeof window === 'undefined') return;

    // Function to update dimensions based on window width and height
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      let newWidth = width;
      let newHeight = height;

      // Loop through the breakpoints and check for the first matching condition
      for (const breakpoint of BREAKPOINTS) {
        if (width >= breakpoint.minWidth) {
          newWidth = breakpoint.width;
          newHeight = breakpoint.height;
          break;
        }
      }

      setDimensions({ width: newWidth, height: newHeight });
    };

    // Update dimensions on initial render
    updateDimensions();

    // Add event listener to update dimensions on window resize
    window.addEventListener("resize", updateDimensions);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return dimensions;
};

export default useResponsiveDimensions;
