import "./Logotype.scss";
import { Link } from 'react-router-dom';
import Logo from './logotype.svg';

export default function Logotype( {navOpen, setNavOpen} ) {

  const handleClick = () => {
    if(navOpen){
      setNavOpen(!navOpen);
    }
  };

  return (
    <div className="logotype-container">
        {/* <h1><Link to="/" onClick={handleClick}>ah</Link></h1> */}
        <Link to="/" onClick={handleClick}>
          <img src={Logo} alt="Logo" width="40px"/>
        </Link>
    </div>
  )
}