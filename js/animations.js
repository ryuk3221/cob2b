gsap.from('.navbar', {
  y: -100,
  opacity: 0,
  duration: 1
});

gsap.from('.nav-item', {
  y: -50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15
});

gsap.from('.header-content-text', {
  x: -200,
  opacity: 0,
  duration: 1
});

gsap.from('.header-content-btn', {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1
});

gsap.from('.header-img', {
  x: 200,
  y: 100,
  opacity: 0,
  duration: 1
});


gsap.from('.about-subtitle1', 
  {
    scrollTrigger: {
      trigger: '.main-about',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 0.7
  }
);

gsap.from('.about-title1', 
  {
    scrollTrigger: {
      trigger: '.main-about',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.about-title-text', 
  {
    scrollTrigger: {
      trigger: '.main-about',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);


gsap.from('.ma-item1', 
  {
    scrollTrigger: {
      trigger: '.main-about',
      start: '0% center'
    },
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.5
  }
);

gsap.from('.ma-img1', 
  {
    scrollTrigger: {
      trigger: '.main-about',
      start: '0% center'
    },
    y: 200,
    x: -100,
    opacity: 0,
    duration: 1
  }
);


gsap.from('.service-subtitle1', 
  {
    scrollTrigger: {
      trigger: '.main-services',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 0.7
  }
);

gsap.from('.service-title1', 
  {
    scrollTrigger: {
      trigger: '.main-services',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.service-text1', 
  {
    scrollTrigger: {
      trigger: '.main-services',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.ms-item1', 
  {
    scrollTrigger: {
      trigger: '.main-services',
      start: '0% center'
    },
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.25
  }
);

//----

gsap.from('.ma-img2', 
  {
    scrollTrigger: {
      trigger: '.main-integration',
      start: '0% center'
    },
    y: 200,
    x: -100,
    opacity: 0,
    duration: 1
  }
);


gsap.from('.int-subtitle1', 
  {
    scrollTrigger: {
      trigger: '.main-integration',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 0.7
  }
);

gsap.from('.int-title1', 
  {
    scrollTrigger: {
      trigger: '.main-integration',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.int-text1', 
  {
    scrollTrigger: {
      trigger: '.main-integration',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.mi-item1', 
  {
    scrollTrigger: {
      trigger: '.main-integration',
      start: '0% center'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.15
  }
);


gsap.from('.about-text', 
  {
    scrollTrigger: {
      trigger: '.about',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.ai-img1', 
  {
    scrollTrigger: {
      trigger: '.about',
      start: '0% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.cloud1', 
  {
    scrollTrigger: {
      trigger: '.about-list',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.al-item1', 
  {
    scrollTrigger: {
      trigger: '.about-list',
      start: '0% center'
    },
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.25
  }
);

gsap.from('.cloud2', 
  {
    scrollTrigger: {
      trigger: '.about-list',
      start: '20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.al-item2', 
  {
    scrollTrigger: {
      trigger: '.about-list',
      start: '30% center'
    },
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.25
  }
);

gsap.from('.services-text1', 
  {
    scrollTrigger: {
      trigger: '.services',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 0.7
  }
);

gsap.from('.s-img1', 
  {
    scrollTrigger: {
      trigger: '.services',
      start: '-10% center'
    },
    y: 200,
    opacity: 0,
    duration: 0.7
  }
);

gsap.from('.cloud3', 
  {
    scrollTrigger: {
      trigger: '.services',
      start: '20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.serv-item1', 
  {
    scrollTrigger: {
      trigger: '.services',
      start: '25% center'
    },
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.25
  }
);

gsap.from('.cloud4', 
  {
    scrollTrigger: {
      trigger: '.services',
      start: '35% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.serv-item2', 
  {
    scrollTrigger: {
      trigger: '.services',
      start: '45% center'
    },
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.25
  }
);

gsap.from('.cloud5', 
  {
    scrollTrigger: {
      trigger: '.services',
      start: '55% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.serv-item3', 
  {
    scrollTrigger: {
      trigger: '.services',
      start: '60% center'
    },
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.25
  }
);

gsap.from('.cloud6', 
  {
    scrollTrigger: {
      trigger: '.services',
      start: '70% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.serv-item4', 
  {
    scrollTrigger: {
      trigger: '.services',
      start: '75% center'
    },
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.25
  }
);

gsap.from('.integration-text', 
  {
    scrollTrigger: {
      trigger: '.integration',
      start: '-10% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.int-img', 
  {
    scrollTrigger: {
      trigger: '.integration',
      start: '10% center'
    },
    y: 200,
    opacity: 0,
    duration: 0.7
  }
);

gsap.from('.int-item', 
  {
    scrollTrigger: {
      trigger: '.integration',
      start: '40% center'
    },
    y: 200,
    opacity: 0,
    duration: 0.7,
    stagger: 0.25
  }
);

gsap.from('.cont-text', 
  {
    scrollTrigger: {
      trigger: '.cont',
      start: '-20% center'
    },
    y: 200,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.cont-img', 
  {
    scrollTrigger: {
      trigger: '.cont',
      start: '0% center'
    },
    y: 200,
    x: 100,
    opacity: 0,
    duration: 1
  }
);

gsap.from('.cont-input', 
  {
    scrollTrigger: {
      trigger: '.cont',
      start: '0% center'
    },
    x: -200,
    opacity: 0,
    duration: 0.7,
    stagger: 0.25
  }
);