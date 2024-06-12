jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  //ナビ
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-drawer-menu").fadeOut();
      $(this).removeClass("is-open");
      $("body").css("overflow", "auto");
    } else {
      $(".js-drawer-menu").fadeIn();
      $(this).addClass("is-open");
      $("body").css("overflow", "hidden");
    }
  });

  // ページネーション、戻るボタン、進むボタンをcampaignに適用
  var campaignSwiper = new Swiper(".js-campaign-swiper", {
    clickable: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 24,
    autoplay: { delay: 2000 },
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
      1024: {
        spaceBetween: 40,
      },
    },
    // 戻るボタンと進むボタンの設定
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".js-mv-swiper", {
    loop: true,

    effect: "fade",
    speed: 800,
    autoplay: { delay: 3000 },
    pagination: {
      el: ".mv-pagination",
    },
    clickable: true,
    loop: true,
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

  let topBtn = $(".to-top");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  $(document).ready(function () {
    // 画像切り替えの関数を定義
    function switchImage() {
      // 現在のウィンドウ幅を取得
      var windowWidth = $(window).width();
      // ウィンドウ幅が指定の幅より小さい場合はスマホ用画像を表示、そうでない場合はPC用画像を表示
      if (windowWidth < 768) {
        $(".price__img--sp").show();
        $(".price__img--pc").hide();
      } else {
        $(".price__img--sp").hide();
        $(".price__img--pc").show();
      }
    }

    // 初期表示時に画像切り替えの関数を実行
    switchImage();

    // ウィンドウサイズが変更されたときに画像切り替えの関数を実行
    $(window).resize(function () {
      switchImage();
    });
  });
});
