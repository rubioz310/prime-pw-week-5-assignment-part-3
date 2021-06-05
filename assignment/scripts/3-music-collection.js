console.log('***** Music Collection *****')

let collection = [];
//Function that adds an album to the collection
function addCollection( title, artist, yearPublished ){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}
//Test's for addCollection function
console.log(addCollection('Finisterra', 'Mago de oz', '2000'));
console.log(addCollection('Beerserkers', 'Lepoka', '2016'));
console.log(addCollection('No Grave But the Sea', 'Alestorm', '2017'));
console.log(addCollection('Karkelo', 'Korpiklaani', '2009'));
console.log(addCollection('Buiikikaesu', 'Maximum the Hormone', '2007'));
console.log(addCollection(`The Warrior's Code`,'Dropkick Murphys', '2005'));
console.log(collection);
// Function that list all albums in the collection
function showCollection(thisCollection){
  console.log(thisCollection.length);
  for(let thisAlbum of thisCollection){
    console.log(`${thisAlbum.title} by ${thisAlbum.artist}, published in ${thisAlbum.yearPublished}`);
  }
}
//Calling previous function
showCollection(collection);
