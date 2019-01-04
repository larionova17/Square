var slides = document.getElementsByClassName('slide');
var currentSlide = 0;
function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}
var slideInterval = setInterval(nextSlide,3000);
for (i = 0; i < slides.length; i++) {
  slides[i].onmouseover = pauseSlides;
  slides[i].onmouseout = resumeSlides;
}
function pauseSlides() {
  clearInterval(slideInterval);
}
function resumeSlides() {
  slideInterval = setInterval(nextSlide, 3000);
}
function nextSlide() {
  goToSlide(currentSlide+1);
}
function previousSlide() {
  goToSlide(currentSlide-1);
}
var nexts = document.getElementsByClassName('arrow-2');
for (var i = 0; i < nexts.length; i++) {
  var next = nexts[i];
  next.onclick = function() {
    pauseSlides();
    nextSlide() 
  }
}
var previous = document.getElementsByClassName('arrow-1');
for (var i = 0; i < previous .length; i++) {
  var early = previous[i];
  early.onclick = function () {
    pauseSlides();
    previousSlide();
  }
}

function close() {
  var elems1 = document.getElementsByClassName('info');
  for (var i = 0; i < elems1.length; i++) {
    var elem1 = elems1[i];
    elem1.style.width ='67' + 'px';
    elem1.style.height ='67' + 'px';
  }
  var elems2 = document.getElementsByClassName('icon-resize-small');
  for (var i = 0; i < elems2.length; i++) {
    var elem2 = elems2[i];
    elem2.style.display ='none';
    }
  var elems3 = document.getElementsByClassName('info-middle');
  for (var i = 0; i < elems3.length; i++) {
    var elem3 = elems3[i];
    elem3.style.display ='none';
  }
  var elems4 = document.getElementsByClassName('info-bottom');
  for (var i = 0; i < elems4.length; i++) {
    var elem4 = elems4[i];
    elem4.style.display ='none';
  }
  var elems5 = document.getElementsByClassName('icon-resize-full');
  for (var i = 0; i < elems5.length; i++) {
    var elem5 = elems5[i];
    elem5.style.display ='block';
  } 
}
function open() {
  var elems1 = document.getElementsByClassName('info');
  for (var i = 0; i < elems1.length; i++) {
    var elem1 = elems1[i];
    elem1.style.width ='263' + 'px';
    elem1.style.height ='263' + 'px'; 
  }
  var elems2 = document.getElementsByClassName('icon-resize-small');
  for (var i = 0; i < elems2.length; i++) {
    var elem2 = elems2[i]; 
    elem2.style.display ='block'; 
  }
  var elems3 = document.getElementsByClassName('info-middle');
  for (var i = 0; i < elems3.length; i++) {
    var elem3 = elems3[i]; 
    elem3.style.display ='block'; 
  }
  var elems4 = document.getElementsByClassName('info-bottom');
  for (var i = 0; i < elems4.length; i++) {
    var elem4 = elems4[i];
    elem4.style.display ='block'; 
  }
  var elems5 = document.getElementsByClassName('icon-resize-full');
  for (var i = 0; i < elems5.length; i++) {
    var elem5 = elems5[i];
    elem5.style.display ='none'; 
  }
}

window.addEventListener('resize', function(event) {
  if (window.innerWidth < 768) {
    close();
  }
  else {
    open();
  }
}); 

var buttons = document.getElementsByClassName('button-small');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.onclick = close;
}
var buttons = document.getElementsByClassName('button-full');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.onclick = open;
}


function reserve() {
  while(userSurname = prompt('Ваша фамилия: '), userSurname == "") {
    alert('Введите, пожалуйста, Вашу фамилию!');
  }
  if (userSurname == null) {
    return;
  }
  if (userSurname !== "") {
    while(userName = prompt('Ваше имя: '), userName == "") {
      alert('Введите, пожалуйста, Ваше имя!');
    }
  }
  if (userName == null) {
    return;
  }
  if (userName !== "") {
    while(secondName = prompt('Ваше отчество:'), secondName == "") {
      alert('Введите, пожалуйста, Ваше отчество!');
    }
  }
  if (secondName == null) {
    return;
  }
  if (secondName !== "")  {
    while(userEmail = prompt('Ваш e-mail:'), userEmail == "") {
      alert('Введите, пожалуйста, Ваш e-mail!');
    }
  }
  if (userEmail == null) {
    return;
  }
  if (userEmail !== "") {
    alert(userSurname + '  ' + userName + '  ' + secondName + ',' + '  ' + 'регистрация пройдена!\nВся дополнительная информация будет отправлена Вам на e-mail' + '  ' + userEmail + '!');
  }
}