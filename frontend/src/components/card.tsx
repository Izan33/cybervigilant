import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-md ${className || ""}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
  return (
    <div className={`rounded-lg bg-gray-800 ${className || ""}`}>
      {children}
    </div>
  );
};