function save()
{
  var Texte = document.getElementById('ta');
  alert(Texte.value);
  var a = document.getElementById("download");
  var file = new Blob([Texte.value], {type: 'text/plain'});
  a.href = URL.createObjectURL(file);
  a.download = 'plainte.txt';
}