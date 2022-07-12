import './Portfolio.css';
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "Figma dashbord UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-Dashboard-UI-kit-for-data-design-web-apps"
    },
    {
        id: 2,
        image: IMG2,
        title: "Figma dashbord UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-Dashboard-UI-kit-for-data-design-web-apps"
    },
    {
        id: 3,
        image: IMG3,
        title: "Figma dashbord UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-Dashboard-UI-kit-for-data-design-web-apps"
    },
    {
        id: 4,
        image: IMG4,
        title: "Figma dashbord UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-Dashboard-UI-kit-for-data-design-web-apps"
    },
    {
        id: 5,
        image: IMG5,
        title: "Figma dashbord UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-Dashboard-UI-kit-for-data-design-web-apps"
    },
    {
        id: 6,
        image: IMG6,
        title: "Figma dashbord UI kit for data design web apps",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-Dashboard-UI-kit-for-data-design-web-apps"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map((portfolio) => (
                        <article className="portfolio__item" key={portfolio.id}>
                            <div className="portfolio__item-image">
                                <img src={portfolio.image} alt={`portfolio${portfolio.id}`} />
                            </div>
                            <h3>{portfolio.title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={portfolio.github} className="btn" target="_blank">Github</a>
                                <a href={portfolio.demo} className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}

export default Portfolio;