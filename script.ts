document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    //type assertion
    const profileElement=document.getElementById('profile') as HTMLInputElement;
    const firstElement= document.getElementById('firstname') as HTMLInputElement;
    const LastElement= document.getElementById('lastname') as HTMLInputElement;
    const emailElement=document.getElementById('email') as HTMLInputElement;
    const contactElement=document.getElementById('contactnumber') as HTMLInputElement;
    const educationElement=document.getElementById('education') as HTMLInputElement;
    const experienceElement=document.getElementById('experience')as HTMLInputElement;
    const skillsElement=document.getElementById('skills')as HTMLInputElement;

    if(profileElement && firstElement && LastElement && emailElement && contactElement&& educationElement&& experienceElement&&skillsElement){
        const profile= profileElement.value;
        const firstname=firstElement.value;
        const lastname=LastElement.value;
        const email=emailElement.value;
        const contactnumber=contactElement.value;
        const education=educationElement.value;
        const experience=experienceElement.value;
        const skills=skillsElement.value;

     const resumeOutput =`
     <h2>Resume</h2>
     <p><strong>First Name:</strong>${firstname}</P>
     <p><strong>Last Name:</strong>${lastname}</p>
     <p><strong>Email:</strong>${email}</p>
     <p><strong>Contact Number>${contactnumber}</p>

     <h3>Education</h3>
     <p> ${education}</P>
      <h3>Experience</h3>
     <p> ${experience}</P>
      <h3>Skills</h3>
     <p> ${skills}</P>
     `;

     const resumeOutputElement=document.getElementById('resumeOutput')
     if(resumeOutputElement){
        resumeOutputElement.innerHTML=resumeOutput
     } else{
        console.error('the resume output elements are missing')
     }
    }else{
        console.error('one or more output elements are missing')
    }
      
    


     

}
)