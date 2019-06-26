// SCROLL ANIMATION FUNCTIONS
function expr(){ // EXPERIENCE
  $("html, body").animate({scrollTop : 845}, "fast");
}

function eduSkills(){ // EDUCATION/SKILLS
  $("html, body").animate({scrollTop : 1800}, "fast");
}

function projDemoCerts(){ // PROJECT DEMO/CERTIFICATIONS
  $("html, body").animate({scrollTop : $(document).height()-$(window).height()}, "fast");
}

function contact(){ // CONTACT
  $("html, body").animate({scrollTop : $("#name").offset().top}, "fast");
}
