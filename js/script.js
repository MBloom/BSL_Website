// collapse the navbar on scroll
$(window).scroll(function() {
    if ($('body').is('.HomePage')){
        if ($(".navbar").offset().top > 520) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }
});

/* 
Document vs. Window
$( document ) is only available after the document has loaded
$( window ) is available before the document loads/is ready
*/

$(document).ready( function(){
    $( "#grads" ).click(function() {
        // simply switch content if other section is currrently active 
        if ($("#pros-section").is(':visible')) {
            $( ".pros-toggle" ).toggle();
            $( ".grads-toggle" ).toggle();
        }
        // toggle section
        else
            $( ".grads-toggle" ).toggle( "blind" );
        //move to top of the section
        if ($("#grads-section").is(':visible')) {
            $("html, body").animate({scrollTop: $("#grads-section").offset().top});
        }
    });

    // professional image is clicked
    $( "#pros" ).click(function() {
        // simply switch content if other section is currrently active 
        if ($("#grads-section").is(':visible')) {
            $( ".grads-toggle" ).toggle();
            $( ".pros-toggle" ).toggle();
        }
        // toggle section
        else
            $( ".pros-toggle" ).toggle( "blind" );
        //move to top of the section
        if ($("#pros-section").is(':visible')) {
            $("html, body").animate({scrollTop: $("#pros-section").offset().top});
        }
    });
});
(function($){
    // Parallax
    $('.bkg').each(function() {
        $(this).parallax('50%', 0.5, true);
    });
})(jQuery);

//Google Map Skin - Get more at http://snazzymaps.com/
// var myOptions = {
//     zoom: 15,
//     center: new google.maps.LatLng(53.385873, -1.471471),
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     disableDefaultUI: true,
//     styles: [{
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 17
//         }]
//     }, {
//         "featureType": "landscape",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 20
//         }]
//     }, {
//         "featureType": "road.highway",
//         "elementType": "geometry.fill",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 17
//         }]
//     }, {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 29
//         }, {
//             "weight": 0.2
//         }]
//     }, {
//         "featureType": "road.arterial",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 18
//         }]
//     }, {
//         "featureType": "road.local",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 16
//         }]
//     }, {
//         "featureType": "poi",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 21
//         }]
//     }, {
//         "elementType": "labels.text.stroke",
//         "stylers": [{
//             "visibility": "on"
//         }, {
//             "color": "#000000"
//         }, {
//             "lightness": 16
//         }]
//     }, {
//         "elementType": "labels.text.fill",
//         "stylers": [{
//             "saturation": 36
//         }, {
//             "color": "#000000"
//         }, {
//             "lightness": 40
//         }]
//     }, {
//         "elementType": "labels.icon",
//         "stylers": [{
//             "visibility": "off"
//         }]
//     }, {
//         "featureType": "transit",
//         "elementType": "geometry",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 19
//         }]
//     }, {
//         "featureType": "administrative",
//         "elementType": "geometry.fill",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 20
//         }]
//     }, {
//         "featureType": "administrative",
//         "elementType": "geometry.stroke",
//         "stylers": [{
//             "color": "#000000"
//         }, {
//             "lightness": 17
//         }, {
//             "weight": 1.2
//         }]
//     }]
// };

// var map = new google.maps.Map(document.getElementById('map'), myOptions);