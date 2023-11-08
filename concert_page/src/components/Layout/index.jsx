import ballom from '../../assets/concert_ballon.png'
import color from '../../assets/concert_color.jpeg'
import instrument from '../../assets/concert_instrument.jpeg'
import lights from '../../assets/concert_lights.jpeg'
import publics from '../../assets/concert_public.jpeg'
import { Carousel } from "@material-tailwind/react";
const Layout = () => {
    return (
        <Carousel className="rounded-xl">
      
            <img src={ballom} alt="image 1" className="w-full h-full object-cover" />
      
          
            <img src={color} alt="image 2" className="w-full h-full object-cover" />
      
          
            <img src={instrument} alt="image 3" className="w-full h-full object-cover" />
      
          
            <img src={lights} alt="image 4" className="w-full h-full object-cover" />
      
          
            <img src={publics} alt="image 5" className="w-full h-full object-cover" />
            
        </Carousel>
  )
}

export default Layout
