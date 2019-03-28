// Takes user form input

$(document).ready(function(){
  $("form#someForm").submit(function(event){
    event.preventDefault();
    var age = $("input#votingAge").val();
    var ageInt = parseInt(age);
    
    function voterAge(ageInt) {
      if (ageInt < 18) {
        $(".noShow").toggle();
      }
      else if (ageInt >= 18) {
        $(".yesShow").toggle();
      }
      else {
        alert("I'm sorry, I didn't catch that. You must not be old enough to be online without parental supervision. Go play Neopets, ya chump.")
      }
    };
  });
});
// Determines if user is old enough to vote
