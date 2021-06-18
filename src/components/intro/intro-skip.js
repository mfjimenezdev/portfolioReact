import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import enterKey from '../../assets/images/intro/enterKey.svg';

function IntroSkip() {
  // function selectLeft(){
  //   console.log('left pressed');
  // }

  // function selectRight(){
  //   console.log('right pressed');
  // }

  return (
    <div>
      <KeyboardEventHandler
        handleKeys={['enter', 'left', 'right']}
        onKeyEvent={(key) => {
          switch (key) {
            case 'enter':
              window.location.href = '/about';
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
      <input type="image" src={enterKey} alt="EnterKey" className="enterKey" onClick={() => { window.location.href = '/about'; }} />
    </div>
  );
}

export default IntroSkip;
