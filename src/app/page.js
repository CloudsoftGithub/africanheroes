
import About from "./components/About";
import Carousel from "./components/Carousel";
import ComingEvent from "./components/ComingEvent";

import PassEvent from "./components/Gallary";


import Purpose from "./components/Purpose";
import Committee from "./components/Committee";
import Speaker from "./components/Speaker";

export default function page() {
  return (
    <>
      
      <Carousel/>
      <About/>
      <Purpose/>
      <Committee/>
      <Speaker/>
      <PassEvent/>
      <ComingEvent/>
      
    </>
  )
}
