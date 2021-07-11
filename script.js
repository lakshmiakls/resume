const resume = document.getElementById("wrapper");
const button = document.getElementById('button');
const popUpWrapper = document.querySelector('.pop-up-wrapper');
console.log(popUpWrapper, button);
console.log(2)

function generatePdf () {
    html2pdf(resume, opt);
    popUpWrapper.style.display = "block";
}

const opt = {
    margin: 0,
    filename: "myResume.pdf",
    image: { type: 'jpeg', quality: 0.98},
    html2canvas: { scale: 4},
    jsPDF: { format: 'a4', orientation:  'portrait'}
}

button.addEventListener('click', generatePdf);

window.onclick = function(event) {
    if (event.target == popUpWrapper) {
        popUpWrapper.style.display = "none";
    }
}
