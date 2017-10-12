var playlist = new Playlist();

var here = new Song("Here", "The Bubs", "2:54");
var whyNow = new Song("Why Now", "Hibby Town", "4:54");
var sideways = new Song("Sideways", "The Ranchers", "3:34");

playlist.add(here);
playlist.add(whyNow);
playlist.add(sideways);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function() {
    console.log('play');
    playlist.play();
    playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById('next');
nextButton.onclick = function() {
    console.log('next');
    playlist.next();
    playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById('stop');
stopButton.onclick = function() {
    console.log('stop');
    playlist.stop();
    playlist.renderInElement(playlistElement);
}