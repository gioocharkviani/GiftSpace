const boxAstylechanger = document.querySelector(".main-page-boxA");
const boxBstylechanger = document.querySelector(".main-page-boxB");
const sideA = document.querySelector(".sideA");
const sideB = document.querySelector(".sideB");
const CenterBorder = document.querySelector(".Center-Border");


boxAstylechanger.addEventListener('click' , (e) =>{
    sideA.style = 'width:100%';
    sideB.style = 'width:0%';
    CenterBorder.style = 'display:none ';
    setTimeout(() => {
        sideB.style = 'display:none ';
        CenterBorder.style = 'display:none ';
      }, "1000")
})

boxBstylechanger.addEventListener('click' , (e) =>{
    sideB.style = 'width:100%';
    sideA.style = 'width:0%';
    CenterBorder.style = 'display:none ';
    setTimeout(() => {
        sideA.style = 'display:none ';
      }, "1000")
})