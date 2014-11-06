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
        var limit = "&per_page=40";
        var FinalURL = Flickurl + tags + tagmode + limit + jsonFormat;
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
                        $("#sbx").val('');
                        $("#sbx").attr("placeholder", "Woohoo I'm fast! :D");

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


            // The DONE process! ****************
            $("#btn2").click(function(){
                $('#content').empty();
                 _.forEach( keepers , function(url) { 
                    console.log(url);
                    $('#content').append('<img class="pic" src="'+ url +'" />');
                });

            });


            //Search more tags process!**************
            $("#btnmore").click(function(){

                $('#content').empty();

                _.forEach( keepers , function(url) { 
                    console.log(url);
                    $('#content').append('<img class="pic selected" src="'+ url +'" />');
                });

        var st= $("#sbx2").val();
        var Flurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
        var tg = "&tags=" + st;
        var tm = "&tagmode=any";
        var jf = "&format=json&nojsoncallback=1";
        var Furl = Flurl + tg + tm + jf;

        $.getJSON(Furl, function(photos) {
             var phototwo = photos.photos.photo;
             console.log(phototwo);

             $('#content').load(function() {
             
                console.log("load");

            });

             var doneNumber2 = 0;

            $.each(phototwo, function(i, item) {
             
                 $('#content').append('<img id="' + item.id + '" src="' + "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" +item.id + "_" + item.secret + ".jpg"+ '" class="pic" />');
                 $('#' + item.id).load(function() {
             
                    doneNumber2 = doneNumber2 + 1;

                     if (doneNumber2 == photo.length) {

                        $("#loading").fadeOut('slow');
                        $("#sbx2").val('');
                        $("#sbx2").attr("placeholder", "Yay! :D");

                        }
                });
             });
        }); //JSON end

$("#loading").fadeIn('slow');
            });
           
          });
    });
});

// Submit on enter.
$(document).keypress(function(e) {
    if(e.which == 13) {
        if($('#info').is(':visible')) {
    $("#btnmore").click();
}else{
    $("#btn").click();
}
        
    }
});