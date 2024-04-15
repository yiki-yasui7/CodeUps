jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  //ナビ
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-drawer-menu").fadeOut();
      $(this).removeClass("is-open");
    } else {
      $(".js-drawer-menu").fadeIn();
      $(this).addClass("is-open");
    }
  });

  $(".slick").slick({
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    dots: false,
  });

  // ページネーション、戻るボタン、進むボタンをcampaignに適用
  var campaignSwiper = new Swiper(".js-campaign-swiper", {
    clickable: true,
    loop: true,
    spaceBetween: 24,
    // 戻るボタンと進むボタンの設定
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //要素の取得とスピードの設定
  var box = $(".colorbox"),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });
});
