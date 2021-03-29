console.log("Chrome extension go/");
let paragraphs = document.getElementsByTagName('p');
for (elt of paragraphs){
     elt.style['background-color'] = '#FF00FF';
     elt.style['font-size'] = '80px';
}

var imgs = document.getElementsByTagName("img");
for(var i=0, l=imgs.length; i<l; i++) {
imgs[i].src = "https://www.usnews.com/dims4/USNEWS/8ad72b6/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F3c%2Fe4d17089c08f5056304921b4cdda90%2Fmedia%3Ac76e88a024eb4d2eaf9640f6d01916deBiden_Inauguration_19990.jpg";
}



