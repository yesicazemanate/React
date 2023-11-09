
import color from '../../assets/concert_color.jpeg';
import instrument from '../../assets/concert_instrument.jpeg';
import lights from '../../assets/concert_lights.jpeg';
import publics from '../../assets/concert_public.jpeg';
import ballom from '../../assets/concert_ballon.png';

function Carousel() {
    return (
        <div >
            
                <img src={color} />
            
                <img src={instrument}/>
            
                <img src={lights}  />
            
                <img src={publics} />
        
                <img src={ballom}  />
        </div>
    );
}
export default Carousel