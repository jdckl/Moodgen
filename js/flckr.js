$(document).ready(function () {
    $("#btn").click(function (event) {

    	$('#content').empty();

        var searchTerm = $("#sbx").val();
        var Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
        var tags = "&tags=" + searchTerm;
        var tagmode = "&tagmode=any";
        var jsonFormat = "&format=json&nojsoncallback=1";
        var FinalURL = Flickurl + tags + tagmode + jsonFormat;

         $.getJSON(FinalURL, function(photos) {
             var photo = photos.photos.photo;
             console.log(photo);
                                   
             $.each(photo, function(i, item) {
             $('#content').append('<div id="ptrn"><img src="' + "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" +item.id + "_" + item.secret + ".jpg"+ '" class="pic"></img></div>');
             });

             $("#loading").fadeIn('slow').delay( 4000 ).fadeOut('slow');

             $(".pic").click(function(){
    			$(this).toggleClass("selected");
			});

          });
    });
});