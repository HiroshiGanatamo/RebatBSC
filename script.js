
const messages = [
    {
      text: 'The floodgates are currently calm, only to open when the time is exactly correct.',
      timestamp: '5/23/23 00:33 UTC',
      txHash: '0x1451658fc27c7abb8258c418c005edd7d2938ff9313a7eb81231ed11afd308c9',
    },
    {
      text: 'If you are still here you passed the first test. Look closely at the contract, our deep RBE V3 liquidity is locked as long as there is continuous activity. Communication channels are being created to talk to the REBATE family being formed. You shouldnt want a full REFUND, just a well deserved perpetual REBATE for your efforts.',
      timestamp: ' 5/23/23 11:49 UTC',
      txHash: '0x50c2ad9223c7fef82a3a9dec732427acbd8cd0ce159a147a77033ac3ba84efbc',
    },
    {
      text: 'Watch carefully at this cascading event. The spring is being loaded.',
      timestamp: ' 5/25/23 02:26 UTC',
      txHash: '0x2f32139a9d663c928c350ffbd4e7be8a269c1abe804087015f8b642c38bb0554',
    },
    {
      text: 'Message Encrypted : We do not know what it means.',
      timestamp: ' 5/25/23 03:06 UTC',
      txHash: '0x6656c9fe7233aac8c2b47b0c6ea205f254319746a9a11d1e5bd74b7ee526872c',
    },
  
  
  
    // Add more messages as needed
  ];
  
  
    const asciiLogo = `
                                                                                
                             ..     . (@@@@@@@@@@@&.. %@@/                         
                           *@@% ,.&@@@@@@@@@@@@@@@@@@*                            
                           *@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  #@@/                   
                     *#####%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%##**//##(                
                   . /@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*  (@@%                
                      . /@@@@@@@@@@@@@@@@%((&@@@@@@@@@@@@@@@@@@@@%                
                   . /@@@@@@@@@@@@((/&@@%/(%@@&/((((/&@@@@@@@@(                   
                . #&&/. /@@@@@@@@@((/(###((&@@&(((/((##(&@@@@@&&&#                
                  (%%/,,(@@@@@@&&&///((((((&@@&(((///((/%&%@@@&#%/,,,             
                     /@@@@@@@@@(((/////*(((&@@&(((*/////,. %@@/ ..@@&.            
                ..%@@(. /@@@((((((.  ,,,/(((((%@@&.. ,**.  %@@@@@% .              
              .@@@@@@@@@@@@& .,#((/(/(((((((((((((/(/(((*  %@@@@@% .              
                     /@@@@@& .,(((((((((((((((((((((((((*  %@@@@@@&&%.            
                   . /@@@@@& .,(((((((((((((((((((((((((*  %@@&&&&&&%.            
                   . /@@@@@& .,(((((((((((((((((((((((((*  %@@(                   
                . %@@(.       ,(((((((((((((((((((((((((*    .(@@%                
                              ,(((((((((/        .((((((*                         
                              .,,*(((((((/////////(((*,,.                         
                                  (((((((((((((((((((,                            
                                  (((*  /#((((((((                                
                                  ((((((* .                                       
                                  (((((((((/                                      
                                  (((((((((/                                      
                                 .(((((((((/                                      
                                                                                  
                                                                      `;
  
  const consoleElement = document.getElementById('typing');
  
  function animateMessage(message, index) {
    const delay = 42; // Delay between each character (in milliseconds)
    const messageText = `[${message.timestamp}][${message.txHash}]: ${message.text}\n`;
    let currentChar = 0;
  
    function typeNextChar() {
      const char = messageText.charAt(currentChar);
      if (char === ' ') {
        consoleElement.innerHTML += '&nbsp;'; // Insert a non-breaking space
      } else {
        consoleElement.innerHTML += char;
      }
      currentChar++;
      if (currentChar < messageText.length) {
        setTimeout(typeNextChar, delay);
      } else {
        // Move to the next message after a delay
        setTimeout(() => {
          consoleElement.innerHTML += '<br>'; // Insert a line break
          printMessages(index + 1);
        }, 690); // Delay between messages (in milliseconds)
      }
    }
  
    typeNextChar();
  }
  
  function printMessages(startIndex = 0) {
    if (startIndex >= messages.length) {
      setTimeout(animateLogo, 0);
      return;
    }
  
    const message = messages[startIndex];
    animateMessage(message, startIndex);
  }
  
  function animateLogo() {
    const delay = 42; // Adjust this value to control the speed of the animation
    let currentLine = 0;
    const lines = asciiLogo.split('\n');
  
    function printNextLine() {
      consoleElement.innerHTML += lines[currentLine] + '<br>';
      currentLine++;
      if (currentLine < lines.length) {
        setTimeout(printNextLine, delay);
      }
    }
  
    printNextLine();
  }
  
  printMessages();
  