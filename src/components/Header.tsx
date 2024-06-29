import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="h-24 flex items-center justify-center px-16 border-b border-neutral-400">
      <div className="flex w-full items-center h-8">
        <div className="font-montserrat text-xl font-bold h-full grow flex items-center">
          {title}
        </div>
        <button className="w-16 text-sm font-semibold rounded hidden md:block">
          projects
        </button>
        <button className="w-16 ml-1 mr-3 text-sm font-semibold rounded hidden md:block">
          events
        </button>
        <button className="bg-yellow-500 w-24 px-5 py-1 text-sm font-semibold rounded">
          let's talk
        </button>
      </div>
    </div>
  );
};

export default Header;
