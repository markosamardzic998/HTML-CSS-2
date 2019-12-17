var sliderImages = [
    '../Images/contact.jpg',
    '../Images/registration.jpg',
    '../Images/firstpage.jpg'
]
var i = 0;
setInterval(function() {
    var slider = document.getElementById('slider');
    slider.innerHTML = "<img src="+sliderImages[i]+">";
    if (i == sliderImages.length - 1)
        i=0;
    else i++;
},2000)

