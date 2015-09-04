angular.module('starter.controllers', ['ionic'])
.controller('MapCtrl', ['$scope', function($scope) {
		$scope.user = {};
}])

.directive('map', function() {
    return {
        restrict: 'A',
        link:function(scope, element, attrs){

          var zValue = scope.$eval(attrs.zoom);
          var lat = scope.$eval(attrs.lat);
          var lng = scope.$eval(attrs.lng);


          var myLatlng = new google.maps.LatLng(lat,lng),
          mapOptions = {
              zoom: zValue,
              center: myLatlng,
              disableDefaultUI: true
          },
          map = new google.maps.Map(element[0],mapOptions),
          marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                draggable:true,
                scrollWheel: false,
                scaleControl: false

                
          });


        }

    }
    google.maps.event.addListener(marker, 'dragend', function(evt){
    console.log('Current Latitude:',evt.latLng.lat(),'Current Longitude:',evt.latLng.lng());
});
});
