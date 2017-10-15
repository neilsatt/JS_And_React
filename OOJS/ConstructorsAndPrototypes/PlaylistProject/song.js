function Song(title, artist, duration) {
    Media.call(this, title, duration); // define this
    this.artist = artist;
}

//  Set up prototype chain (Creates inheritance in JS)
//  This copies the Properties and Methods references (from the Media's prototype), 
//  to the song's prototype.
Song.prototype = Object.create(Media.prototype); 


Song.prototype.toHTML = function() {
  var htmlString = '<li';
    if(this.isPlaying) {
       htmlString += ' class="current"';
    }
      htmlString += '>';
      htmlString += this.title;
      htmlString += ' - ';
      htmlString += this.artist;
      htmlString += '<span class="duration">';
      htmlString += this.duration;
      htmlString += '</span></li>';
    
       return htmlString;
};