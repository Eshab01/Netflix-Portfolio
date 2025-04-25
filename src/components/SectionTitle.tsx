
import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  redText?: ReactNode;
}

const SectionTitle = ({ title, subtitle, className, redText }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="section-title">
        {title}
        {redText && <span className="text-netflix-red">{redText}</span>}
      </h2>
      {subtitle && <p className="text-lg text-gray-300 mt-2">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
