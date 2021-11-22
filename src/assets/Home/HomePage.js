import '../../App.css';
import Carousel from './Carousel/Carousel'
import MainHomeContent from './MainHomeContent/MainHomeContent'
import InstagramGallery from './InstagramGallery/InstagramGallery'

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
