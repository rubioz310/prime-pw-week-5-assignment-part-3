console.log('***** Music Collection *****')

let collection = [];

function addCollection( title, artist, yearPublished ){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}
