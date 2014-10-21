var searchTerm = $("#sbx").val();
var Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
var tags = "&tags=" + searchTerm;
var tagmode = "&tagmode=any";
var jsonFormat = "&format=json";
var FinalURL = Flickurl + tags + tagmode + jsonFormat;

$(document).ready(function() {
      $("#btn").click(function(event){
          $.getJSON('FinalURL', function(photo) {
             $('#content').append('<img src="' + 'https://www.flickr.com/photos/' + photo.owner + '/' +  photo.id + '"/>');
          });
      });
   });