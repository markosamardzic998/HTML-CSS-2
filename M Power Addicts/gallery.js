var gallery = document.getElementById('galerija');


function generateGallery() {
    gallery.innerHTML = '<li class="naslovi">Current Full M cars</li>';
    
    for (var i = 0; i < galleryData.CurrentFullMcars.length; i++) {
        gallery.innerHTML += "<img src="+galleryData.CurrentFullMcars[i].img +
        " onclick='showImageFull("+i+")'>"
    }
   
    gallery.innerHTML += '<li class="naslovi">Current M Performance models</li>';
    for (var j = 0; j < galleryData.CurrentMPerformancemodels.length; j++) {
       gallery.innerHTML += "<img src="+galleryData.CurrentMPerformancemodels[j].img +
       " onclick='showImagePerf("+j+")'>";
   }
}
generateGallery();


function showImageFull(pos) {
    document.getElementById('cover').style.display = "block";
    if (pos == galleryData.CurrentFullMcars.length - 1)
        document.getElementById('cover').innerHTML = "<img src="+galleryData.CurrentFullMcars[pos].img+" onclick='showImageFull("+0+")'>" +
        "<a href="+galleryData.CurrentFullMcars[pos].wiki+"> detaljnije</a>";
    else 
        document.getElementById('cover').innerHTML = "<img src="+galleryData.CurrentFullMcars[pos].img+" onclick='showImageFull("+(pos+1)+")'>" +
        "<a href="+galleryData.CurrentFullMcars[pos].wiki+"> detaljnije</a>";
}



function showImagePerf(pos) {
    document.getElementById('cover').style.display = "block";
    if (pos == galleryData.CurrentMPerformancemodels.length - 1)
        document.getElementById('cover').innerHTML = "<img src="+galleryData.CurrentMPerformancemodels[pos].img+" onclick='showImagePerf("+0+")'>" +
        "<a href="+galleryData.CurrentMPerformancemodels[pos].wiki+"> detaljnije</a>";
        
    else 
        document.getElementById('cover').innerHTML = "<img src="+galleryData.CurrentMPerformancemodels[pos].img+" onclick='showImagePerf("+(pos+1)+")'>" +
        "<a href="+galleryData.CurrentMPerformancemodels[pos].wiki+"> detaljnije</a>";
}


document.onkeydown = function(evt) {
    if (evt.keyCode == 27) {
        document.getElementById('cover').style.display = "none";
    }
};

