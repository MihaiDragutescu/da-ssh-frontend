import './HomeBanner.scss';
import Button from '@Components-ui/Button';
const image = require ('../../assets/test.png');

const HomeBanner = () => {

  const handleClick = () => {
    console.log('Button clicked!');
  }

  return (
    <>
    <Button className='buttonClass1 buttonClass2' onClick = {handleClick}>Hello!</Button>
    <h1 className = 'htest'>Home Banner</h1>
    <img src = {image} alt = ""/>
    </>
  );
}

export default HomeBanner;