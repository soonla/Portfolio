Splitting();
const typed = new Typed(".typing .txt", {
  strings: [
    "i am little <strong>slow</strong>",
    "but, try <strong>steadily</strong>",
    "I want to be a <strong>full stack developer</strong>.",
    "my name is <strong>Lee sung kyu</strong>",
    "keep an <strong>eyes on me.</strong>",
  ],
  typeSpeed: 50,
  startDelay: 1000,
  backSpeed: 20,
  backDelay: 3000,
  loop: true,
});

gsap.defaults({
  duration: 1,
  ease: "back",
});
ScrollTrigger.defaults({
  //markers: true,
});
const introTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#intro",
    start: "top top",
    end: "bottom top",
    onUpdate: function (self) {
      //console.log(self);
      gsap.set("#intro", { filter: `blur(${self.progress * 10}px)` });
    },
  },
});

const profileTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#profile",
    start: "top-=100 top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
profileTL
  .from("#profile h2 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from("#profile h2", {
    borderBottomWidth: 0,
  })

  .from("#profile .contents .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  });

const careerTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#career",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
  },
});
careerTL
  .from("#career h2 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from("#career h2", {
    borderBottomWidth: 0,
  })

  .from("#career .contents .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  });

const mySkill = {
  markup: $("#skill ul li").eq(0).find(".num").data("percent"),
  _css: $("#skill ul li").eq(1).find(".num").data("percent"),
  js: $("#skill ul li").eq(2).find(".num").data("percent"),
  node: $("#skill ul li").eq(3).find(".num").data("percent"),
  java: $("#skill ul li").eq(4).find(".num").data("percent"),
  spring: $("#skill ul li").eq(5).find(".num").data("percent"),
};
const skillTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#skill",
    start: "top top",
    end: "bottom+=1000 top",
    pin: true,
    scrub: 0.5,
  },
});
skillTL
  .from("#skill h2 .char", {
    x: "+=100",
    opacity: 0,
    stagger: {
      each: 0.1,
    },
  })
  .from("#skill h2", {
    borderBottomWidth: 0,
  })
  .from(
    "#skill ul li",
    {
      y: "-100",
      opacity: 0,
      stagger: {
        each: 0.1,
      },
    },
    "circleStart"
  )
  .to(
    "#skill ul li:nth-child(1) circle ",
    {
      strokeDashoffset: 0,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(2) circle ",
    {
      strokeDashoffset: -570 * 0.15,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(3) circle ",
    {
      strokeDashoffset: -570 * 0.2,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(4) circle ",
    {
      strokeDashoffset: -570 * 0.3,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(5) circle ",
    {
      strokeDashoffset: -570 * 0.3,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .to(
    "#skill ul li:nth-child(6) circle ",
    {
      strokeDashoffset: -570 * 0.4,
      ease: "linear",
      duration: 3,
    },
    "circleStart+=1"
  )
  .from(
    mySkill,
    {
      markup: 0,
      _css: 0,
      js: 0,
      node: 0,
      java: 0,
      spring: 0,
      duration: 3,
      ease: "linear",
      onUpdate: function () {
        console.log(mySkill.css);
        $("#skill li").eq(0).find(".num").text(Math.floor(mySkill.markup));
        $("#skill li").eq(1).find(".num").text(Math.floor(mySkill._css));
        $("#skill li").eq(2).find(".num").text(Math.floor(mySkill.js));
        $("#skill li").eq(3).find(".num").text(Math.floor(mySkill.node));
        $("#skill li").eq(4).find(".num").text(Math.floor(mySkill.java));
        $("#skill li").eq(5).find(".num").text(Math.floor(mySkill.spring));
      },
    },
    "circleStart+=1"
  );

function showCursorInfo() {
  $("input[name='clientY']").val(e.clientY);
  $("input[name='pageY']").val(e.pageY);
  $("input[name='offsetY']").val(e.offsetY);
  $("input[name='screenY']").val(e.screenY);
}
const cursor = $(".cursor");
$(window).on("mousemove", function (e) {
  //showCursorInfo();
  gsap.to(cursor, { left: e.clientX, top: e.clientY });
});
const itemListUL = $("#portfolio .itemList");

let grid = null;

$.ajax({
  url: "../data/portfolio.json",
  success: function (res) {
    //console.log(res);
    const itemList = res.portfolioList;
    let output = "";
    $.each(itemList, function (idx, item) {
      output += `
        <li class="item ${item.category}">
          <a href="../images/portfolio/${item.img}" 
                  data-fancybox="${item.category}" 
                  data-caption="${item.title} <a href='${item.link}' target='_blank'>LINK</a>">
            <div class="img">
              <img src="../images/portfolio/${item.img}" alt="" />
            </div>
            <div class="info">
              <h2>${item.title}</h2>
              <p class="desc">${item.desc}</p>
              <p class="skill">skill : <strong>${item.skill}</strong></p>
              <p class="period">period : <strong>${item.period}</strong></p>
              <p class="category">category : <strong>${item.category}</strong></p>
            </div>
          </a>
        </li>
        `;
    });
    itemListUL.html(output);
    Fancybox.bind("[data-fancybox]");
    $(".itemList").imagesLoaded(function () {
      grid = $(".itemList").isotope({
        // options
        itemSelector: ".item",
        layoutMode: "masonry",
        getSortData: {
          point: ".point parseFloat",
          title: ".title",
        },
      });
    });
    const portfolioTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
      },
    });
    portfolioTL
      .from("#portfolio h2 .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
          each: 0.1,
        },
      })
      .from("#portfolio h2", {
        borderBottomWidth: 0,
      })
      .from("#portfolio #filter ul li", {
        x: "+=100",
        opacity: 0,
        stagger: {
          each: 0.1,
        },
      })
      .from("#portfolio .itemList li", {
        y: "+=100",
        opacity: 0,
        stagger: {
          each: 0.1,
        },
      });
    const contactTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
      },
    });
    contactTL
      .from("#contact h2 .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
          each: 0.1,
        },
      })
      .from("#contact h2", {
        borderBottomWidth: 0,
      })
      .from("#contact ul .char", {
        x: "+=100",
        opacity: 0,
        stagger: {
          each: 0.1,
        },
      })
      .from("#contact form", {
        x: "+=100",
        opacity: 0,
      });
  },
});

$("#filter li").on("mouseenter", function () {
  gsap.killTweensOf(".cursor");
  $(".cursor .txt").text("CLICK");
  gsap.to(".cursor", {
    width: 80,
    height: 80,
    backgroundColor: "#f00",
    ease: "elastic",
    duration: 1,
  });
});
$("#filter li").on("mouseleave", function () {
  gsap.killTweensOf(".cursor");
  $(".cursor .txt").text("");
  gsap.to(".cursor", {
    width: 10,
    height: 10,
    backgroundColor: "#fff",
    ease: "power4",
    duration: 0.2,
  });
});

$("#filter li").on("click", function () {
  if ($(this).hasClass("on")) return;
  $(this).addClass("on").siblings("li").removeClass("on");
  const _filter = $(this).data("filter");
  console.log(_filter);
  grid.isotope({
    filter: `.${_filter}`,
    sortBy: ["point", "title"],
    sortAscending: false, //true  내리차순, false 올림차순
  });
});

$(".itemList").on("mouseenter", "li", function () {
  gsap.killTweensOf(".cursor");
  $(".cursor .txt").text("VIEW");
  gsap.to(".cursor", {
    width: 80,
    height: 80,
    backgroundColor: "#1971c2",
    ease: "elastic",
    duration: 1,
  });
});
$(".itemList").on("mouseleave", "li", function () {
  gsap.killTweensOf(".cursor");
  $(".cursor .txt").text("");
  gsap.to(".cursor", {
    width: 10,
    height: 10,
    backgroundColor: "#fff",
    ease: "power4",
    duration: 0.2,
  });
});

//porfolio
