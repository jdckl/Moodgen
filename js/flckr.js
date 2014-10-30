// Loop


$(document).ready(function () {
    $("#btn").click(function (event) {

        if ( $( "#header" ).is( ".focused" ) ) { 
                } else {
        $("#header").addClass("focused");                
                }

    	$('#content').empty();

        var searchTerm = $("#sbx").val();
        var Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
        var tags = "&tags=" + searchTerm;
        var tagmode = "&tagmode=any";
        var jsonFormat = "&format=json&nojsoncallback=1";
        var limit = "&per_page=250";
        var FinalURL = Flickurl + tags + tagmode + limit + jsonFormat;
		var FinalURL = Flickurl + tags + tagmode + jsonFormat;
        var keepers = [];

         $.getJSON(FinalURL, function(photos) {
             var photo = photos.photos.photo;
             console.log(photo);

             $('#content').load(function() {
             
                console.log("load");

            });

             var doneNumber = 0;

            $.each(photo, function(i, item) {
             
                 $('#content').append('<img id="' + item.id + '" src="' + "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" +item.id + "_" + item.secret + ".jpg"+ '" class="pic" />');
                 $('#' + item.id).load(function() {
             
                    doneNumber = doneNumber + 1;
                    console.log(doneNumber);

                     if (doneNumber == photo.length) {

                        console.log("all loaded");
                        $("#loading").fadeOut('slow');
                    }
                });
             });

             $("#loading").fadeIn('slow');

            $(".pic").click(function(){
    	    
               $(this).toggleClass("selected");
  
               if ( $(this).is( ".selected" ) ) {
            
                    $("#info").fadeIn("fast");
                     keepers.push($(this).attr('src'));
            
                } else {

                    $("#info").fadeOut("fast");
                    _.pull(keepers, $(this).attr('src'));
                
                }

                console.log(keepers);
	       
            });

            $("#btn3").click(function(){
                $(".pic").removeClass("selected");
                $("#info").fadeOut("fast");
                while(keepers.length > 0) {
                keepers.pop();
                }
                console.log(keepers);
            });

            $("#btn2").click(function(){
                $('#content').empty();

            });
           
          });
    });
});