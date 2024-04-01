let hr = (min = sec = ms = "0" + 0),
  startTimer;

const startBtn = document.querySelector(".start"),
  stopBtn = document.querySelector(".stop"),
  resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start() {
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");

  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }
    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }
    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }

    putValue();
  }, 10); //1000ms = 1s
}

function stop() {
  startBtn.classList.remove("active");
  stopBtn.classList.add("stopActive");
  clearInterval(startTimer);
}
function reset() {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTimer);
  hr = min = sec = ms = "0" + 0;
  putValue();
}

function putValue() {
  document.querySelector(".millisecond").innerText = ms;
  document.querySelector(".second").innerText = sec;
  document.querySelector(".minute").innerText = min;
  document.querySelector(".hour").innerText = hr;
}






// <!-- --------------------------------------------------------------------------------------------------------------------------------------------
//   Copyright © 2024 by Anuz Yadav

//  All rights reserved. 

//  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
//  files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, 
//  merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished 
//  to do so, subject to the following conditions:

//  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
//  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF 
//  OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

//  For inquiries, please contact: darkcipher26jan2024@gmail.com

//  GitHub: https://github.com/dark_cipher-26jan 
// ----------------------------------------------------------------------------------------------------------------------------------------------->