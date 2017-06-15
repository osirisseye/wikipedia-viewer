"use strict";

$("#searchTerm").keypress(function (e) {
  if (e.keyCode === 13) {
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      url: url,
      type: "GET",
      async: false,
      dataType: "json",
      success: function success(data, status, jqXHR) {
        //console.log(data);
        for (var i = 0; i < data[1].length; i++) {
          $("#output").prepend("<div><a href=" + data[3][i] + "><div class='well'><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></div></a></div>");
        }
      }

    });
  }
});

$("#search").on("click", function () {
  var searchTerm = $("#searchTerm").val();
  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';

  $.ajax({
    url: url,
    type: "GET",
    async: false,
    dataType: "json",
    success: function success(data, status, jqXHR) {
      //console.log(data); 
      for (var i = 0; i < data[1].length; i++) {
        $("#output").prepend("<div><a href=" + data[3][i] + "><div class='well'><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></div></a></div>");
      }
    }
  });
});

$( function () {
    var height_diff = $( window ).height() - $( 'body' ).height();
    if ( height_diff > 0 ) {
        $( 'footer' ).css( 'margin-top', height_diff );
    }
});