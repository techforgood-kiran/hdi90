import sdg1 from "@/assets/sdg-icons/sdg-1.png";
import sdg2 from "@/assets/sdg-icons/sdg-2.png";
import sdg3 from "@/assets/sdg-icons/sdg-3.png";
import sdg4 from "@/assets/sdg-icons/sdg-4.png";
import sdg5 from "@/assets/sdg-icons/sdg-5.png";
import sdg6 from "@/assets/sdg-icons/sdg-6.png";
import sdg8 from "@/assets/sdg-icons/sdg-8.png";
import sdg11 from "@/assets/sdg-icons/sdg-11.png";
import sdg13 from "@/assets/sdg-icons/sdg-13.png";
import sdg17 from "@/assets/sdg-icons/sdg-17.png";

interface SDGIconProps {
  number: string;
  size?: "sm" | "md";
  className?: string;
}

const sdgIconMap: Record<string, string> = {
  "1": sdg1,
  "2": sdg2,
  "3": sdg3,
  "4": sdg4,
  "5": sdg5,
  "5.5": sdg5,
  "6": sdg6,
  "7": "/api/placeholder/64/64", // Placeholder for missing icons
  "8": sdg8,
  "8.6": sdg8,
  "9": "/api/placeholder/64/64",
  "9.4": "/api/placeholder/64/64",
  "10": "/api/placeholder/64/64",
  "11": sdg11,
  "11.6": sdg11,
  "12": "/api/placeholder/64/64",
  "12.3": "/api/placeholder/64/64",
  "13": sdg13,
  "14": "/api/placeholder/64/64",
  "15": "/api/placeholder/64/64",
  "16": "/api/placeholder/64/64",
  "17": sdg17,
  "17.6": sdg17,
};

export const SDGIcon = ({ number, size = "sm", className = "" }: SDGIconProps) => {
  const iconSrc = sdgIconMap[number];
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12"
  };

  if (!iconSrc) {
    return (
      <div className={`${sizeClasses[size]} bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600 ${className}`}>
        {number}
      </div>
    );
  }

  return (
    <img 
      src={iconSrc} 
      alt={`SDG ${number}`}
      className={`${sizeClasses[size]} object-cover rounded ${className}`}
    />
  );
};