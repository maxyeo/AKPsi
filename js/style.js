$(document).ready(function() {  

    sizeitup();

    //nav bar scoll action
    $('#logo, #ship').click(function() {
        $("html, body").animate({ scrollTop: $('.top').offset().top}, 500);
    });//clicked on top

    $('.bio').click(function() {
      $('#bios').addClass('active');
      var image = $(this).attr("data-image");
      var pledge_class = $(this).attr("data-class");
      var pledge_class_greek = $(this).attr("data-class-greek");
      var name = $(this).attr("data-name");
      var position = $(this).attr("data-position");
      var major = $(this).attr("data-major");
      var bio = $(this).attr("data-bio");
      $('#bios-bro-pic').css('background-image', 'url(' + image + ')');
      $("#bios h4").html(name);
      $("#bios h5").html(position);
      $("#bios h6").html(major);
      $("#bios-bio").html(bio);
      $("#greek span").html(pledge_class_greek);
      $("#greek h6").html(pledge_class);
    });

    $('#bios-wrapper').click(function(e){
      e.stopPropagation();
    });

    $('#bios, #bios-out').click(function(){
      $('#bios').removeClass('active');
      setTimeout(function () {
        $('#bios-bro-pic').css('background-image', 'url()');
        $("#bios h4").html("");
        $("#bios h5").html("");
        $("#bios h6").html("");
        $("#bios-bio").html("");
        $("#greek span").html("");
        $("#greek h6").html("");
      }, 300);
    });

    $('.gallery-img').click(function() {
      $('#light').addClass('up');
      var image = $(this).attr("style");
      $('#light img').attr('src', image.substring(22, 41));
    });

    $('#light img').click(function(e){
      e.stopPropagation();
    });

    $('#light').click(function(){
      $('#light').removeClass('up');
      setTimeout(function () {
        $('#light img').attr('src', '');
      }, 300);
    });

});

$(window).resize(function() {
  sizeitup();
});

function sizeitup() {
  var bodyh = $(window).height();
  var bodyw = $(window).width();
  if (bodyw > 650) {
    $(".top").css("height",bodyh);
  }
}

$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    $('header').addClass('up');
  } else {
    $('header').removeClass('up');
  }
});

//SMOOTH SCROLLING
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(".navicon-button").click(function(){
  $("nav").toggleClass("open");
  $(this).toggleClass("open");
});