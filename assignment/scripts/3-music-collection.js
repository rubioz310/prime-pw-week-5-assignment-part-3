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
console.log(addCollection('Jesus de Chamberi', 'Mago de oz', '1996'));
console.log(addCollection('Buiikikaesu', 'Maximum the Hormone', '2007'));
console.log(addCollection('Back Through Time', 'Alestorm', '2011'));
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
//Function that finds all albums by the given artist
function findByArtist(artist){
  let artistAlbums = [];
  for( let thisAlbum of collection ){
    if ( thisAlbum.artist === artist ){
      artistAlbums.push(thisAlbum);
    }
  }
  return artistAlbums;
}
//Testing of findByArtist function
console.log(findByArtist('Mago de oz'));
console.log(findByArtist('Korpiklaani'));
console.log(findByArtist('Lepoka'));
