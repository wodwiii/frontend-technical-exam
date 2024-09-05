const Footer = () => {
    return (
      <footer className="absolute bottom-0 left-0 p-8 md:p-16 text-white/60 z-50">
        <div className="container mx-auto flex justify-between gap-4 md:gap-8">
          <div className="relative">
            <p
              className="text-xs md:text-md text-white"
              style={{ fontFamily: "var(--font-avenir-bold)" }}
            >
              Overview
            </p>
            {/* Underline */}
            <span className="absolute left-0 bottom-0 w-full h-1 bg-secondary transform translate-y-1"></span>
          </div>
          <div>
            <p className="text-xs md:text-md">Episodes</p>
          </div>
          <div>
            <p className="text-xs md:text-md">Details</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  