var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    autoHeight: true
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  })

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  })

  var content = document.querySelector('.catalog-item__content');
  var list = document.querySelector('.catalog-item__list');

  document.querySelector('.catalog-item__link').addEventListener('click', function () {
    list.classList.add('catalog-item__list_active'),
    content.classList.remove('catalog-item__content_active');
  })

  document.querySelector('.catalog-item__back-link').addEventListener('click', function () {
    list.classList.remove('catalog-item__list_active'),
    content.classList.add('catalog-item__content_active');
  })