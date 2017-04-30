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


var toShow = category2_profile;
var profileArray = [category1_profile,category2_profile,category3_profile,
                    category4_profile, category5_profile, category6_profile];

//Initializations
noneInitializations(profileArray);
eventInitializations();
toShow.style.display = "block"

//function to initialize all the profiles
function noneInitializations(profile) {
  for (var i = 0; i < profile.length; i++) {
    if (profile[i])
      profile[i].style.display = "none"
  }
}//end of noneInitializations

//funcition to display all the profiles
function displayProfile(profile) {
  toShow.style.display = "none"
  toShow = profile
  toShow.style.display = "block"
}//end of displayProfile

function eventInitializations() {

  if (category1) {

    category1.addEventListener('click', function(event) {
      displayProfile(category1_profile);
    });
  }

  if (category2) {

    category2.addEventListener('click', function(event) {
      displayProfile(category2_profile);
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

}//End of eventInitializations()
