import './CardDescription.css' 
import Button from './Button';

function CardDescription(props){
    return<div className='card_desc_cover'><p className='card_desc_p'>Complex geometric shapes</p>
        <h3 className='card_desc_h3'>{props.title}</h3>
        <p className='card_desc_p'>{props.about}</p>
        <Button/><a href="" className='card_desc_link'>Link</a>
    </div>;
}
export default CardDescription;