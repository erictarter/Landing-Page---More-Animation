document.getElementById('avatar').addEventListener('mouseover', () => {
  anime({
    targets: '#avatar',
    translateY: 20,
    duration: 1000
  });
});

document.getElementById('avatar').addEventListener('mouseleave', () => {
  anime({
    targets: '#avatar',
    translateY: 0,
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

document.querySelector('.bio-btn').addEventListener('mouseover', () => {
  anime
    .timeline({
      targets: '.showcase-body',
      scale: 1.1,
      duration: 1200
    })
    .add({ targets: '.showcase-body', color: '#58966b' }, 0);
});

document.querySelector('.bio-btn').addEventListener('mouseout', () => {
  anime
    .timeline({
      targets: '.showcase-body',
      scale: 1,
      duration: 1200
    })
    .add({ targets: '.showcase-body', color: '#FFF' }, 0);
});
