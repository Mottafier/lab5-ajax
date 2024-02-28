
function loadHTMLFile(filePath) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', filePath, true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            document.getElementById("details").innerHTML  = "<p>HIIII</p>"
        };
    };

    // Send the request
    xhr.send();
}

function image_opacity(){
    var images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++){
        images[i].style.opacity = 0.5;
    }
}

//document.getElementById("details").innerHTML = xhr.responseText;
var donQuixoteImage = document.getElementById("don-quixote-img");
donQuixoteImage.addEventListener("click", function() {
    image_opacity();
    donQuixoteImage.style.opacity = 1.0;
    loadHTMLFile("data/cervantes-data.html")
});

var lotrImg = document.getElementById("lotr-img");
lotrImg.addEventListener("click", function() {
    image_opacity();
    lotrImg.style.opacity = 1.0;
    loadHTMLFile("data/tolkien-data.html")
});

var twoCitiesImg = document.getElementById("two-cities-img");
twoCitiesImg.addEventListener("click", function() {
    image_opacity();
    twoCitiesImg.style.opacity = 1.0;
    loadHTMLFile("data/dickens-data.html")
});