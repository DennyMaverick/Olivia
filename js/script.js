window.addEventListener('DOMContentLoaded', function() {
    const mobileNavButton = document.querySelector('.mobile-nav-button');
    const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    mobileNavButton.addEventListener('click', function() {
      mobileNavIcon.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.classList.toggle('no-scroll');

     
    });

    mobileNavLinks.forEach(function(item) {
      item.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        document.body.classList.remove('no-scroll');
        mobileNavIcon.classList.remove('active');
      });
    });

    // При скролле менять свойства header

    const headerTop = document.querySelector('.header');
 
  headerTopChanging();

  window.addEventListener('scroll', function() {
    headerTopChanging();
  });

  function headerTopChanging() {
    const scrollSize = window.pageYOffset; //Высота скролла
    const pixels = 65;
    if (scrollSize > pixels) {
      headerTop.style.boxShadow = "2px 2px 10px #020202";
    } else {
      headerTop.style.boxShadow = "none";
    }
  }

  // =================== VIDEO ================
 const videoBtn = document.querySelector('#video-story__btn');
 const videoBtnIcon = document.querySelector('#video-story-btn-icon');
 const videoOverlay = document.querySelector('#video-overlay');
 const videoFile = document.querySelector('#video-story');

 function showHideOverlay(event) {
  if (event.type === 'mouseleave') {
    videoOverlay.classList.add('hidden');
  } else {
    videoOverlay.classList.remove('hidden');
  }
 }
 videoBtn.addEventListener('click', function() {

 if (videoFile.paused) {
  videoFile.play();
  videoBtnIcon.src = './images/story/pause.svg';
  videoOverlay.onmouseleave = showHideOverlay;
  videoOverlay.onmouseenter = showHideOverlay;

 } else {
  videoFile.pause();
  videoBtnIcon.src = './images/story/play.svg';
  videoOverlay.onmouseleave = null;
  videoOverlay.onmouseenter = null;
 }

  
 });

//  Добавление плавной прокрутки
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
};


   
});

