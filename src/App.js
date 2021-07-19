

import Blogs from './Component/Blogs-events/Blogs';
import Carosal from './Component/carosal/Carosal';
import Category from './Component/category/Category';
import Courses from './Component/courses/Courses';
import Footer from './Component/footer/Footer';
import Icons from './Component/icons/Icons';
import NavLinks from './Component/navigation/NavLinks';
import SrhBar from './Component/searchbar/SrhBar';
import './App.css';

function App() {
  return (
    <div className="app">
   <NavLinks/>
   <Carosal/>
   <Category/>
   <SrhBar/>
   <Courses/>
   <Icons/>
   <Blogs/>
   <Footer/>
    </div>
  );
}

export default App;
