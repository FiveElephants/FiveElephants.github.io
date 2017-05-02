var category1 = document.getElementById('category1');
var category2 = document.getElementById('category2');
var category3 = document.getElementById('category3');
var category4 = document.getElementById('category4');
var category5 = document.getElementById('category5');
var category6 = document.getElementById('category6');

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

var toShow = category2_profile;
var toShowTitlePreview = category2_profile_title1_preview

var profileArray = [category1_profile, category2_profile, category3_profile,
  category4_profile, category5_profile, category6_profile,
  category1_profile_title1_preview,category1_profile_title2_preview,
  category1_profile_title3_preview,category1_profile_title4_preview,
  category1_profile_title5_preview,category1_profile_title6_preview,
  category2_profile_title1_preview, category2_profile_title2_preview,
  category2_profile_title3_preview, category2_profile_title4_preview,
  category2_profile_title5_preview,category2_profile_title6_preview,
];

//Initializations
noneInitializations(profileArray);
eventInitializations();
if (toShow)
  toShow.style.display = "block"
if (toShowTitlePreview)
  toShowTitlePreview.style.display = "block"

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
  toShowTitlePreview.style.display = "none"
  toShowTitlePreview = preview
  toShowTitlePreview.style.display = "block"
}

function eventInitializations() {

  if (category1) {

    category1.addEventListener('click', function(event) {
      displayProfile(category1_profile);
      displayPreview(category1_profile_title1_preview)
    });
  }

  if (category2) {

    category2.addEventListener('click', function(event) {
      displayProfile(category2_profile);
      displayPreview(category2_profile_title1_preview)
    });
  }

  if (category3) {

    category3.addEventListener('click', function(event) {
      displayProfile(category3_profile);
    });
  }

  if (category4) {

    category4.addEventListener('click', function(event) {
      displayProfile(category4_profile);
    });
  }

  if (category5) {

    category5.addEventListener('click', function(event) {
      displayProfile(category5_profile);
    });
  }

  if (category6) {

    category6.addEventListener('click', function(event) {
      displayProfile(category6_profile);
    });
  }

  if (category1_profile_title1) {
    category1_profile_title1.addEventListener('click', function(event) {
      displayPreview(category1_profile_title1_preview)

    });
  }

  if (category1_profile_title2) {
    category1_profile_title2.addEventListener('click', function(event) {
      displayPreview(category1_profile_title2_preview)

    });
  }

  if (category1_profile_title3) {
    category1_profile_title3.addEventListener('click', function(event) {
      displayPreview(category1_profile_title3_preview)
    });
  }

  if (category1_profile_title4) {
    category1_profile_title4.addEventListener('click', function(event) {
      displayPreview(category1_profile_title4_preview)
    });
  }

  if (category1_profile_title5) {
    category1_profile_title5.addEventListener('click', function(event) {
      displayPreview(category1_profile_title5_preview)
    });
  }

  if (category1_profile_title6) {
    category1_profile_title6.addEventListener('click', function(event) {
      displayPreview(category1_profile_title6_preview)
    });
  }

  if (category2_profile_title1) {
    category2_profile_title1.addEventListener('click', function(event) {
      displayPreview(category2_profile_title1_preview)
    });
  }

  if (category2_profile_title2) {
    category2_profile_title2.addEventListener('click', function(event) {
      displayPreview(category2_profile_title2_preview)
    });
  }

  if (category2_profile_title3) {
    category2_profile_title3.addEventListener('click', function(event) {
      displayPreview(category2_profile_title3_preview)
    });
  }

  if (category2_profile_title4) {
    category2_profile_title4.addEventListener('click', function(event) {
      displayPreview(category2_profile_title4_preview)
    });
  }

  if (category2_profile_title5) {
    category2_profile_title5.addEventListener('click', function(event) {
      displayPreview(category2_profile_title5_preview)
    });
  }

  if (category2_profile_title6) {
    category2_profile_title6.addEventListener('click', function(event) {
      displayPreview(category2_profile_title6_preview)
    });
  }

  if(category1_profile_title1_preview){
    category1_profile_title1_preview.addEventListener('click', function(event) {
      window.location="https://freshdesk.com";
    });
  }
  if(category1_profile_title2_preview){
    category1_profile_title2_preview.addEventListener('click', function(event) {

    });
  }

  if(category2_profile_title1_preview){
    category2_profile_title1_preview.addEventListener('click', function(event) {
      window.location="category2_profile_title1_preview.html";
    });
  }

  if(category2_profile_title2_preview){
    category2_profile_title2_preview.addEventListener('click', function(event) {
      window.location="category2_profile_title2_preview.html";
    });
  }

} //End of eventInitializations()
