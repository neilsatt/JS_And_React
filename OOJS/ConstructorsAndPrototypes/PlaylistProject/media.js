function Media(title, duration) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = false; // default
}

Media.prototype.play = function() {
  this.isPlaying = true;
};

Media.prototype.stop = function() {
   this.isPlaying = false;
};