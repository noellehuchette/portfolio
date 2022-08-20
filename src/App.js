import './App.css';
import Routes from './client/components/Routes';
import Nav from './client/components/Nav/index';
import Footer from './client/components/Footer/index';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
