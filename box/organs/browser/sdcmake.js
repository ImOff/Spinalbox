function intensite_manuelle()
{
  var intensite_manuelle = document.getElementById("intensite_manuelle").value;
  var ampoule = document.getElementById("ampoule");
  var lux = document.getElementById("lux");

  if(intensite_manuelle > 0){
    ampoule.setAttribute('style', '-webkit-filter: drop-shadow(0px 10px '+ intensite_manuelle * 20 + 'px white); filter: drop-shadow(0px 10px ' + intensite_manuelle * 20 + 'px white)');
    lux.setAttribute('style', 'opacity:'+ intensite_manuelle);
  }
  else {
    ampoule.setAttribute('style', '');
    lux.setAttribute('style', 'opacity:0')
  }
}

function intensite_automatique()
{
  var intensite_automatique = document.getElementById("intensite_automatique");
  var intensite_manuelle = document.getElementById("div_intensite_manuelle");

  if (intensite_automatique.checked == true) {
    intensite_manuelle.style.visibility = "hidden";

  }
  else{
    intensite_manuelle.style.visibility = "initial";

  }
}
