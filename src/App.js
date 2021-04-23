import './App.scss';

import Routes from "./routes/Routes";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
