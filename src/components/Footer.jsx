const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-semibold">DRCC DIANA</span>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
