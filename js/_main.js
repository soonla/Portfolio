gsap.to(".red", {
  x: 1000,
  rotation: 180,
  duration: 3,
  scrollTrigger: {
    markers: true,
    trigger: ".red",
    start: "top center", // 옵션을 두개 쓸 수 있는데 1번째가 trigger의 top 좌표, 2번째가 화면의 bottom지점
    end: "bottom top", //1번째가 trigger의 bottom 좌표, 두번째가 화면의 top좌표
    //scrub: 1,
    pin: true,
    toggleActions: "play pause reverse reset", //처음 두개는 내려갈때 뒤에 두개는 올라갈때....
  },
});
gsap.to(".green", {
  x: 1000,
  rotation: 180,
  duration: 3,
  scrollTrigger: ".green",
  scrollTrigger: {
    markers: true,
  },
});
gsap.to(".blue", {
  x: 1000,
  rotation: 180,
  duration: 3,
  scrollTrigger: ".blue",
});
