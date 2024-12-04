var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var profileElement = document.getElementById('profile');
    var firstElement = document.getElementById('firstname');
    var LastElement = document.getElementById('lastname');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contactnumber');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profileElement && firstElement && LastElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        var profile = profileElement.value;
        var firstname = firstElement.value;
        var lastname = LastElement.value;
        var email = emailElement.value;
        var contactnumber = contactElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "\n     <h2>Resume</h2>\n     <p><strong>First Name:</strong>".concat(firstname, "</P>\n     <p><strong>Last Name:</strong>").concat(lastname, "</p>\n     <p><strong>Email:</strong>").concat(email, "</p>\n     <p><strong>Contact Number>").concat(contactnumber, "</p>\n\n     <h3>Education</h3>\n     <p> ").concat(education, "</P>\n      <h3>Experience</h3>\n     <p> ").concat(experience, "</P>\n      <h3>Skills</h3>\n     <p> ").concat(skills, "</P>\n     ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
