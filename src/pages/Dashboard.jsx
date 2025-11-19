import { useNavigate } from 'react-router-dom';
import { WiDaySunny } from 'react-icons/wi';
import ParticlesBg from '../components/ParticlesBg';


import { FaNewspaper } from 'react-icons/fa';
import '../styles/Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleWeatherClick = () => {
    navigate('/weather');
  };

  const handleNewsClick = () => {
    navigate('/news');
  };

  return (
    <div className="dashboard-container">
            <ParticlesBg />
      
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card" onClick={handleWeatherClick}>
          <WiDaySunny className="card-icon" />
          <h2>Weather</h2>
          <p>Check weather forecasts</p>
        </div>
        <div className="dashboard-card" onClick={handleNewsClick}>
          <FaNewspaper className="card-icon" />
          <h2>News</h2>
          <p>Browse latest news</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
