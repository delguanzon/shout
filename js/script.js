window.onload = function() {
  const form = document.querySelector("form");
  const divText = document.querySelector("div#text");
  const divImg = document.querySelector("div#img-container");
  let f = 35;

  form.onsubmit =  function(event) {
    event.preventDefault();
    divImg.innerHTML = "";  
    const text = document.getElementById("words").value;
    console.log(text);
    divText.innerHTML = "<br>" + text.toUpperCase();
    divImg.innerHTML += "<div id=\"shout-img\"></div>"
    increaseFontSize();
  };

  function increaseFontSize() {    
    f+=10;
    divText.style.fontSize = f +"px";
  };
};

