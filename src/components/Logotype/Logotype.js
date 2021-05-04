import "./Logotype.scss";
import { Link } from 'react-router-dom';

export default function Logotype( {navOpen, setNavOpen} ) {

  const handleClick = () => {
      setNavOpen(!navOpen);
    };

  return (
    <div className="logotype-container">
        <h1><Link to="/" onClick={handleClick}>ah</Link></h1>
    </div>
  )
}