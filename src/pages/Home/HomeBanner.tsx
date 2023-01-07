import Button from '@Components-ui/Button';
import image from '@Images/home-banner-img.png';
import { ReactComponent as ButtonIcon } from '@Images/button-icon.svg';
import './HomeBanner.scss';

const HomeBanner = () => {

  const handleClick = () => {
    console.log('Button clicked!');
  }

  return (
    <div className='home-banner'>
    <Button className='home-banner__button' onClick = {handleClick}>
      BEGIN YOUR JOURNEY
      <ButtonIcon/>
    </Button>
    <img src = {image} alt = ""/>
    </div>
  );
}

export default HomeBanner;