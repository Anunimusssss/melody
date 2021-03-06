$(document).ready(function () {
  var currentFloor=1;
  var counterUp = $('.counter-up');
  var counterDown = $('.counter-down');
  var floorPath = $('.home-image path');
  var modalOpen =$('.open-button');
  var modal = $('.modal');
  var modalClose = $('.modal-close-button');

  floorPath.on('mouseover', function(){
    floorPath.removeClass("current-floor")
    currentFloor = $(this).attr('data-floor');

    $(".counter").text(currentFloor);

  });

  floorPath.on('click', function(){
    modal.toggleClass('is-open');
  });

  modalOpen.on('click', function(){
    modal.toggleClass('is-open');
  });

  modalClose.on('click', function(){
    modal.removeClass("is-open");
  });

  counterUp.on('click', function(){

  if(currentFloor < 18){

    currentFloor++;

    usCurrentFloor=currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false});

    floorPath.removeClass("current-floor");
    $(".counter", ".modal-number").text(usCurrentFloor);
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");

  }

  else{
    currentFloor=2;

    usCurrentFloor=currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false});

    $(".counter").text(usCurrentFloor);
    floorPath.removeClass("current-floor");
    $(".counter").text(usCurrentFloor);
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  }

  });

  counterDown.on('click', function(){

    if(currentFloor > 2){
  
      currentFloor--;
  
      usCurrentFloor=currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false});
  
      $(".counter").text(usCurrentFloor);
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  
    }

    else{
      currentFloor=18;
  
      usCurrentFloor=currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGrouping: false});
  
      $(".counter").text(usCurrentFloor);
      $('.home-image path').removeClass("current-floor");
      $(".counter").text(usCurrentFloor);
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  
    });

});