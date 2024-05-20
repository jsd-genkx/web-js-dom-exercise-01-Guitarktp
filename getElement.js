//Call function changetext() from html file then change text to "hello javascript" 
function changeText() {
    let elementH2 = document.getElementById("Heading");
    elementH2.innerText = "Hello Java Script InnerHTML";
    document.body.style.backgroundColor = "pink";

}

//Call function reload for reset button()
function reloadPage() {
	window.location.reload();
}



