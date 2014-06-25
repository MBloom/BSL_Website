// collapse the navbar on scroll
$(function() {
    if ($(window).width() <= 767) {
        $("#nav").addClass("stuck");
    }
    else if (document.body.id == 'index'){
        $("#content").waypoint(function() {
            $("#nav").toggleClass("stuck")
        }, {
            offset: 160
        });
    }
    else $("#nav").addClass("stuck");
});
$(function() {
    $("#showMenu").click(function() {
        $("#slide-menu").toggleClass("open");
        $("#content").toggleClass("pushLeft");
    });
});
/*
Document vs. Window
$( document ) is only available after the document has loaded
$( window ) is available before the document loads/is ready
*/
$(document).ready(function() {
    $("#grads").click(function() {
        // simply switch content if other section is currrently active 
        if ($("#pros-section").is(':visible')) {
            $("#pros-section").toggle();
            $("#grads-section").toggle();
        }
        // toggle section
        else $("#grads-section").toggle("blind");
        //move to top of the section
        if ($("#grads-section").is(':visible')) {
            $("html, body").animate({
                scrollTop: $("#grads-section").offset().top
            });
        }
        $("#selection").css({ 'height': "auto" });
    });
    // professional image is clicked
    $("#pros").click(function() {
        // simply switch content if other section is currrently active 
        if ($("#grads-section").is(':visible')) {
            $("#grads-section").toggle();
            $("#pros-section").toggle();
        }
        // toggle section
        else $("#pros-section").toggle("blind");
        //move to top of the section
        if ($("#pros-section").is(':visible')) {
            $("html, body").animate({
                scrollTop: $("#pros-section").offset().top
            });
        }
        $("#selection").css({ 'height': "auto" });
    });
});
// Slideshow functionality
$(function() {
    $('.slideshow img:gt(0)').hide();
    setInterval(function() {
        $('.slideshow :first-child').fadeOut().next('img').fadeIn().end().appendTo('.slideshow');
    }, 5000);
});
// Parallax effect for background images
$(function() {
    $('.parallax-me').each(function() {
        $(this).parallax('50%', 0.3, true);
    });
});
// Bio selection for careers page
$(window).ready(function() {
    $(".headshot").click(function(event) {
        var $people = $('.headshot'); 
        var $descriptions = $('.description');
        var id = $(this).attr('name');
        var $cur_desc = $("#desc_" + id).toggle();
        $(this).toggleClass("active-bio");
        $people.not(this).removeClass("active-bio");
        $descriptions.not($cur_desc).hide();
    });
});
// Google Map Skin - Get more at http://snazzymaps.com/
function init() {
    var myLoc = new google.maps.LatLng(38.9394730, -77.1787780)
    var myOptions = {
        zoom: 12,
        center: new google.maps.LatLng(38.9185625, -77.0995465),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        streetViewControl: false,
        styles: [{
            "featureType": "landscape",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#EEEEEE"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#73acd9"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#FFFFFF"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#cccccc"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#074575"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "color": "#AAAAAA"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }, {
                "color": "#b9d6ec"
            }]
        }]
    };
    var map = new google.maps.Map(document.getElementById('map'), myOptions);
    var marker = new google.maps.Marker({
        position: myLoc,
        animation: google.maps.Animation.DROP,
        clickable: true,
        map: map,
        title: 'BluestoneLogic'
    });
    var infowindow = new google.maps.InfoWindow({
        content: '<strong>BluestoneLogic</strong><br/>1313 Dolley Madison Blvd<br>McLean,VA 22101'
    })
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}
google.maps.event.addDomListener(window, 'load', init);