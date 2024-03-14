// $(".sub-img-1").click(function(){
//     $(".main-img").css("background-image", "url('../img/collection4.png')")
//   });



// $(document).ready(function () {
//     $(".sub-img-1").click(function () {
//         var imageUrl = "../img/collection1.png";
//         $(".main-img").css("background-image", "url(" + imageUrl + ")");
//     });
// });


// ********** cart counter start **********
window.counter = function(operator = "plus") {
  var currentCount = document.getElementById('counter-container').textContent
  currentCount = parseInt(currentCount.replace(/,/gi, ""));
  if (operator == "plus") {
      currentCount += 1;
  } else if (operator == 'minus') {
      currentCount -= 1;
  } else {
      alert("undfined opereater.")
      return false;
  }
  document.getElementById('counter-container').textContent = parseInt(currentCount).toLocaleString('en-US')

}

window.onload = function() {

  // Add ("+") button eventListener
  document.getElementById('right-button').addEventListener('click', function() {
      counter();
  })

  // Minus ("-") button eventListener
  document.getElementById('left-button').addEventListener('click', function() {
      counter("minus");
  })
}

// ********** cart counter end **********



$(".btn-addcart").click(function(){
  $(".btn-addcart").hide();
  $(".btn-gocart").show();
});

$(".btn-buy").click(function(){
  $(".buy-now").show();
  $(".prod-detail").hide();
  $("footer").css("margin-top", "0px");
});



// ************  women colloection product detail start ************

$(".prod").click(function(){
  $(".collection").hide();
});


$("#prod1").click(function(){
  $("#prod-detail1").show();
});

$("#prod2").click(function(){
  $("#prod-detail2").show();
});

$("#prod3").click(function(){
  $("#prod-detail3").show();
});

$("#prod4").click(function(){
  $("#prod-detail4").show();
});

$("#prod5").click(function(){
  $("#prod-detail5").show();
});

$("#prod6").click(function(){
  $("#prod-detail6").show();
});

$("#prod7").click(function(){
  $("#prod-detail7").show();
});

$("#prod8").click(function(){
  $("#prod-detail8").show();
});

$("#prod9").click(function(){
  $("#prod-detail9").show();
});

// ************  women colloection product detail end ************


// ************  men colloection product detail start ************
$(".m-prod").click(function(){
  $(".m-collection").hide();
});


$("#m-prod1").click(function(){
  $("#m-prod-detail1").show();
});

$("#m-prod2").click(function(){
  $("#m-prod-detail2").show();
});

$("#m-prod3").click(function(){
  $("#m-prod-detail3").show();
});

$("#m-prod4").click(function(){
  $("#m-prod-detail4").show();
});

$("#m-prod5").click(function(){
  $("#m-prod-detail5").show();
});

$("#m-prod6").click(function(){
  $("#m-prod-detail6").show();
});

$("#m-prod7").click(function(){
  $("#m-prod-detail7").show();
});

$("#m-prod8").click(function(){
  $("#m-prod-detail8").show();
});

$("#m-prod9").click(function(){
  $("#m-prod-detail9").show();
});

// ************  men colloection product detail end ************




// ************  kids colloection product detail start ************


$(".k-prod").click(function(){
  $(".k-collection").hide();
});

$("#k-prod1").click(function(){
  $("#k-prod-detail1").show();
});

$("#k-prod2").click(function(){
  $("#k-prod-detail2").show();
});

$("#k-prod3").click(function(){
  $("#k-prod-detail3").show();
});

$("#k-prod4").click(function(){
  $("#k-prod-detail4").show();
});

$("#k-prod5").click(function(){
  $("#k-prod-detail5").show();
});

$("#k-prod6").click(function(){
  $("#k-prod-detail6").show();
});

$("#k-prod7").click(function(){
  $("#k-prod-detail7").show();
});

$("#k-prod8").click(function(){
  $("#k-prod-detail8").show();
});

$("#k-prod9").click(function(){
  $("#k-prod-detail9").show();
});

// ************  kids colloection product detail end ************

// ***** sign-in and sign-up *****

$(".signIn").click(function(){
  $(".sign-in").hide();
  $(".sign-up").show();
});

$(".signUp").click(function(){
  $(".sign-up").hide();
  $(".sign-in").show();
});