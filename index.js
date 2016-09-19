$(function(){

  $("#button1").click(function(){
    $("#section1").show();
    $("#section2").hide();
    $("#section3").hide();
  });

  $("#button2").click(function(){
    $("#section2").show();
    $("#section3").hide();
    $("#section1").hide();
  });

  $("#button3").click(function(){
    $("#section3").show();
    $("#section2").hide();
    $("#section1").hide();
  });
  
  setInterval(function(){
    var form = new FormData();
    form.append("title", "Laaura");
    form.append("due", "21/08/2016");

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://punkapi.com/api/v1/beers/random",
      "method": "GET",
      "headers": {
        "authorization": "Basic MDg0MDU2NGRlOTk1NDgyOTk4MWQzZGNjNDkyMGM5Nzk6",
        "cache-control": "no-cache",
        "postman-token": "e1a7c29d-61f3-7f17-ded6-3e5c579ce29d"
      }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
      $("#beer").html(response.name);
      $("#description").html(response.description);
    });
  } , 10000)


});
