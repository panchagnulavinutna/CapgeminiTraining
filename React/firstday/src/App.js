import Temp from './components/Temp.js';
import Banner from './components/Banner.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Body from './components/Body.js';
import InterestCalculator from './components/InterestCalculator.js';

function App() {
  return (
        <>
          <Header/>
          <Body/>
          {/* <Temp/> 
          <Banner name=""/> */}
          <InterestCalculator />    
          <Footer/>
        </>
  );
}

export default App;
