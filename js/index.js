
const galery_swiper = new Swiper('.galery__block-right', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    loop: false,
    spaceBetween: 30,
    breakpoints: {
      // when window width is <= 499px
      1366: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    }
  });

const projects_swiper = new Swiper('.partners__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  spaceBetween: 50,
  breakpoints: {
    // when window width is <= 499px
    1366: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    }
});

const events_swiper = new Swiper('.event__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  loop: true,
  spaceBetween: 50,
  breakpoints: {
  // when window width is <= 499px
  1366: {
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
  1024: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 27,
  },
  992: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30
  },
  577: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30
  },
  }
});

new Accordion('.accordion-container');

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  renderChoiceLimit: -1,
  maxItemCount: -1,


});

let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burgerMenu");
let MenuLink = document.querySelectorAll(".nav__link");

burger.addEventListener('click', function () {

  burger.classList.toggle('burger-active');
  burgerMenu.classList.toggle('burgerMenu-active');

  document.body.classList.toggle('stop-scroll')

});

MenuLink.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger-active');
    burgerMenu.classList.remove('burgerMenu-active');
    document.body.classList.remove('stop-scroll')
  });
});

let searchBtn = document.querySelector(".navigation__search");
let searchForm = document.querySelector(".navigation__searchInside");
let search__close = document.querySelector(".searchInside__close")

  searchBtn.addEventListener("click", function() {
    searchBtn.classList.add("searchInside__btn-active");
    searchForm.classList.add("navigation__searchInside-active");
  });

  search__close.addEventListener ("click", function() {
    searchBtn.classList.remove("searchInside__btn-active");
    searchForm.classList.remove("navigation__searchInside-active");
  });


let tabsBtnCatalog = document.querySelectorAll(".catalog__btn");
let tabsBlockCatalog = document.querySelectorAll(".catalog__block-left");

tabsBtnCatalog.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtnCatalog.forEach(function(btn) {btn.classList.remove('catalog__btn-active')})
    e.currentTarget.classList.add('catalog__btn-active')

    tabsBlockCatalog.forEach(function(element){element.classList.remove("catalog__block-left-active")});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__block-left-active')

  });
});

new JustValidate('.contact__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLenght: 30,
    },
    tel: {
      required: true

    },
  },
  messages: {
    name: {
      required: 'Недопустимый формат',
      minLength: 'Недопустимый формат',
      maxLenght: 'Недопустимый формат'
    },
    tel: {
      required: 'Недопустимый формат',
    },
  },
  }
);

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });


    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map/mark.png',
        iconImageSize: [20, 20],
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}

tippy('.projects__tooltip-1', {
  content: "Пример современных тенденций - современная методология разработки",
  arrow: true,
});

tippy('.projects__tooltip-2', {
  content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ",
  arrow: true,
});

tippy('.projects__tooltip-3', {
  content: "В стремлении повысить качество ",
  arrow: true,
});



let tabsbtn = document.querySelectorAll('.generes__btn')
let tabsBlock = document.querySelectorAll('.generes__tabs')

// if(document.querySelector(".generes__btn").classList.contains("generes__btn-active")) {

  tabsbtn.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      if (e.currentTarget.classList.contains('generes__btn-active')) {

        tabsbtn.forEach(function(btn) {btn.classList.remove('generes__btn-active')})  
        tabsBlock.forEach(function(block) {block.classList.remove("generes__tabs-active")});
      }
      else {
        tabsbtn.forEach(function(btn) {btn.classList.remove('generes__btn-active')})
        e.currentTarget.classList.add('generes__btn-active')

        tabsBlock.forEach(function(block) {block.classList.remove("generes__tabs-active")});
        document.querySelector(`[data-target ="${path}"]`).classList.add('generes__tabs-active')
      }
    });
  });

