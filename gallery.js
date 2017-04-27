var chico = [];
var current;

function chicoLocation(des, pic, srcDom) {
  this.description = des;
  this.picture = pic;
  this.from = srcDom;
}

function addToArrayChico(des, pic, srcDom) {
  var temp = new chicoLocation(des, pic, srcDom);
  chico.push(temp);
}

chico[0] = new chicoLocation("Upper Park", "http://www.csuchico.edu/our-region/about-town/images/bidwell1.jpg", "csuchico.edu");
chico[1] = new chicoLocation("Bidwell Mansion", "https://www.parks.ca.gov/pages/460/images/BidwellMansion%20002.jpg","parks.ca.gov");
chico[2] = new chicoLocation("One Mile", "https://s-media-cache-ak0.pinimg.com/736x/ed/8c/9d/ed8c9d06c598f8e60c0edb2fe0a1a83e.jpg", "pinterest.com");
chico[3] = new chicoLocation("Sierra Nevada Brewery", "http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_SI_T4_SierraNevadaBrewing_1280x642.jpg", "visitcalifornia.com");
chico[4] = new chicoLocation("20th Street Park", "http://www.chicorealestate.net/area_photos/park/community_park-xl7302_19_3_51.jpg", "chicorealestate.net");

function shuffleGallery() {
  do {
    var randIndex = generateRandomIndex();
  } while (chico[randIndex] == current)
  current = chico[randIndex];
  console.log(chico[randIndex]);
}

function generateRandomIndex() {
  return  Math.floor(Math.random() * chico.length);
}
