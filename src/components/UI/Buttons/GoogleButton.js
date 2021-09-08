import Google from 'icons/google.svg';
import classes from './Buttons.module.css';

const GoogleButton = ({onClick, children})=> {
  return (
    <>
      <div role="button" onClick={onClick} className={classes.GoogleButton}>
        <img src={Google} alt='Google Logo' />
        {children}
      </div>
    </>
  )
}

export default GoogleButton;