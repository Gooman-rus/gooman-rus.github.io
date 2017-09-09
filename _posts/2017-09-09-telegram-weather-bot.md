---
layout: post
title: "Бот с прогнозом погоды в Telegram"
date: 2017-09-09 18:02
comments: true

description: Бот для получения прогноза погоды в Telegram
keywords: telegram, bot, chat, weather, forecast, прогноз, погоды, телеграм, бот
---
Хочу представить своего бота Telegram под названием [TheLair Weather](https://storebot.me/bot/thelairbot "Прогноз погоды Telegram bot"), который позволяет получить прогноз погоды на 5 дней в виде красивых и подробных графиков.

<center><img src="{{site.baseurl}}/posts-images/morning-rain.png" alt="TheLair Weather"/></center>

Данная разработка зародилась еще давно, когда я купил себе мини компьютер OrangePi Zero. Сначала я хотел сделать управление торрент менеджером Transmission на OrangePi Zero через бота. Однако впоследствии я предпочел разработать бота, который выводит прогноз погоды. 
Тогда я уже некоторое время использовал сайт windy.tv, чтобы смотреть прогноз погоды, в частности, я пользовался метеограммами. Это прогноз погоды на 5 дней с графиками температуры, осадков и скорости ветра. Но windy.tv решили развиваться и не использовать сторонние сервисы (meteoblue.com) для отображения метеограммы. Поэтому они сделали свой вид метеограммы, который похож на то, что было раньше, но, все-таки, прошла версия мне нравилась больше.

<center>**Новая версия метеограммы:**</center>
<center><img src="{{ site.url }}/posts-images/new.png" alt="Метеограмма windy.tv"/></center>
<br/>
<center>**Старая версия метеограммы:**</center>
<center><img src="{{ site.url }}/posts-images/old.jpg" alt="Метеограмма meteoblue.com"/></center>

Лично мне больше нравится вторая версия. Хотя, если бы windy.tv предоставляли API для получения метеограммы виде изображения, я бы это тоже добавил в бота. Но, к сожалению, они такого не предоставляют.
В связи с этим мне пришла идея создать бота, который будет выводить старые метеограммы. Благо, windy.tv использовало бесплатную версию метеограмм с сайта meteoblue.com. Бот долгое время работал для личных целей дома на OrangePi Zero. Однако OrangePi Zero имеет плохой Wi-Fi, а по проводу я подсоединяться не хотел. В связи этим, чтобы не морочить голову постоянными перезагрузками «апельсинового» сервера, я решил арендовать выделенный VDS сервер. Купил минимальный тариф и запустил там бота. 

После этого я загорелся идеей усовершенствовать бота и сделать его открытым для всех желающих. И усовершенствовал. Теперь он может хранить до трех включительно местоположений. Местоположения можно редактировать и удалять.
В качестве языка программирования был использован Python 2.7. 

<center><img src="{{ site.url }}/posts-images/bot.png" alt="Чат с ботом"/></center>

Сама метеограмма отправляется ботом в виде фотографии. Имеется поддержка английского и русского языков. Можно выставить мили в час и градусы в Фаренгейтах. 
Кроме того, Telegram Bot API предоставляет возможность отослать пользователю карту с отмеченным на нем местоположением. Именно этим я и воспользовался, чтобы выводить заданное пользователем местоположение на карте. Это позволяет наглядно проверить, как бот определил координаты по названию местоположения, которое задал пользователь.

В общем, приглашаю всех любителей прогнозов погоды и графиков пользоваться моим ботом. В комментариях ниже можно писать об ошибках или новых идеях.