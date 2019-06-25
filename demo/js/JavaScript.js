// SCROLL ANIMATION FUNCTIONS
function expr(){ // EXPERIENCE
  $("html, body").animate({scrollTop : 825}, "fast");
}

function eduSkills(){ // EDUCATION/SKILLS
  $("html, body").animate({scrollTop : 1920}, "fast");
}

function projDemoCerts(){ // PROJECT DEMO/CERTIFICATIONS
  $("html, body").animate({scrollTop : $(document).height()-$(window).height()}, "fast");
}

function contact(){ // CONTACT
  $("html, body").animate({scrollTop : $("#name").offset().top}, "fast");
}
