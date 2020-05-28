document.querySelector('.at-home').addEventListener('mouseover', e => {
  anime
    .timeline({
      targets: '.home-arrow',
      translateX: -40,
      duration: 300,
      easing: 'easeInOutExpo'
    })
    .add({ targets: '.home-arrow', color: '#fd5e1c' }, 0);
});

document.querySelector('.at-home').addEventListener('mouseout', e => {
  anime
    .timeline({
      targets: '.home-arrow',
      translateX: 0,
      duration: 300,
      easing: 'easeInOutExpo'
    })
    .add({ targets: '.home-arrow', color: '#58966b' }, 0);
});

document.getElementById('avatar').addEventListener('mouseover', () => {
  anime({
    targets: '#avatar',
    scale: 1.2,
    duration: 1000
  });
});

document.getElementById('avatar').addEventListener('mouseleave', () => {
  anime({
    targets: '#avatar',
    scale: 1,
    duration: 1000
  });
});

document.querySelector('.insta').addEventListener('mouseover', () => {
  anime
    .timeline({
      targets: '.fmo',
      scale: 1.1,
      duration: 1200
    })
    .add({ targets: '.fmo', color: '#58966b' }, 0);
});

document.querySelector('.insta').addEventListener('mouseout', () => {
  anime
    .timeline({
      targets: '.fmo',
      scale: 1,
      duration: 1200
    })
    .add({ targets: '.fmo', color: '#FFF' }, 0);
});

document.querySelector('.git-hub').addEventListener('mouseover', () => {
  anime
    .timeline({
      targets: '.fmo',
      scale: 1.1,
      duration: 1200
    })
    .add({ targets: '.fmo', color: '#58966b' }, 0);
});

document.querySelector('.git-hub').addEventListener('mouseout', () => {
  anime
    .timeline({
      targets: '.fmo',
      scale: 1,
      duration: 1200
    })
    .add({ targets: '.fmo', color: '#FFF' }, 0);
});

document.querySelector('.facebook').addEventListener('mouseover', () => {
  anime
    .timeline({
      targets: '.fmo',
      scale: 1.1,
      duration: 1200
    })
    .add({ targets: '.fmo', color: '#58966b' }, 0);
});
document.querySelector('.facebook').addEventListener('mouseout', () => {
  anime
    .timeline({
      targets: '.fmo',
      scale: 1,
      duration: 1200
    })
    .add({ targets: '.fmo', color: '#FFF' }, 0);
});
