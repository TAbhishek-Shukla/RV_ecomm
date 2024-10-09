import notfound from '../assets/notfound.jpg'
import { useNavigate } from 'react-router-dom';
import '../styles/notFound.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <img src={notfound} alt="404" className="not-found-image" />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={() => navigate(-1)} className="go-back-button">Go Back</button>
    </div>
  );
};

export default ErrorPage;
