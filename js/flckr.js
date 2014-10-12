var searchTerm = $("#searchbx").val();
var Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
var tags = "&tags=" + searchTerm;
var tagmode = "&tagmode=any";
var jsonFormat = "&format=json";
var FinalURL = Flickurl + tags + tagmode + jsonFormat;

$(document).ready(function() {
	$("#srch").submit(function() {
		$.getJSON( FinalURL, function(data){
			

			
        });
		})

	});
});