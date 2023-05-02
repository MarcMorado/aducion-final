import { FaLinkedin } from "react-icons/fa";

const cards = [
    {
      title: "Pol Morado",
      text: "CEO",
      imageUrl: "/ceo-pol.png",
      linkedin: "https://www.linkedin.com/in/pol-morado-a2975022b/"
    },
    {
      title: "Victor Merino",
      text: "CEO",
      imageUrl: "/ceo-victor.png",
      linkedin: "https://www.linkedin.com/in/victor-merino-b25193262/"
    }
  ];
  
  const About = () => (
    <div className="bg-black flex flex-col justify-center py-9 items-center">
      <h3 className="about-subtitle">Conoce al equipo</h3>
      <h2 className="about-title">Te hacemos crecer</h2>
      <div className="w-full max-w-6xl services">
        <div className="cards-services">
          {cards.map((card, index) => (
            <div key={index} className="about-card">
              <div className="about-image" style={{ backgroundImage: `url(${card.imageUrl})` }}>
                <div className="about-card-text p-6 ">
                  <h2 className="text-white text-3xl font-bold mb-2">{card.title}</h2>
                  <p>{card.text}</p>
                  <a href={card.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white p-4">
                    <FaLinkedin size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  export default About;
