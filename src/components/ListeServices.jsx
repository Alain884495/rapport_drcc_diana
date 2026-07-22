const services = [
  {
    id: 1,
    title: "Service Commerce",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    description: "Gestion des activités commerciales et régulation du marché.",
    responsable: "Mme ZARASOA Marie Thérèse",
    phone: "+261 32 87 402 77",
  },
  {
    id: 2,
    title: "Service Métrologie",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    description:
      "Contrôle des instruments de mesure et vérification des balances.",
    responsable: "",
    phone: "+261 32 XX XXX XX",
  },
  {
    id: 3,
    title: "Service Conditionnement",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=300&fit=crop",
    description:
      "Vérification des emballages et contrôle qualité des produits.",
    responsable: "",
    phone: "+261 33 XX XXX XX",
  },
  {
    id: 4,
    title: "Tableau de Bord",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    description: "Statistiques, rapports et indicateurs de performance.",
    responsable: "",
    phone: "+261 32 XX XXX XX",
  },
];

const ListeServices = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white/60 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Image du service */}
            <div className="h-40 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Info + Contact + Lien */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-black mb-3 line-clamp-2">
                {service.description}
              </p>
              <div className="text-sm text-gray-700 mb-3">
                <p className="font-semibold">{service.responsable}</p>
                <p className="text-blue-600">{service.phone}</p>
              </div>

              {/* Lien avec flèche */}
              <a
                href={`/service/${service.id}`}
                className="mt-auto flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
              >
                <span>Voir plus</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeServices;
