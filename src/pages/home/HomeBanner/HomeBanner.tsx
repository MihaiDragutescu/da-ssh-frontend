import Button from '@Components/ui/Button';
import image from '@Assets/images/home-banner-img.png';
import { ReactComponent as Icon } from '@Assets/images/button-icon.svg';
import { RouterPaths } from '@Types/routerPaths';
import { useNavigate } from 'react-router-dom';
import './HomeBanner.scss';

const HomeBanner: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(RouterPaths.SHOP);
  };

  return (
    <section className='home-banner'>
      <div className='home-banner__container ssh-container'>
        <div className='home-banner__row ssh-row'>
          <div className='home-banner__col home-banner__col--left'>
            <h1 className='home-banner__title'>
              It’s time to express yourself
            </h1>
            <h3 className='home-banner__subtitle'>
              Find your new favourite piece here
            </h3>
            <Button className='home-banner__button' onClick={handleClick}>
              <div className='home-banner__button-content'>
                <span>BEGIN YOUR JOURNEY</span>
                <Icon />
              </div>
            </Button>
          </div>
          <div className='home-banner__col home-banner__col--right'>
            <img src={image} alt='home-banner-img' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
