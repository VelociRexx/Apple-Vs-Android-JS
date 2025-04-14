// Changing Attributes in JS Apple vs Android

document.getElementById("android").addEventListener("click", show_android);

function show_android() {
  document.getElementById("logo").src = "img/Android-Logo.jpg";
  document.getElementById("explore").innerHTML = "Android Home";
  document.getElementById("link").href = "https://android.com";
  document.getElementById("explore").style.background = "#a4c93b";
  document.getElementById("explore").style.border = "3px solid #a4c93b";
  document.getElementById("page").style.background = "#a4c93b";
  //Font Family - add later
  document.getElementById("explore").style.fontFamily =
    "'Courier New', Courier, monospace";
  //Active Button
  document.getElementById("android").classList.add("active");
  document.getElementById("apple").classList.remove("active");
  /*
  alert(document.getElementById("android").classList);
  alert(document.getElementById("apple").classList);
  */
}

document.getElementById("apple").addEventListener("click", show_apple);

function show_apple() {
  document.getElementById("logo").src = "img/Apple-Logo.jpg";
  document.getElementById("explore").innerHTML = "Apple Home";
  document.getElementById("link").href = "https://apple.com";
  document.getElementById("explore").style.background = "#b6bcca";
  document.getElementById("explore").style.border = "3px solid #b6bcca";
  document.getElementById("page").style.background = "#b6bcca";
  //Font Family
  document.getElementById("explore").style.fontFamily =
    "'Courier New', Courier, monospace";
  //Active Button
  document.getElementById("apple").classList.add("active");
  document.getElementById("android").classList.remove("active");
  /*
  alert(document.getElementById("apple").classList);
  alert(document.getElementById("android").classList);
  */
}

document.getElementById("back").addEventListener("click", show_normal);

function show_normal() {
  document.getElementById("logo").src = "img/Android-vs-Apple.jpg";
  document.getElementById("explore").innerHTML = "Explore the Debate";
  document.getElementById("link").href =
    "https://www.computerworld.com/article/1341378/iphone-vs-android-which-is-better-for-you.html";
  document.getElementById("explore").style.background = "#c9793b";
  document.getElementById("explore").style.background = "3px solid #925322";
  document.getElementById("explore").style.border = "3px solid #c9793b";
  document.getElementById("page").style.background = "#cabfb6";
  //Font Family
  document.getElementById("explore").style.fontFamily =
    "'Times New Roman', Times, serif";
  //Active Button
  document.getElementById("apple").classList.remove("active");
  document.getElementById("android").classList.remove("active");
}
