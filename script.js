/*SLIDESHOW*/
//selectors
//firstsemester
var FirstSemesterPage = document.querySelector(".first-semester-page");
var FirstSemesterSlide = document.querySelector(".first-semester");

//secondsemester
var SecondSemesterPage = document.querySelector(".second-semester-page");
var SecondSemesterSlide = document.querySelector(".second-semester");

//firstsemester
var ThirdSemesterPage = document.querySelector(".third-semester-page");
var ThirdSemesterSlide = document.querySelector(".third-semester");

//firstsemester
var FourthSemesterPage = document.querySelector(".fourth-semester-page");
var FourthSemesterSlide = document.querySelector(".fourth-semester");

//firstsemester
var FaqPage = document.querySelector(".faq-page");
var FaqSlide = document.querySelector(".faq");

//modal


/*FIRST MODAL*/
function openModalOne(){

	document.querySelector(".box-one-modal").classList.remove("hide");

	}

function closeModalOne(){

	document.querySelector(".box-one-modal").classList.add("hide");

}

document.querySelector(".box-one-modal").addEventListener("click", closeModalOne);
document.querySelector(".box-one").addEventListener("click", openModalOne);


/*SECOND MODAL*/

function openModalTwo(){

	document.querySelector(".box-two-modal").classList.remove("hide");

	}

function closeModalTwo(){

	document.querySelector(".box-two-modal").classList.add("hide");

}

document.querySelector(".box-two-modal").addEventListener("click", closeModalTwo);
document.querySelector(".box-two").addEventListener("click", openModalTwo);



/*THIRD MODAL*/

function openModalThree(){

	document.querySelector(".box-three-modal").classList.remove("hide");

	}

function closeModalThree(){

	document.querySelector(".box-three-modal").classList.add("hide");

}

document.querySelector(".box-three-modal").addEventListener("click", closeModalThree);
document.querySelector(".box-three").addEventListener("click", openModalThree);



/*FORUTH MODAL*/

function openModalFour(){

	document.querySelector(".box-four-modal").classList.remove("hide");

	}

function closeModalFour(){

	document.querySelector(".box-four-modal").classList.add("hide");

}

document.querySelector(".box-four-modal").addEventListener("click", closeModalFour);
document.querySelector(".box-four").addEventListener("click", openModalFour);


/*FIFTH MODAL*/

function openModalFive(){

	document.querySelector(".box-five-modal").classList.remove("hide");

	}

function closeModalFive(){

	document.querySelector(".box-five-modal").classList.add("hide");

}

document.querySelector(".box-five-modal").addEventListener("click", closeModalFive);
document.querySelector(".box-five").addEventListener("click", openModalFive);



/*SIXTH MODAL*/


function openModalSix(){

	document.querySelector(".box-six-modal").classList.remove("hide");

	}

function closeModalSix(){

	document.querySelector(".box-six-modal").classList.add("hide");

}

document.querySelector(".box-six-modal").addEventListener("click", closeModalSix);
document.querySelector(".box-six").addEventListener("click", openModalSix);







var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*SLIDESHOW*/

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");

	if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

	showPages();


}


/*PAGES*/

/*

function showPages(data){

//1.sem
if(FirstSemesterSlide.style.display == "block"){

  FirstSemesterPage.style.display="flex"


	} else {

		FirstSemesterPage.style.display = "none"

	}

//2.sem

	if(SecondSemesterSlide.style.display == "block"){

  SecondSemesterPage.style.display="flex"


	} else {

		SecondSemesterPage.style.display = "none"

	}

//3.sem

	if(ThirdSemesterSlide.style.display == "block"){

  ThirdSemesterPage.style.display="flex"


	} else {

		ThirdSemesterPage.style.display = "none"

	}

//4.sem

	if(FourthSemesterSlide.style.display == "block"){

  FourthSemesterPage.style.display="flex"


	} else {

		FourthSemesterPage.style.display = "none"

	}

	//faq

	if(FaqSlide.style.display == "block"){

  FaqPage.style.display="flex"


	} else {

		FaqPage.style.display = "none"

	}




}



*/




/*END OF SLIDESHOW*/


/*MODAL*/


