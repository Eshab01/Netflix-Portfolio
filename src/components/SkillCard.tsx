
import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  description: string;
}

const SkillCard = ({ title, icon, description }: SkillCardProps) => {
  return (
    <div className="netflix-card p-6 h-full flex flex-col">
      <div className="mb-4 text-netflix-red">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 flex-grow">{description}</p>
    </div>
  );
};

export default SkillCard;
