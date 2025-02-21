import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          This website has been exclusively developed by Ahnaf Rafi. The Islamic
          University, Bangladesh, and the Department of Biomedical Engineering
          bear no responsibility for the content of this site. Should you have
          any feedback or inquiries, feel free to reach out to me.{" "}
          <a
            href="https://www.facebook.com/ahnafrafi30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            Contact me on Facebook.
          </a>
        </p>
        <p className="text-xs mt-4">
          &copy; 2025 Ahnaf Rafi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
