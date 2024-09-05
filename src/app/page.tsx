import Hero from './components/Hero';
import Carousel from "./components/Carousel";
import slidesData from "../app/dummy_data/slides.json"
import CardGrid from './components/Cards';

export default function Home() {
  return (
    <main className='relative w-full h-auto md:h-screen '>
    <div className='overflow-hidden'>
    <Hero />
    </div>
    <Carousel slides={slidesData}/>
    <CardGrid />
    </main>
  )
}
