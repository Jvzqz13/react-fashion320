import './App.css';
import Article from './components/Article';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="fashion-app">
      <Header />
      <Nav />
      <Article />
      <Footer />
      <Copyright />
   
    </div>
  );
}

export default App;
