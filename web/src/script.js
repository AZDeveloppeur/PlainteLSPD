/*function save()
{
  var Texte = document.getElementById('text');
  alert(Texte.value);
  var a = document.getElementById("download");
  var file = new Blob([Texte.value], {type: 'text/plain'});
  a.href = URL.createObjectURL(file);
  a.download = 'plainte.txt';
}*/

function send() {
  var Texte = document.getElementById('text').value;
  fetch(`http://az_framework/plainte_send`, {
    method: 'POST',
    body: JSON.stringify({
      text : Texte
    })
  })
}