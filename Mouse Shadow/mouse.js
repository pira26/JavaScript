const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const move = 500;

const shadow = (e) => {

  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;

  //console.log(this, e.target);

  if(this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }
  // console.log(x, y);

  const xMove = Math.round((x / width * move) - (move / 2));
  const yMove = Math.round((y / height * move) - (move / 2));

  console.log(xMove, yMove);

  text.style.textShadow = `${xMove}px ${yMove}px 0 rgba(241, 218, 33, 0.7),
      ${xMove * -1}px ${yMove}px 0 rgba(215, 3, 3, 0.7),
      ${yMove}px ${xMove * -1}px 0 rgba(14, 143, 161, 0.7),
      ${yMove * -1}px ${xMove}px 0 rgba(161, 22, 90, 0.7)`;
}

hero.addEventListener('mousemove', shadow);
