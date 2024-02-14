import { useState } from 'react'
import './App.css'

const phrases = [
  "Нет 🙉",
  "Ты уверена?",
  "Точно уверена?😢",
  "Я уже всем сказал, что ты согласилась😕",
  "Блин, кольца не принимают назад😭",
  "Я что зря брал кредит?😤",
  "Мы всегда можем развестись",
  "Я уже госпошлину даже оплатил😭",
  "Ты разбиваешь мне сердце😭💔",
  "Верни хотя бы госпошлину",
  "Хотя бы свою половину😭"
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  
  function handleYesClick() {
    setYesPressed(true)
  }
  function handleNoClick() {
    setNoCount(noCount+1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          <img src="https://c.tenor.com/VPNyJYk-X8QAAAAd/tenor.gif" alt="bear-Kissing" />
          <div className='text'>Ураааа, мы заработаем на подарках и я оплачу кредит!!!</div>
        </>
      ) : (
        <>
          <img className='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
          <div className='text'>Ты выйдешь за меня? 💍?</div>
          <div className='both-Button'>
            <button className='yesButton'
            style={{ fontSize: yesButtonSize , backgroundColor:'rgb(248, 229, 89)'}}
              onClick={handleYesClick}
            >
              Да 🙈
            </button>
            <button
              className='NoButton'
              style={{ }}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
