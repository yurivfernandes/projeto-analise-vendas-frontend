import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormLayoutProps {
  title: string;
  Icon: LucideIcon;
  children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({ title, Icon, children }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Icon className="w-6 h-6 text-cyan-600" />
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
};

export default FormLayout;
