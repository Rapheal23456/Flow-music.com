function myToggle(){
    let element = document.getElementById("toggle");
    if(element.style.backgroundColor === "black"){
        element.style.backgroundColor = "rgba(194, 150, 150,0.98)";
        element.style.color = "white";
    } else{
        element.style.backgroundColor = "black";
        element.style.color = "white";
    }
}
function addFunction(){
   let element = document.getElementById("nav-bar");
    if(element.style.backgroundColor === "grey"){
        element.style.backgroundColor = "rgba(233, 126, 126, 0.881)";
        element.style.color = "white";
    } else{
        element.style.backgroundColor = "grey";
        element.style.color = "white";
    }  
}
function linkFunction(link){
    let body = document.getElementById("toggle");
    if(body.style.backgroundColor === "black"){
        link.style.color = "#172554";
    }
}
function linkOut(){
    let links = document.getElementsByTagName("a");
    let i=0;
    while(i < links.length){
        links[i].style.color = "";
        i++;
    }
}