import React from "react";

interface EducationCardProps {
  institution: string;
  role: string;
  dateRange: string;
  certificateTitle: string;
  description: string;
}

export default function EducationCard({
  institution,
  role,
  dateRange,
  certificateTitle,
  description,
}: EducationCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-b pb-6 mb-6">
      {/* Left Column (1/3 en desktop) */}
      <div className="col-span-1 ml-4">
        <h3 className="font-semibold text-lg text-gray-800">{institution}</h3>
        <div className="flex justify-start gap-2">
          <p className="text-sm text-[#2B2B2B]">{role}</p>
          <span className="text-xs px-2 py-1 font-semibold text-[#FFB400] cursor-default">
            {dateRange}
          </span>
        </div>
      </div>

      {/* Right Column (2/3 en desktop) */}
      <div className="md:col-span-2">
        <h4 className="font-semibold text-gray-800">
          {certificateTitle}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
