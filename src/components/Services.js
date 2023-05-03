const cards = [
  {
    title: "Aumenta tu facturación anual",
    text: "Nuestro principal objetivo es conseguir aumentar tu facturación. \n Toda la estrategia de marketing está diseñada para que consigas vender más propiedades de una forma eficaz y probada",
    imageUrl: "/news.png",
  },
  {
    title: "Clientes Recién salidos del horno",
    text: "Obtendrás personas que aún no han puesto a la venta su propiedad en portales inmobiliarios.\n Serás la primera persona en presentarle los servicios y conseguirás aumentar tu ratio de exclusividad.",
    imageUrl: "/houses.png",
  },
  {
    title: "0 Llamadas en frío",
    text: "Deja de hacer llamadas a gente que está harta de que le suene el teléfono.\n Dispondrás de vendedores y compradores interesados en hablar contigo. \n Nosotros nos encargaremos de posicionarte como una autoridad en el sector a parte de darte toda la información necesaria de la cita.",
    imageUrl: "/calls.png",
  },
  {
    title: "Exclusividad absoluta",
    text: "No trabajamos la misma zona con diferentes agentes, una vez entres a trabajar con nosotros dispondrás de la zona que limites únicamente para ti.\n Queremos proporcionarte la mejor calidad y cantidad para que siempre consigamos los objetivos propuestos.",
    imageUrl: "/deal.png",
  },
];

const Services = () => (
  <div className="bg-white flex flex-col justify-center py-9 items-center">
    <h3 className="services-subtitle">Nuestros Servicios</h3>
    <h2 className="services-title">Haz crecer tu negocio</h2>
    <div className="w-full max-w-6xl services">
      <div className="cards-services">
        {cards.map((card, index) => (
          <div
            key={index}
            className="services-card text-white"
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          >
            <div className="card-text p-6">
              <h2 className="text-xl font-bold mb-2 sm:text-left text-center">{card.title}</h2>
              <br/>
              <p className="sm:text-lg  text-sm text-center" style={{ whiteSpace: "pre-line" }}>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
