var imgFiles = ['1.jpg', '2.jpg', '3.png'];
var minutes = 2;

var expiryDate = new Date();
expiryDate.setTime(expiryDate.getTime() + (minutes * 60 * 1000));

var dynImg = jQuery.cookie('dynImg');
if (dynImg !== undefined) {
    displayImage(dynImg);
} else {
    var item = imgFiles[Math.floor(Math.random()*imgFiles.length)];    
    jQuery.cookie('dynImg', item, { expires: expiryDate });
    displayImage(item);
}

function displayImage(img) {
    jQuery('#dynamic-img').html('<img src="/img/'+ img + '" class="rounded-circle" style="width: 40px; height: 40px;"/>')
}