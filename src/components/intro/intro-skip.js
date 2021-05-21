import KeyboardEventHandler from 'react-keyboard-event-handler';
import enterKey from '../../assets/images/enterKey.svg';

// function selectLeft(){
//   console.log('left pressed');
// }

// function selectRight(){
//   console.log('right pressed');
// }

function IntroSkip() {
  return (
    <div>
      <KeyboardEventHandler
        handleKeys={['enter', 'left', 'right']}
        onKeyEvent={(key, e) => {
          switch(key){
            case 'enter':
              window.location.href= "/about"
              break;

            // case 'left':
            //   selectLeft();
            //   break;

            // case 'right':
            //   selectRight();
            //   break;

            default:
  
          }
        }} 
      />
      <img src={enterKey} alt="EnterKey" className="enterKey" onClick={() => window.location.href= "/about"}/>
    </div>
  );
}

export default IntroSkip;