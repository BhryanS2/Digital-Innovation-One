function getElements() {
  const dino = document.querySelector('.dino')
  const background = document.querySelector('.background')
  return { dino, background }
}

const Game = {
  init() {
    Game.ResetValues();
    Game.restart();
    const { dino, background } = getElements();
    Game.dino = dino;
    Game.background = background;
    Listeners.add();
    Game.createCactus();
  },

  dino: '',
  background: '',
  isJumping: false,
  isGameOver: false,
  position: 0,
  cactusJumped: 0,
  score: 0,
  canJump(key) {
    console.log(key)
    return (key === 32) && !Game.isJumping
  },

  handlekeyPress(event) {
    if (Game.canJump(event.keyCode)) Game.jump(8);
  },

  dinoDown(timeDown) {
    const downInterval = setInterval(() => {
      if (Game.position <= 0) {
        clearInterval(downInterval);
        Game.isJumping = false;
      } else {
        Game.position -= timeDown;
        Game.dino.style.bottom = Game.position + 'px';
      }
    }, 20);
  },

  dinoUp(up) {
    Game.position += up;
    Game.dino.style.bottom = Game.position + 'px';
  },

  jump(time) {
    Game.isJumping = true;

    const upInterval = setInterval(() => {
      if (Game.position >= 150) {
        clearInterval(upInterval);
        Game.dinoDown(time);
      } else {
        Game.dinoUp(time);
      }
    }, 20);
  },

  createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = window.innerWidth - 60;
    let randomTime = Math.random() * (6000 - Game.score * 100);

    if (Game.isGameOver) return;

    cactus.classList.add('cactus');
    Game.background.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';

    const moveCactus = setInterval(() => {
      if (cactusPosition < -60) {
        clearInterval(moveCactus);
        Game.background.removeChild(cactus);
        Game.cactusJumped += 0.5;
        Game.score++;
      } else if (cactusPosition > 0 && cactusPosition < 50 && Game.position < 50) {
        clearInterval(moveCactus);
        Game.isGameOver = true;
        Listeners.remove(Listeners.get());
        document.body.innerHTML = `
          <h1 class="game-over">Fim de jogo</h1>
          <h2 class="score">Pontuação: <strong>${Game.score}</strong></h2>
          <button class="restart" onclick="Game.init()">Recomeçar</button>
      `;
      } else {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
      }
    }, 40 - Game.cactusJumped);

    setTimeout(Game.createCactus, randomTime);
  },

  restart() {
    document.body.innerHTML = `
    <main>
      <div class="background">
        <div class="dino"></div>
      </div>
    </main>
  `
  },
  ResetValues() {
    Game.dino = '';
    Game.background = '';
    Game.isJumping = false;
    Game.isGameOver = false;
    Game.position = 0;
    Game.cactusJumped = 0;
    Game.score = 0;
  }
}

const Listeners = {
  get() {
    const keyPress = document.addEventListener('keypress', Game.handlekeyPress);
    return keyPress;
  },
  add() {
    const keyPress = Listeners.get();
    return keyPress;
  },
  remove(keyPress) {
    document.removeEventListener('keypress', keyPress);
  },
}