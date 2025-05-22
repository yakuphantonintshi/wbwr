import './App.css';
import PictureOne from './components/picture1';
import NavBar from './components/NavBar';
import AnotherOne from './components/AnotherOne';
import GridPage from './components/GridPage';
import VideoOverlay from './components/VideoOverlay';
import TextOverlay from './components/TextOverlay';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <NavBar />
    <VideoOverlay/>
      <PictureOne />
      <TextOverlay/>
      <AnotherOne />
      <GridPage/>
      <Footer/>
    </>
  )
}

export default App
