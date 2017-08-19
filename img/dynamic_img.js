var imgNames = ["1.jpg", "2.jpg"];

var imgName = Cookies.get('dynImg');

if (imgName !== undefined) {
    displayImage(img);
} else {
    var item = imgNames[Math.floor(Math.random()*imgNames.length)];    
    Cookies.set('dynImg', item, { expires: 0 });
    displayImage(item);
}

function displayImage(img) {
    jQuery('#dynamic-img').html('<img src="img/'+ img + '" class="rounded-circle" style="width: 40px; height: 40px;"/>')
}