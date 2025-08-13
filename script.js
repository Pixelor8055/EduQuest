// ---------- USER SETTINGS ----------
const OPENAI_API_KEY = "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"; // Paste your OpenAI API key here

// ---------- CHATBOT ----------
document.getElementById('chatbot')?.addEventListener('click', async () => {
  const userMsg = prompt('Chatbot: Ask me anything!');
  if (!userMsg) return;
  
  if (!OPENAI_API_KEY) {
    alert("Paste your OpenAI API key in script.js to use the chatbot!");
    return;
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Bearer ' + OPENAI_API_KEY
    },
    body: JSON.stringify({
      model:'gpt-3.5-turbo',
      messages:[{role:'user', content:userMsg}]
    })
  });
  const data = await response.json();
  const reply = data.choices[0].message.content;
  alert("Chatbot: " + reply);
});

// ---------- TIMER ----------
document.getElementById('timer')?.addEventListener('click', () => {
  const mins = parseInt(prompt('Enter timer in minutes:'));
  if (!mins || mins <= 0) return alert('Invalid time!');
  
  let seconds = mins * 60;
  const interval = setInterval(() => {
    seconds--;
    if(seconds <=0){
      clearInterval(interval);
      alert('⏰ Timer finished!');
    }
  }, 1000);
  alert(`Timer started for ${mins} minute(s)!`);
});

// ---------- EXAM REMINDERS ----------
document.getElementById('reminders')?.addEventListener('click', () => {
  const exam = prompt('Enter exam name:');
  const time = prompt('Enter time for reminder (HH:MM 24hr):');
  if(!exam || !time) return;

  let reminders = JSON.parse(localStorage.getItem('eduReminders')||'[]');
  reminders.push({exam,time});
  localStorage.setItem('eduReminders', JSON.stringify(reminders));
  alert(`Reminder set for ${exam} at ${time}`);
});

// ---------- AI ROBOTIC SOLUTIONS ----------
document.getElementById('ai')?.addEventListener('click', async () => {
  const question = prompt('Enter your problem/question:');
  if (!question) return;

  if (!OPENAI_API_KEY) {
    alert("Paste your OpenAI API key in script.js to use AI solutions!");
    return;
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Bearer ' + OPENAI_API_KEY
    },
    body: JSON.stringify({
      model:'gpt-3.5-turbo',
      messages:[{role:'user', content:question}]
    })
  });
  const data = await response.json();
  const reply = data.choices[0].message.content;
  alert("AI Solution: " + reply);
});

// ---------- HOMEWORK HELPER ----------
document.getElementById('homework')?.addEventListener('click', async () => {
  const topic = prompt('Enter homework topic:');
  if (!topic) return;

  if (!OPENAI_API_KEY) {
    alert("Paste your OpenAI API key in script.js to use Homework Helper!");
    return;
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      'Authorization':'Bearer ' + OPENAI_API_KEY
    },
    body: JSON.stringify({
      model:'gpt-3.5-turbo',
      messages:[{role:'user', content:`Give me homework tips for ${topic}`}]
    })
  });
  const data = await response.json();
  const reply = data.choices[0].message.content;
  alert("Homework Helper: " + reply);
});

// ---------- GAMES & SONGS ----------
document.getElementById('games')?.addEventListener('click', () => {
  const choice = prompt("Enter 1 for Game (Tic-Tac-Toe demo) or 2 for Songs:");
  if(choice==='1'){
    alert("Game: Open the Tic-Tac-Toe game page (implement in next version).");
  } else if(choice==='2'){
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.play();
    alert("Playing pleasant song...");
  }
});

// ---------- ALARM ----------
document.getElementById('alarm')?.addEventListener('click', () => {
  const mins = parseInt(prompt('Set alarm in minutes:'));
  if(!mins || mins<=0) return alert('Invalid input!');
  alert(`Alarm set for ${mins} minute(s).`);
  setTimeout(()=>{
    const alarmAudio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    alarmAudio.play();
    alert('⏰ Alarm ringing!');
  }, mins*60000);
});
