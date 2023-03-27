import "../../css/home/portfolio-section.css";
import Portfolio1 from "../../images/portfolio-project.jpg";

const PortfolioCard = () => {
    return (
        <div className="portfolio-card">
            <div className="img-container">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={Portfolio1} alt="portfolio website" />
                </a>
            </div>
            <div className="buttons">
                <div className="btn-primary">
                    <a href="http://" target="_blank" rel="noopener noreferrer">Live View</a>
                </div>
                <div className="btn-secondary">
                    <a href="http://" target="_blank" rel="noopener noreferrer">Details</a>
                </div>
            </div>
        </div>
    );
}

const PortfolioSection = () => {
    return (
        <div className="portfolio-section">
            <div className="container">
                <div className="top-section">
                    <h2 className="section-title">My Portfolio</h2>
                    {/*                     <ul>
                        <li></li>
                    </ul> */}
                </div>
                <div className="portfolio-container">
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                    <PortfolioCard />
                </div>
            </div>
        </div>
    );
}

export default PortfolioSection; 