var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // manejar la respuesta aquí
  }
};
xhttp.open("GET", "https://api.rest.com/producto?id=1", true);
xhttp.send();
