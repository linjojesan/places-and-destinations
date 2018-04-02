

function Places(dates, landmarks, activities) {
  this.date = dates;
  this.landmarks = landmarks;
  this.activities = activities;

}

var baja = new Places(2012, ["LaBufadora", "Tijuana-Cultural-Center", "Playas de Tijuana"],["whale watching", "surfing", "diving", "bird-watching"]);

var amsterdam = new Places(2016,["van gogh museum", "ann frank's house", "queen maxima's castle"],["visiting museum", "canal-tour", "smoking weed", "bicycle"]);




$(document).ready(function(event) {
  $('#mex').click(function() {
    // event.preventDefault();
    $("li.mex").toggle();


  });
  $("#holland").click(function() {
    $("li.holl").toggle();

  });
});
