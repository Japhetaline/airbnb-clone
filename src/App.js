import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Card from './component/Card';
import Img1 from './images/katie.png';
import Img2 from './images/wedding-photography 1.png';
import Img3 from './images/image5.jfif';
import Star from './images/Star.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        <Card
          image={Img1}
          star={Star}
          rating="5.0"
          reviewCount="(6) •"
          country="USA"
          title="Life Lessons with katie zafera"
          amount="From $136"
          openSpots={0}
        />

        <Card
          image={Img2}
          star={Star}
          rating="5.0"
          reviewCount="(30) •"
          country="ARAB"
          title="Learn wedding photography"
          amount="From $125"
          openSpots={27}
        />

        <Card
          image={Img3}
          star={Star}
          rating="4.8"
          reviewCount="(2) •"
          country="TURKEY"
          title="Group mountain bike"
          amount="From $50"
          openSpots={3}
        />
      </section>
    </div>
  );
}

export default App;
