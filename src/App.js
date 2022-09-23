import './App.css';
import Routes from './client/components/Routes';
import Nav from './client/components/Nav/index';
import Footer from './client/components/Footer/index';

function App() {
  return (
    <main>
      <Nav />
      <Routes />
      <Footer />
    </main>
  );
}

export default App;
