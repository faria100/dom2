//variable

//const accordion = document.getElementsByClassName('content-container');

//for(i = 0 ; i < accordion.length; i++){

    //accordion[i].addEventListener('click', function () {
        //accordion.classList.toggle('active');
    //})
    
//};


document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            // Toggle the active class on the parent content-container
            this.parentElement.classList.toggle("active");

            // Optional: Close other open answers if needed
            // questions.forEach(otherQuestion => {
            //     if (otherQuestion !== this) {
            //         otherQuestion.parentElement.classList.remove("active");
            //     }
            // });
        });
    });
});
