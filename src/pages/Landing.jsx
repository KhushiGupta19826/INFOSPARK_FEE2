import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';
import ParticlesBg from '../components/ParticlesBg';

function Landing() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="landing-container">
      <ParticlesBg />
      <div className="landing-content">
        <h1 className="landing-heading">InfoSpark</h1>
        <p className="landing-tagline">News & Weather. Anytime. Anywhere.</p>
        <div className="landing-buttons">
          <button className="landing-button" onClick={handleSignIn}>
            Sign In
          </button>
          <button className="landing-button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
