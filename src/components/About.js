import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const cards = [
  {
    title: "Pol Morado",
    text: "CEO",
    imageUrl: "/ceo-pol.png",
    linkedin: "https://www.linkedin.com/in/pol-morado-a2975022b/",
    youtube: "https://www.youtube.com/@polmoradoparis",
    instagram: "https://www.instagram.com/poladucion/",
  },
];

const About = () => (
  <div className="bg-white flex flex-col justify-center py-9 items-center">
    <h3 className="about-subtitle">Founder</h3>
    <div className="w-full max-w-6xl services">
      <div className="cards-services">
        {cards.map((card, index) => (
          <div key={index} className="about-card">
            <div
              className="about-image"
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            >
              <div className="about-card-text p-6 ">
                <h2 className="text-white text-3xl font-bold mb-2">
                  {card.title}
                </h2>
                <p className="text-white">{card.text}</p>
                <a
                  href={card.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white p-4"
                >
                  <AiFillInstagram size={30} />
                </a>
                <a
                  href={card.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white p-4"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href={card.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white p-4"
                >
                  <AiFillYoutube size={30} />
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
