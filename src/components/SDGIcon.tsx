import sdg1 from "@/assets/sdg-icons/sdg-1.png";
import sdg2 from "@/assets/sdg-icons/sdg-2.png";
import sdg3 from "@/assets/sdg-icons/sdg-3.png";
import sdg4 from "@/assets/sdg-icons/sdg-4.png";
import sdg5 from "@/assets/sdg-icons/sdg-5.png";
import sdg6 from "@/assets/sdg-icons/sdg-6.png";
import sdg7 from "@/assets/sdg-icons/sdg-7.png";
import sdg8 from "@/assets/sdg-icons/sdg-8.png";
import sdg9 from "@/assets/sdg-icons/sdg-9.png";
import sdg10 from "@/assets/sdg-icons/sdg-10.png";
import sdg11 from "@/assets/sdg-icons/sdg-11.png";
import sdg12 from "@/assets/sdg-icons/sdg-12.png";
import sdg13 from "@/assets/sdg-icons/sdg-13.png";
import sdg14 from "@/assets/sdg-icons/sdg-14.png";
import sdg15 from "@/assets/sdg-icons/sdg-15.png";
import sdg16 from "@/assets/sdg-icons/sdg-16.png";
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
  "7": sdg7,
  "8": sdg8,
  "8.6": sdg8,
  "9": sdg9,
  "9.4": sdg9,
  "10": sdg10,
  "11": sdg11,
  "11.6": sdg11,
  "12": sdg12,
  "12.3": sdg12,
  "13": sdg13,
  "14": sdg14,
  "15": sdg15,
  "16": sdg16,
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