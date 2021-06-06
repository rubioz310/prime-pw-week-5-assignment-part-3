console.log('***** Music Collection *****')

let collection = [];
//Function that adds an album to the collection
function addCollection( title, artist, yearPublished, tracks ){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks //Stretch goal
  };
  collection.push(album);
  return album;
}
//Test's for addCollection function. Stretch goal tracks added
console.log(addCollection('La ciudad de los arboles', 'Mago de oz', '2007', [{name: 'El espíritu del bosque', duration: '1:46'},{name: 'La ciudad de los árboles', duration: '6:02'},{name: 'Mi nombre es rock n roll',	duration: '6:03'}]));
console.log(addCollection('Flokoholic Metal', 'Lepoka', '2014', [{name: 'Folkoholic Metal', duration: '3:26'}, {name: 'Réquiem natura', duration: '6:57'}, {name: 'Orfeo', duration: '7:19'}]));
console.log(addCollection('No Grave But the Sea', 'Alestorm', '2017', [{name: 'No Grave But the Sea', duration: '3:30'},{name: 'Mexico', duration: '3:10'},{name: 'To the End of the World', duration: '6:43'}]));
console.log(addCollection('Jesus de Chamberi', 'Mago de oz', '1996', [{name: 'Génesis', duration: '1:04'},{name: 'Jesús de Chamberí', duration: '7:33'},{name: 'El Ángel Caído', duration: '5:06'}]));
console.log(addCollection('Buiikikaesu', 'Maximum the Hormone', '2007', [{name: 'Bu-ikikaesu!!', duration: '3:54'},{name: 'Zetsubōu Billy', duration: '3:44'},{name: `Kuso Breakin' Nō Breakin' Lily`, duration: '4:16'}]));
console.log(addCollection('Sunset of the Golden Age', 'Alestorm', '2014', [{name: 'Walk the Plank', duration: '4:07'},{name: 'Drink', duration: '3:23'},{name: 'Magnetic North', duration: '3:47'}]));
console.log(collection);

// Function that list all albums in the collection
function showCollection(thisCollection){
  console.log(thisCollection.length);
  //Loop for all albums in collection
  for(let thisAlbum of thisCollection){
    console.log(`${thisAlbum.title} by ${thisAlbum.artist}, published in ${thisAlbum.yearPublished}:`);
    //This will list all tracks of current album. Stretch goal
    let i=1;
    for(let track of thisAlbum.tracks){
      console.log(`${i}. ${track.name}: ${track.duration}`);
      i++;
    }
  }
}
//Calling previous function
console.log('***** Showing all collection *****');
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

//Function that searchs all albumes with the matching criteria
function search( searchCriteria ){
  //If searchCriteria is empty it will show all the collection
  if( !searchCriteria ) { return collection }

  //Variables initialization
  let artist = searchCriteria.artist;
  let year = searchCriteria.year;
  let trackName = searchCriteria.trackName;
  let searchArray = [];

  //If artist, year and trackName are all null show all collection
  if ( !artist && !year && !trackName){ return collection; }

  //Loop for all albums in collection
  for(let thisAlbum of collection){
    if (artist && year){//If artist and year are both not null
      if( thisAlbum.artist === artist && thisAlbum.yearPublished === year){
        searchArray.push(thisAlbum);
      }
    }else {//If artist or year is null but not both
      if( thisAlbum.artist === artist || thisAlbum.yearPublished === year){
        searchArray.push(thisAlbum);
      }
    }
    //Loop for all tracks in current album. Stretch goal
    for ( let thisAlbumTrack of thisAlbum.tracks){
      //If an album with the searched song is found this will save the album to searchArray
      //while avoiding doing so if it is already in searchArray
      if ( thisAlbumTrack.name == trackName && !repeatedAlbum(searchArray, thisAlbum)){
        searchArray.push(thisAlbum);
      }
    }
  }

  return searchArray;
}

//Testing of search function
console.log('***** Albums by artist and year *****')
console.log(search( {artist: 'Mago de oz', year: '2007', trackName: 'La ciudad de los árboles'} ));
console.log(search( {artist: 'Maximum the Hormone', year: '2017'} ));
console.log(search( {artist: null, year: '2014'} ));
console.log(search( {artist: 'Alestorm', year: null} ));
console.log(search( {artist: null, year: '', trackName: 'Orfeo'} ));
console.log(search());

//Extra function to see if an album is inside an array.
function repeatedAlbum( array, album){
  for (let thisAlbum of array){
    if (thisAlbum==album){return true;}
  }
  return false;
}
