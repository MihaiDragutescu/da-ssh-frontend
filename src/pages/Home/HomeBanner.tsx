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
      <div className='home-banner__container ssh-container'>
        <div className='home-banner__row ssh-row'>
          <div className='home-banner__col home-banner__col--left'>
            <h1 className='home-banner__title'>It’s time to express yourself</h1>
            <h3 className='home-banner__subtitle'>Find your new favourite piece here</h3>
            <Button className='home-banner__button' onClick = {handleClick}>
              <div className='home-banner__button-content'>
                <span>BEGIN YOUR JOURNEY</span>
                <ButtonIcon/>
              </div>
            </Button>
          </div>
          <div className='home-banner__col home-banner__col--right'>
            <img src = {image} alt = ""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;