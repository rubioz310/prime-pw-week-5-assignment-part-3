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
console.log(addCollection('La ciudad de los arboles', 'Mago de oz', '2007'));
console.log(addCollection('Flokoholic Metal', 'Lepoka', '2014'));
console.log(addCollection('No Grave But the Sea', 'Alestorm', '2017'));
console.log(addCollection('Jesus de Chamberi', 'Mago de oz', '1996'));
console.log(addCollection('Buiikikaesu', 'Maximum the Hormone', '2007'));
console.log(addCollection('Sunset of the Golden Age', 'Alestorm', '2014'));
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
console.log('***** Albums by artist *****')
console.log(findByArtist('Mago de oz'));
console.log(findByArtist('Korpiklaani'));
console.log(findByArtist('Lepoka'));
console.log(findByArtist());

function search( searchCriteria ){
  if( !searchCriteria ) { return collection }
  let artist = searchCriteria.artist;
  let year = searchCriteria.year;
  if ( !artist && !year ){ return collection; }

  let searchArray = [];
  for(let thisAlbum of collection){
    if( thisAlbum.artist === artist ||  thisAlbum.yearPublished === year){
      searchArray.push(thisAlbum);
    }
  }
  return searchArray;
}
console.log('***** Albums by artist and year *****')
console.log(search( {artist: 'Mago de oz', year: '2007'}));
console.log(search( {artist: 'Alestorm', year: '2017'}));
console.log(search( {artist: '', year: '2014'}));
console.log(search( {artist: 'Lepoka', year: ''}));
console.log(search( {artist: '', year: ''}));
console.log(search());
