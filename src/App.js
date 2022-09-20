import './App.css';
import Routes from './client/components/Routes';
import Nav from './client/components/Nav/index';
import Footer from './client/components/Footer/index';

function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <div className="content">
          <Routes />
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
