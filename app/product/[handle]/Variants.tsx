"use client";

import { useMemo, useState } from "react";

const Variant = ({variants,options}) => {
    console.log(options);
      const sizes = useMemo(() => {
    return options.find(opt => opt.name === 'Size')?.values || [];
  }, [options]);

  const colors = useMemo(() => {
    return options.find(opt => opt.name === 'Color')?.values || [];
  }, [options]);

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

//   const selectedVariant = useMemo(() => {
//     return variants.find(({ node }) => {
//       const options = node.selectedOptions;
//       return (
//         options.find(o => o.name === 'Size')?.value === selectedSize &&
//         options.find(o => o.name === 'Color')?.value === selectedColor
//       );
//     })?.node;
//   }, [selectedSize, selectedColor, variants]);
    return (
        <div className="flex flex-col gap-5">
                      {options.map((option, index) => (
  <div className="space-y-4" key={index}>
    <p className="text-xs uppercase tracking-wider text-[#33333399]">
      { option.name.toLowerCase() === "size" && option.name}
    </p>
    
    <div className="flex flex-wrap gap-2">
      {option.values.map((value) => {
        const isColor = option.name.toLowerCase() !== 'size';
        console.log(isColor,option.name.toLowerCase());
        const buttonStyle = isColor
          ? {
              backgroundColor: value.toLowerCase(), // Apply background for color options
              borderColor: '#33333330',
              color: 'transparent', // Hide text for color buttons
            }
          : {};

        return ( !isColor &&
          <button
            key={`${option.name}-${value}`}
            className={`w-12 h-12 rounded-full border flex items-center justify-center text-xs size-btn ${
              isColor ? '' : 'text-[#333]'
            }`}
            style={buttonStyle}
            aria-label={`Select ${value}`}
          >
            {!isColor && value}
          </button>)
        
      })}
    </div>
  </div>
))}

        </div>
    )
}
export default Variant;