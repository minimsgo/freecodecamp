(function ($) {
  var url = "https://andruxnet-random-famous-quotes.p.mashape.com/cat=";
  var key = "kkVaGkvec9mshbexpomWEQhM8Pv3p1NYKbGjsnpZOKjOxlX9fS";

  var settings = {
    headers: {
      "X-Mashape-Key": key,
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    },
    method: 'POST'
  };

  function getQuote() {
    $.ajax(url, settings).success(function (response) {
      var obj = JSON.parse(response);
      $("#quote").html(obj.quote);
      $("#author").html(obj.author);
    });
  }

  getQuote();
  
  $("#get").on("click", function () {
    getQuote();
  })
})($);