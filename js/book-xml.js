
function loadXMLFile() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', "data/book-data.xml", true);

    xhr.onload = function(index) {
        if (xhr.status >= 200 && xhr.status < 300) {
            
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");

            document.getElementById("details").innerHTML = xmlDoc.getElementsByTagName("book")[index].innerHTML
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

var donQuixoteImage = document.getElementById("don-quixote-img");
donQuixoteImage.addEventListener("click", function() {
    image_opacity();
    donQuixoteImage.style.opacity = 1.0;
    loadXMLFile(0)
});

var lotrImg = document.getElementById("lotr-img");
lotrImg.addEventListener("click", function() {
    image_opacity();
    lotrImg.style.opacity = 1.0;
    loadXMLFile(1)
});

var twoCitiesImg = document.getElementById("two-cities-img");
twoCitiesImg.addEventListener("click", function() {
    image_opacity();
    twoCitiesImg.style.opacity = 1.0;
    loadXMLFile(2)
});