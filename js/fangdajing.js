 var box = document.getElementById("box1");
  var img1 = document.getElementById("img1");
  var Simg = document.getElementById("Simg");
  var slider = document.getElementById("slider");
  var img2 = document.getElementById("img2");
  var Bimg = document.getElementById("Bimg");

  img1.onmouseover = function(){
    slider.style.display = "block";
    img2.style.display = "block";
  }

  img1.onmousemove = function(e){
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var boxLeft = box.offsetLeft;
    var boxTop = box.offsetTop;
    var sliderWidth = slider.offsetWidth;
    var sliderHeight = slider.offsetHeight;
    var sliderLeft = mouseX - boxLeft - sliderWidth/2;
    var sliderTop = mouseY - boxTop - sliderHeight/2;

    if(sliderLeft<=0){
      sliderLeft = 0;
    }
    else if(sliderLeft>=(img1.offsetWidth - slider.offsetWidth)){
      sliderLeft = img1.offsetWidth - slider.offsetWidth;
    }

    if(sliderTop<=0){
      sliderTop =0;
    }
    else if(sliderTop>=(img1.offsetHeight - slider.offsetHeight)){
      sliderTop = img1.offsetHeight - slider.offsetHeight;
    }
    slider.style.left = sliderLeft + "px";
    slider.style.top = sliderTop + "px";

    var percent = Bimg.offsetWidth/Simg.offsetWidth;
    Bimg.style.left = (-sliderLeft*percent) +"px";
    Bimg.style.top = (-sliderTop*percent) + "px";

  }