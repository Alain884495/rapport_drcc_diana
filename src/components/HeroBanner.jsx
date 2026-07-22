import heroImage from "../assets/imageHero.jpg";
import ListeServices from "./ListeServices";

const HeroBanner = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[680px]">
      <img
        src={heroImage}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full h-full flex flex-col items-center py-12 px-6 md:py-16 md:px-12">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Title */}
          <div className="md:w-5/5 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide leading-tight drop-shadow-lg">
              Direction Régionale du Commerce et de la Consommation Diana
            </h1>
          </div>

          {/* Right side - Contacts */}
          <div className="md:w-3/5 w-full flex justify-center md:justify-end">
            <div className="bg-white/95 backdrop-blur-md px-5 py-8 rounded-xl shadow-xl w-full max-w-xs hover:shadow-2xl">
              <h2 className="text-lg font-semibold text-blue-600 uppercase tracking-widest text-center mb-4">
                Les Contacts
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Rue du Colbert, Place Foche, Antsiranana</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>drcc.diana@gov.mg</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+261 32 87 402 77 / +261 34 17 920 06</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Lun - Ven: 8h00 - 16h00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services en dessous */}
        <ListeServices />
      </div>
    </section>
  );
};

export default HeroBanner;
