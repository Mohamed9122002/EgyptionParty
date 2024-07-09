$(document).ready(function() {
  // scroll behavior
  $("#leftMenu ul li a[href^='#']").on("click", function(e) {
    // console.log("an");
    const select = $(e.target).attr("href");
    const selectOf = $(select).offset().top;
    console.log(selectOf);
    $("html, body").animate({ scrollTop: selectOf }, 1000);

  });
  // click on the openNavbar
  $(".openNavbar").click(function() {
    $("#leftMenu").animate({ width: "15rem" }, 500);
    $(".home-content").animate({ marginLeft: "15rem" }, 500);
    $('body').css("overflow", "hidden");
  });
  // close button x
  $(".closeBtn").on("click", function() {
    $("#leftMenu").animate({ width: "0" }, 500, function() {
      $(".home-content").animate({ marginLeft: "0" }, 500);
         $("body").css("overflow", "visible");
    });
  });

  // accordion
  $(".inner").find(".accordion").on("click", e => {
    $(".lead").slideUp(1000);
    $(e.target).next().slideToggle(1000);
  });

  // Counter Time
  function counterTime(count) {
    let newDate1 = new Date();
    let newDate2 = new Date(count);
    let newDate = newDate1 - newDate2;

    $(".days").html(`${-Math.floor(newDate / 1000 / 60 / 60 / 24)} D`);
    $(".hours").html(`${-Math.floor(newDate / 1000 / 60 / 60)} h`);
    $(".minutes").html(`${-Math.floor(newDate / 1000 / 60)} m`);
    $(".seconds").html(`${-Math.floor(newDate / 1000)} s`);
    setInterval(function() {
      counterTime(count);
    }, 1000);
  }
  counterTime("10 october 2024 9:56:00");

  // min teatArea
  let maxLength = 100;
  $("textarea").on("keyup", function(e) {
    let text = $(e.target).val().length;
    let minLength = text - maxLength;
    minLength <= 0? $(".character").html(`your available character ${minLength}`).css({color: "green"}): $(".character").html("your available character finished").css({ color: "red" });
  });
});

// let data1 = new Date();
// let data2 = new Date("10 october 2021 9:56:00");
// let newDate = data1 - data2;
// console.log(Math.floor(newDate / 1000)); // seconds
// console.log(Math.floor(newDate / 1000 / 60)); // minutes
// console.log(Math.floor(newDate / 1000 / 60 / 60)); //hours
// console.log(Math.floor(newDate / 1000 / 60 / 60 / 24)); //days
// console.log(Math.floor(newDate / 1000 / 60 / 60 / 24 / 365)); //years
