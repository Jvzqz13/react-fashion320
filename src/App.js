import './App.css';
import ArticleList from './components/ArticleList';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import { Container } from './styles/styled';

function App() {
  return (
    <div className="fashion-app">
      <Container> 

      <Header />
      <Nav />
      <ArticleList />
      <Footer />
      <Copyright />
   
      </Container>
    </div>
  );
}

export default App;
