var chico = ["Upper Park", "Bidwell Mansion", "One Mile", "Sierra Nevada Brewery", "20th Street Park"];
var current;

function shuffleGallery() {
  do {
    var randIndex = (Math.floor(Math.random() * 100) % chico.length);
  } while (chico[randIndex] == current)
  current = chico[randIndex];
  console.log(chico[randIndex]);
}
