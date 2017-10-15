function Movie(title, year, duration) {
    Media.call(this, title, duration);
    this.year = year;

}

Movie.prototype.play = function() {
  this.isPlaying = true;
};

Movie.prototype.stop = function() {
   this.isPlaying = false;
};

Movie.prototype.toHTML = function() {
  var htmlString = '<li';
    if(this.isPlaying) {
       htmlString += ' class="current"';
    }
      htmlString += '>';
      htmlString += this.title;
      htmlString += ' (';
      htmlString += this.year;
      htmlString += ') ';
      htmlString += '<span class="duration">';
      htmlString += this.duration;
      htmlString += '</span></li>';
    
       return htmlString;
};