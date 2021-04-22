import './App.scss';

import Routes from "./routes/Routes";

import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
