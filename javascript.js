var category1 = document.getElementById('category1');
var category2 = document.getElementById('category2');
var category3 = document.getElementById('category3');
var category4 = document.getElementById('category4');
var category5 = document.getElementById('category5');
var category6 = document.getElementById('category6');

var category1_color = "#d1e8c5"
var category2_color = "#fcf6b1"
var category3_color = "#d2edf3"
var category4_color = "#fdcc99"
var category5_color = "#fbcbcc"
var category6_color = "#fbf6b3"

var category1_profile = document.getElementById('category1_profile');
var category2_profile = document.getElementById('category2_profile');
var category3_profile = document.getElementById('category3_profile');
var category4_profile = document.getElementById('category4_profile');
var category5_profile = document.getElementById('category5_profile');
var category6_profile = document.getElementById('category6_profile');

var category1_profile_title1 = document.getElementById('category1_profile_title1');
var category1_profile_title2 = document.getElementById('category1_profile_title2');
var category1_profile_title3 = document.getElementById('category1_profile_title3');
var category1_profile_title4 = document.getElementById('category1_profile_title4');
var category1_profile_title5 = document.getElementById('category1_profile_title5');
var category1_profile_title6 = document.getElementById('category1_profile_title6');
var category1_profile_title7 = document.getElementById('category1_profile_title7');
var category1_profile_title8 = document.getElementById('category1_profile_title8');
var category2_profile_title1 = document.getElementById('category2_profile_title1');
var category2_profile_title2 = document.getElementById('category2_profile_title2');
var category2_profile_title3 = document.getElementById('category2_profile_title3');
var category2_profile_title4 = document.getElementById('category2_profile_title4');
var category2_profile_title5 = document.getElementById('category2_profile_title5');
var category2_profile_title6 = document.getElementById('category2_profile_title6');
var category3_profile_title1 = document.getElementById('category3_profile_title1');
var category4_profile_title1 = document.getElementById('category4_profile_title1');
var category5_profile_title1 = document.getElementById('category5_profile_title1');
var category6_profile_title1 = document.getElementById('category6_profile_title1');


var category1_profile_title1_preview = document.getElementById('category1_profile_title1_preview');
var category1_profile_title2_preview = document.getElementById('category1_profile_title2_preview');
var category1_profile_title3_preview = document.getElementById('category1_profile_title3_preview');
var category1_profile_title4_preview = document.getElementById('category1_profile_title4_preview');
var category1_profile_title5_preview = document.getElementById('category1_profile_title5_preview');
var category1_profile_title6_preview = document.getElementById('category1_profile_title6_preview');
var category2_profile_title1_preview = document.getElementById('category2_profile_title1_preview');
var category2_profile_title2_preview = document.getElementById('category2_profile_title2_preview');
var category2_profile_title3_preview = document.getElementById('category2_profile_title3_preview');
var category2_profile_title4_preview = document.getElementById('category2_profile_title4_preview');
var category2_profile_title5_preview = document.getElementById('category2_profile_title5_preview');
var category2_profile_title6_preview = document.getElementById('category2_profile_title6_preview');
var category3_profile_title1_preview = document.getElementById('category3_profile_title1_preview');
var category4_profile_title1_preview = document.getElementById('category4_profile_title1_preview');
var category5_profile_title1_preview = document.getElementById('category5_profile_title1_preview');
var category6_profile_title1_preview = document.getElementById('category6_profile_title1_preview');

var toShowCategory = category2
var toShow = category2_profile;
var toShowTitlePreview = category2_profile_title1_preview
var toShowTitle = category2_profile_title1

var profileArray = [category1_profile, category2_profile, category3_profile,
  category4_profile, category5_profile, category6_profile,
  category1_profile_title1_preview, category1_profile_title2_preview,
  category1_profile_title3_preview, category1_profile_title4_preview,
  category1_profile_title5_preview, category1_profile_title6_preview,
  category2_profile_title1_preview, category2_profile_title2_preview,
  category2_profile_title3_preview, category2_profile_title4_preview,
  category2_profile_title5_preview, category2_profile_title6_preview,
  category3_profile_title1_preview, category4_profile_title1_preview,
  category5_profile_title1_preview, category6_profile_title1_preview
];

//Initializations
noneInitializations(profileArray);
eventInitializations();

if (toShow) {
  toShow.style.display = "block"
  if (toShowCategory)
    changeCategoryColor(toShowCategory, category2_color);
  changeTitleColor(toShowTitle, category2_color)
}
if (toShowTitlePreview) {
  toShowTitlePreview.style.display = "block"
}

//function to initialize all the profiles
function noneInitializations(profile) {
  for (var i = 0; i < profile.length; i++) {
    if (profile[i])
      profile[i].style.display = "none"
  }
} //end of noneInitializations

//funcition to display all the profiles
function displayProfile(profile) {
  if (toShow) {
    toShow.style.display = "none"
    toShow = profile
    toShow.style.display = "block"
  }
} //end of displayProfile

//displaying all the preview
function displayPreview(preview) {
  if (toShowTitlePreview) {
    if(toShowTitlePreview.style)
    toShowTitlePreview.style.display = "none"
    toShowTitlePreview = preview
    if(toShowTitlePreview.style)
    toShowTitlePreview.style.display = "block"
  }
}

function changeCategoryColor(category, color) {
  category1.style.backgroundColor = "#ffffff"
  category1.style.cssText = ":hover{color:" + category1_color + ";}";
  category2.style.backgroundColor = "#ffffff"
  category2.style.cssText = ":hover{color:" + category2_color + ";}";
  category3.style.backgroundColor = "#ffffff"
  category3.style.cssText = ":hover{color:" + category3_color + ";}";
  category4.style.backgroundColor = "#ffffff"
  category4.style.cssText = ":hover{color:" + category4_color + ";}";
  category5.style.backgroundColor = "#ffffff"
  category5.style.cssText = ":hover{color:" + category5_color + ";}";
  category6.style.backgroundColor = "#ffffff"
  category6.style.cssText = ":hover{color:" + category6_color + ";}";
  category.style.backgroundColor = color
}

function changeTitleColor(title, color) {
  category1_profile_title1.style.backgroundColor = "#ffffff"
  category1_profile_title1.style.cssText = ":hover{color:" + category1_color + ";}";
  category1_profile_title2.style.backgroundColor = "#ffffff"
  category1_profile_title2.style.cssText = ":hover{color:" + category1_color + ";}";
  category1_profile_title3.style.backgroundColor = "#ffffff"
  category1_profile_title3.style.cssText = ":hover{color:" + category1_color + ";}";
  category1_profile_title4.style.backgroundColor = "#ffffff"
  category1_profile_title4.style.cssText = ":hover{color:" + category1_color + ";}";
  category1_profile_title5.style.backgroundColor = "#ffffff"
  category1_profile_title5.style.cssText = ":hover{color:" + category1_color + ";}";
  category1_profile_title6.style.backgroundColor = "#ffffff"
  category1_profile_title6.style.cssText = ":hover{color:" + category1_color + ";}";
  category2_profile_title1.style.backgroundColor = "#ffffff"
  category2_profile_title1.style.cssText = ":hover{color:" + category2_color + ";}";
  category2_profile_title2.style.backgroundColor = "#ffffff"
  category2_profile_title2.style.cssText = ":hover{color:" + category2_color + ";}";
  category2_profile_title3.style.backgroundColor = "#ffffff"
  category2_profile_title3.style.cssText = ":hover{color:" + category2_color + ";}";
  category2_profile_title4.style.backgroundColor = "#ffffff"
  category2_profile_title4.style.cssText = ":hover{color:" + category2_color + ";}";
  category2_profile_title5.style.backgroundColor = "#ffffff"
  category2_profile_title5.style.cssText = ":hover{color:" + category2_color + ";}";
  category2_profile_title6.style.backgroundColor = "#ffffff"
  category2_profile_title6.style.cssText = ":hover{color:" + category2_color + ";}";
  title.style.backgroundColor = color
}

function eventInitializations() {

  if (category1) {

    category1.addEventListener('click', function(event) {
      displayProfile(category1_profile);
      displayPreview(category1_profile_title1_preview)
      changeCategoryColor(category1, category1_color);
      changeTitleColor(category1_profile_title1, category1_color)
    });
  }

  if (category2) {

    category2.addEventListener('click', function(event) {
      displayProfile(category2_profile);
      displayPreview(category2_profile_title1_preview)
      changeCategoryColor(category2, category2_color);
      changeTitleColor(category2_profile_title1, category2_color)
    });
  }

  if (category3) {

    category3.addEventListener('click', function(event) {
      displayProfile(category3_profile);
      displayPreview(category3_profile_title1_preview)
      changeCategoryColor(category3, category3_color);
      changeTitleColor(category3_profile_title1, category3_color)
    });
  }

  if (category4) {

    /*category4.addEventListener('click', function(event) {
      displayProfile(category4_profile);
      displayPreview(category4_profile_title1_preview)
      changeCategoryColor(category4, category4_color);
      changeTitleColor(category4_profile_title1, category4_color)
    });*/
  }

  if (category5) {

    /*category5.addEventListener('click', function(event) {
      displayProfile(category5_profile);
      displayPreview(category5_profile_title1_preview)
      changeCategoryColor(category5, category5_color);
      changeTitleColor(category5_profile_title1, category5_color)
    });*/
  }

  if (category6) {

    /*category6.addEventListener('click', function(event) {
      displayProfile(category6_profile);
      displayPreview(category6_profile_title1_preview)
      changeCategoryColor(category6, category6_color);
      changeTitleColor(category6_profile_title1, category6_color)
    });*/
  }

  if (category1_profile_title1) {
    category1_profile_title1.addEventListener('click', function(event) {
      displayPreview(category1_profile_title1_preview)
      changeTitleColor(category1_profile_title1, category1_color)
    });
  }

  if (category1_profile_title2) {
    category1_profile_title2.addEventListener('click', function(event) {
      displayPreview(category1_profile_title2_preview)
      changeTitleColor(category1_profile_title2, category1_color)
    });
  }

  if (category1_profile_title3) {
    category1_profile_title3.addEventListener('click', function(event) {
      displayPreview(category1_profile_title3_preview)
      changeTitleColor(category1_profile_title3, category1_color)
    });
  }

  if (category1_profile_title4) {
    category1_profile_title4.addEventListener('click', function(event) {
      displayPreview(category1_profile_title4_preview)
      changeTitleColor(category1_profile_title4, category1_color)
    });
  }

  if (category1_profile_title5) {
    category1_profile_title5.addEventListener('click', function(event) {
      displayPreview(category1_profile_title5_preview)
      changeTitleColor(category1_profile_title5, category1_color)
    });
  }

  if (category1_profile_title6) {
    category1_profile_title6.addEventListener('click', function(event) {
      displayPreview(category1_profile_title6_preview)
      changeTitleColor(category1_profile_title6, category1_color)
    });
  }

  if (category2_profile_title1) {
    category2_profile_title1.addEventListener('click', function(event) {
      displayPreview(category2_profile_title1_preview)
      changeTitleColor(category2_profile_title1, category2_color)
    });
  }

  if (category2_profile_title2) {
    category2_profile_title2.addEventListener('click', function(event) {
      displayPreview(category2_profile_title2_preview)
      changeTitleColor(category2_profile_title2, category2_color)
    });
  }

  if (category2_profile_title3) {
    category2_profile_title3.addEventListener('click', function(event) {
      displayPreview(category2_profile_title3_preview)
      changeTitleColor(category2_profile_title3, category2_color)
    });
  }

  if (category2_profile_title4) {
    category2_profile_title4.addEventListener('click', function(event) {
      displayPreview(category2_profile_title4_preview)
      changeTitleColor(category2_profile_title4, category2_color)
    });
  }

  if (category2_profile_title5) {
    category2_profile_title5.addEventListener('click', function(event) {
      displayPreview(category2_profile_title5_preview)
      changeTitleColor(category2_profile_title5, category2_color)
    });
  }

  if (category2_profile_title6) {
    category2_profile_title6.addEventListener('click', function(event) {
      displayPreview(category2_profile_title6_preview)
      changeTitleColor(category2_profile_title6, category2_color)
    });
  }

  if (category3_profile_title1) {
    category3_profile_title1.addEventListener('click', function(event) {
      displayPreview(category3_profile_title1_preview)
      changeTitleColor(category3_profile_title1, category3_color)
    });
  }

  if (category4_profile_title1) {
    category4_profile_title1.addEventListener('click', function(event) {
      displayPreview(category4_profile_title1_preview)
      changeTitleColor(category4_profile_title1, category4_color)
    });
  }

  if (category5_profile_title1) {
    category5_profile_title1.addEventListener('click', function(event) {
      displayPreview(category5_profile_title1_preview)
      changeTitleColor(category5_profile_title1, category5_color)
    });
  }

  if (category6_profile_title1) {
    category6_profile_title1.addEventListener('click', function(event) {
      displayPreview(category6_profile_title1_preview)
      changeTitleColor(category6_profile_title1, category6_color)
    });
  }

  if (category1_profile_title1_preview) {
    category1_profile_title1_preview.addEventListener('click', function(event) {
      window.location = "https://freshdesk.com";
    });
  }
  if (category1_profile_title2_preview) {
    category1_profile_title2_preview.addEventListener('click', function(event) {

    });
  }

  if (category2_profile_title1_preview) {
    category2_profile_title1_preview.addEventListener('click', function(event) {
      window.location = "category2_profile_title1_preview.html";

    });
  }

  if (category2_profile_title2_preview) {
    category2_profile_title2_preview.addEventListener('click', function(event) {
      window.location = "category2_profile_title2_preview.html";
    });
  }

} //End of eventInitializations()

function showImage(imgName) {
  document.getElementById('largeImg').src = imgName;
  showLargeImagePanel();
  unselectAll();
  var e = window.event;
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  //IE8 and Lower
  else {
    e.cancelBubble = true;
  }
}

function showLargeImagePanel() {
  document.getElementById('largeImgPanel').style.visibility = 'visible';
}

function unselectAll() {
  if (document.selection) document.selection.empty();
  if (window.getSelection) window.getSelection().removeAllRanges();
}

function hideMe(obj) {
  obj.style.visibility = 'hidden';
}


function getQueryParams(qs) {
  qs = qs.split('+').join(' ');

  var params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}


/****Reading the href attribute *****/
//getting the parameter from href
var queryParams = getQueryParams(document.location.search);
console.log(queryParams);
if (queryParams.category == "acad") {
  displayProfile(category2_profile);
  displayPreview(category2_profile_title1_preview)
  changeCategoryColor(category2, category2_color);
  changeTitleColor(category2_profile_title1, category2_color)
} else if (queryParams.category == "work") {
  displayProfile(category1_profile);
  displayPreview(category1_profile_title1_preview)
  changeCategoryColor(category1, category1_color);
  changeTitleColor(category1_profile_title1, category1_color)
}

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );
if(page == "games.html"){
  displayProfile(category3_profile);
  displayPreview(category3_profile_title1_preview)
  changeCategoryColor(category3, category3_color);
  changeTitleColor(category3_profile_title1, category3_color)
}
