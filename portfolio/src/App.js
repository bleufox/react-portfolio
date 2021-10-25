import { React, useState } from 'react';
import './App.css';
import AboutMe from './page/AboutMe'
import Projects from './page/Projects'
import Contact from './page/Contact'
import NavBar from './components/NavBar'

function App() {
  const [currentPage, setCurrentPage] = useState('Homepage');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />; 
        case 'Projects':
        return <Projects />; 
        case 'Contact':
        return <Contact />; 
      default:
        return <AboutMe />
    }
  }
  return (
    <div className="App">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;