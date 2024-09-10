
let time = { hr: 0, min: 0, sec: 0, milli: 0 };
let interval = null;


const startStopwatch = () => {
  if (!interval) {
    interval = setInterval(updateTime, 16.67); 
  }
};


const stopStopwatch = () => {
  clearInterval(interval);
  interval = null;
};


const resetStopwatch = () => {
  clearInterval(interval);
  interval = null;
  time = { hr: 0, min: 0, sec: 0, milli: 0 }; 
  updateDisplay(); 
};


const updateTime = () => {
  time.milli += 1; 

  if (time.milli === 60) { 
    time.milli = 0;
    time.sec += 1;
  }
  if (time.sec === 60) { 
    time.sec = 0;
    time.min += 1; 
  }
  if (time.min === 60) { 
    time.min = 0;
    time.hr += 1; 
  }

  updateDisplay(); 
};


const updateDisplay = () => {
  const hr = time.hr.toString().padStart(2, '0'); 
  const min = time.min.toString().padStart(2, '0'); 
  const sec = time.sec.toString().padStart(2, '0'); 
  const milli = time.milli.toString().padStart(2, '0'); 

  document.getElementById('display').textContent = `${hr}:${min}:${sec}:${milli}`;
};

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
