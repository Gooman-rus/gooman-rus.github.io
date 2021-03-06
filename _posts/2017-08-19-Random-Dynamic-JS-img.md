---
layout: post
title: "Вывод случайных изображений динамически через JavaScript"
date: 2017-08-19 15:47
comments: true

description: Вывод случайных изображений динамически через JavaScript и cookie
keywords: javascript, jquery, cookie, изображения, random, случайно
---

В данной статье будет расмотрен способ создания динамических изображений, которые меняются в случайном порядке через определенные промежутки времени.

Для того, чтобы фиксировать период для изменения изображения, будут использоваться cookie браузера. Cookie позволяют хранить локально в браузере клиента небольшие переменные, которые могут быть удалены через определенный период времени.

Требуемые фреймверки:
- jQuery;
- jQuery Cookie.

Предварительно на страницу должен быть добавлен следующий тег, куда будет подставляться изображение:
{% highlight html %}
<div id="dynamic-img"></div>
{% endhighlight %}

Для решения задачи будет использоваться простой JavaScript файл (данный скрипт используется для вывода изображений в левом верхнем углу моего сайта):
{% highlight javascript %}
// список файлов с изображениями
var imgFiles = ['1.jpg', '2.jpg', '3.png'];

// период времени жизни cookie в минутах
var minutes = 2;
var expiryDate = new Date();
expiryDate.setTime(expiryDate.getTime() + (minutes * 60 * 1000));

// чтение текущего значения cookie с названием dynImg
var dynImg = jQuery.cookie('dynImg');

// если значение прочитано, то выводим полученное из cookie изображение
if (dynImg !== undefined) {
    // выводим изображение
    displayImage(dynImg);
} else {
    // иначе вычисляем случайным образом изображение
    var item = imgFiles[Math.floor(Math.random()*imgFiles.length)];  
    // сохраняем его в cookie с названием dynImg
    jQuery.cookie('dynImg', item, { expires: expiryDate });
    // выводим изображение
    displayImage(item);
}

function displayImage(img) {
    jQuery('#dynamic-img').html('<img src="/img/'+ img + '" style="width: 40px; height: 40px;/>')
}
{% endhighlight %}


