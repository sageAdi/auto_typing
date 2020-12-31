const text =
   'npx create-react-app Portfolio <br> cd Portfolio <br> npm start <br> Starting the development server... <br> Compiled successfully!';

function autoTyping() {
   let index = 0;
   let autoType = document.querySelector('.auto-typing');
   const newLine = '<br>';
   typing();
   function typing() {
      if (index > text.length - 1) {
         return;
      } else {
         let character = text.charAt(index);
         if (
            character === '<' &&
            text.substring(index, index + 4) === newLine
         ) {
            autoType.innerHTML += newLine + '$&nbsp';
            setTimeout(typing, 200);
            index += 4;
         } else {
            autoType.innerHTML += character;
            setTimeout(typing, 100);
            index++;
         }
      }
   }
}
autoTyping();
