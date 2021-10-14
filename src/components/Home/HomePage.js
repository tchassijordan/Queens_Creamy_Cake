import '../../App.css';
import Carousel from './Carousel'
import MainHomeContent from './MainHomeContent'
import InstagramGallery from './InstagramGallery'

function HomePage() {
  
  return (
    <main>
      <div>
        <Carousel />
        <MainHomeContent />
        <InstagramGallery />
      </div>
    </main>
  );
}

export default HomePage;
