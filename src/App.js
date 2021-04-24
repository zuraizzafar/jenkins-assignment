
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/navbar/navbar'; 
import Header from './component/header/header';
import Slider from './component/slider/slider';
import Service from './component/services/service';
import Section from  './component/section/section';
import Blog from "./component/blog/blog";
import Company from "./component/company/company";
import Footer from './component/footer/footer';

function App() {
  return (
    <div>

      <Navbar />
      <Header />
      <Slider />
      <Service />
      <div class='video video_327'>
<iframe allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' frameborder='0' height='621' src='https://www.youtube.com/embed/_MXtbjwsz3A' width='1261'></iframe>
</div>
      <Section />
      <Blog />
      <Company />
      <Footer />
    </div>
   
  );
}

export default App;
