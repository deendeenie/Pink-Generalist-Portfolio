//Hero section changing text
//Code source: https://jsfiddle.net/9z4r1qqk/
var $jobTitle = $("#jobTitle");
var jobs = ["generalist", "frontender", "designer", "artist", "animator", "creator"];

for (var i = 1; i <= 5; ++i) {
  (function(index) {
    setInterval(function() { 
      $jobTitle.html(jobs[index-1]);
    }, i * 650);
  })(i);
}


//Project tag filtering system
//Code source: https://www.w3schools.com/howto/howto_js_filter_elements.asp
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterTags");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeTag(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addTag(x[i], "show");
  }
}

function addTag(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeTag(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

//Highlight
var tagContainer = document.getElementById("filterProjectByTags");
var tags = tagContainer.getElementsByClassName("tag");

for (var i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", function(){
    
    var current = document.getElementsByClassName("active");

    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}