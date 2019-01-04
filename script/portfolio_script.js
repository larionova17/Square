$(document).ready(function() { // Ждём загрузки страницы
  $(".img").click(function() { 
    var img = $(this).find('img'); // Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки*/
	  $("main").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
                      "<img src="+src+" class='popup_img' />"+ // Само увеличенное фото
                      "<div class='close-popup'><i class='icon icon-cancel'></i></div>" +
                      "</div>"); 
    $(".close-popup").append("<i class='icon icon-cancel'></i>");
	  $(".popup").fadeIn(800); // Медленно выводим изображение
		$(".icon-cancel").click(function() {	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку высплывающего окна
        }, 800);
    });
	});
});