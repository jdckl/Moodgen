$(document).ready(function () {
    $("#btn").click(function (event) {

        if ( $( "#header" ).is( ".focused" ) ) { 
                } else {
        $("#header").addClass("focused");                
                }

    	$('#content').empty();
            $("#notif").slideUp();

        var $container = $('#content');
<<<<<<< HEAD
        var number = 1;
=======

>>>>>>> FETCH_HEAD
        var searchTerm = $("#sbx").val();
        var Flickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
        var tags = "&tags=" + searchTerm;
        var tagmode = "&tagmode=any";
        var jsonFormat = "&format=json&nojsoncallback=1";
        var limit = "&per_page=100";
<<<<<<< HEAD
        var page = "&page=" + number + "";
        var FinalURL = Flickurl + tags + tagmode + page + jsonFormat;
=======
        var page = "&page=" + number + ""
        var number = 1;
        var FinalURL = Flickurl + tags + tagmode + limit + jsonFormat;
>>>>>>> FETCH_HEAD
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

                        var value = $("#sbx").val();
                        console.log("all loaded");
                        $("#loading").fadeOut('slow');
<<<<<<< HEAD
                        $('#content').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );
                        $("#notif").slideDown();
                        $("#notif span").text("Done loading! Try selecting the images you like by clicking on them! (hint: if you scroll way down, I'll load more, but shhh..)");
                        
=======
                        $("#sbx").attr("placeholder", "You searched for " +  value + "!");
                        $("#sbx").val('');
                        $('#content').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );
>>>>>>> FETCH_HEAD
                        }                        
                });
             });
                
             $("#loading").fadeIn('slow');

<<<<<<< HEAD
// INFINITE SCROLLING :3 (fix the if)
var ready = true;
        
  $(window).scroll(function() {
    if(ready == true) {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
    if ( $( "#finish" ).is( ":visible" ) ) { } else {


       number = number + 1;
       console.log("scrollnumber:" + number)
       
        ready = false;
        console.log(ready)
        var dsearchTerm = $("#sbx").val();
        var dFlickurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
        var dtags = "&tags=" + dsearchTerm;
        var dtagmode = "&tagmode=any";
        var djsonFormat = "&format=json&nojsoncallback=1";
        var dlimit = "&per_page=100";
        var dpage = "&page=" + number + "";
        var scrollURL = dFlickurl + dtags + dtagmode + dpage + djsonFormat;


       $.getJSON(scrollURL, function(photos) {
             var photoscroll = photos.photos.photo;
             console.log(photoscroll);

             var dnb = 0;
            $.each(photoscroll, function(i, item) {
             
                 $('#content').append('<img id="' + item.id + '" src="' + "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" +item.id + "_" + item.secret + ".jpg"+ '" class="pic" />');
                 $('#' + item.id).load(function() {
                
                    dnb = dnb + 1;
                    console.log(dnb);
                     if (dnb == photoscroll.length) {

                        $("#loading").fadeOut('slow');
                        $('#content').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );
                            ready = true;
                            console.log(ready)
                        }                        
                });


                });
            });
    $("#loading").fadeIn('slow');
}
}
}
});


$(".pic").one("click", function(){

$("#notif").slideDown();
$("#notif span").text("Awesome picture! You can keep on selecting more, or search for some different tag, if you're done selecting this one!");
setTimeout(
  function() 
  {
    $("#notif").slideUp();
  }, 7000);

});

// DELEGATE the click selection

$( "body" ).delegate( ".pic", "click", function() {
      if ( $("#finish").is(":visible")){} else {
  $(this).toggleClass("selected");

=======
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
       number = number + 1;
       doneNumber = 0;
       
       $.getJSON(FinalURL, function(photos) {
             var photo = photos.photos.photo;
             console.log(photo);

             $('#content').load(function() {
              console.log("load");
             });

            $.each(photo, function(i, item) {
             
                 $('#content').append('<img id="' + item.id + '" src="' + "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" +item.id + "_" + item.secret + ".jpg"+ '" class="pic" />').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );
                 
                 $('#' + item.id).load(function() {
             
                    doneNumber = doneNumber + 1;
                    console.log(doneNumber);

                     if (doneNumber == photo.length) {

                        console.log("all loaded");
                        $("#loading").fadeOut('slow');
                        $("#sbx").attr("placeholder", "You searched for " +  value + "!");
                        $('#content').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );
                        }                        
                  });
             });
            });

  } 
});


// DELEGATE the click selection

$( "body" ).delegate( ".pic", "click", function() {
  $(this).toggleClass("selected");
  
>>>>>>> FETCH_HEAD
               if ( $(this).is( ".selected" ) ) {
                     keepers.push($(this).attr('src'));
                                 
                } else {
                    _.pull(keepers, $(this).attr('src'));
                }
                if ( $(".pic").is( ".selected" ) ) {
<<<<<<< HEAD
                     $("#info").fadeIn("fast");      
=======
                     $("#info").fadeIn("fast");            
>>>>>>> FETCH_HEAD
                } else {
                    $("#info").fadeOut("fast");
                }

                console.log(keepers);
<<<<<<< HEAD
            }
=======
>>>>>>> FETCH_HEAD
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
                    $("#finish").fadeIn("fast");
                    $("#info").fadeOut("fast");
                    $('#content').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );
<<<<<<< HEAD
                    $("#notif").slideUp();
                    
=======
>>>>>>> FETCH_HEAD
                });
                 $("#notif").slideDown();
                        $("#notif span").text("It's the fiiiiiinaaal.. print .. ooout. Yeah.");
                        setTimeout(
  function() 
  {
    $("#notif").slideUp();
  }, 6000);
            });

            $("#print").click(function(){

                window.print();

                });


            //Search more tags process!**************
            $("#btnmore").click(function(){

                $('#content').empty();

                _.forEach( keepers , function(url) { 
                    console.log(url);
                    $('#content').append('<img class="pic selected" src="'+ url +'" />');
                });

                number = 1;
        var st= $("#sbx2").val();
        var Flurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=376b144109ffe90065a254606c9aae3d&";
        var tg = "&tags=" + st;
        var tm = "&tagmode=any";
        var jf = "&format=json&nojsoncallback=1";
<<<<<<< HEAD
        var lm = "&per_page=100";
        var pg = "&page=" + number + "";
        var Furl = Flurl + tg + tm + jf + pg;
=======
        var lm = "&per_page=50";
        var Furl = Flurl + tg + tm + jf;
>>>>>>> FETCH_HEAD

        $.getJSON(Furl, function(photos) {
             var phototwo = photos.photos.photo;
             console.log(phototwo);

             $('#content').load(function() {
             
                console.log("load");

            });

             var doneNumbertw = 0;

            $.each(phototwo, function(i, item) {
             
                 $('#content').append('<img id="' + item.id + '" src="' + "https://farm" + item.farm + ".staticflickr.com/" + item.server + "/" +item.id + "_" + item.secret + ".jpg"+ '" class="pic" />');
                 $('#' + item.id).load(function() {
             
                    doneNumbertw = doneNumbertw + 1;

<<<<<<< HEAD
                     if (doneNumbertw == phototwo.length) {
=======
                     if (doneNumbertw == photo.length) {
>>>>>>> FETCH_HEAD

                        $("#loading").fadeOut('slow');
                        var valuetw = $("#sbx2").val();
                        $("#sbx2").attr("placeholder", "Saved and searched for " +  valuetw + "!");
                        $("#sbx2").val('');
<<<<<<< HEAD
                        $("#sbx").val("" +  valuetw + "");
                        $('#content').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );
                        $("#notif").slideUp();
                         $("#notif").slideDown();
                          $("#notif span").text("I saved your images and loaded the new ones based on your tag.. am I awesome?");        
=======
                        $('#content').isotope( 'reloadItems' ).isotope( { sortBy: 'original-order' } );          
>>>>>>> FETCH_HEAD
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

$(document).ready(function () {
$("#notif").slideDown();
setTimeout(
  function() 
  {
    $("#notif").slideUp();
  }, 8000);
    $("#notif").click(function (event) {
        $("#notif").slideUp();
        });
});