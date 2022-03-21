/** 
Author:    Build Rise Shine with Nyros (BRS) 
Created:   11.05.2022 
Library / Component: Script file
Description: Logic behind the app(fetching the data from the API)
(c) Copyright by BRS with Nyros. 
**/
taskImg.controller('MainController', ['$scope', '$http',
    function($scope, $http) {
        var key = "d12447f70e875413282a48b9cbe48257";
        var secret = "74f692977dd47736";
        $scope.tags = "";
        $scope.page = 1;
        $scope.searchImg = function() {
            $http({
                method: 'GET',
                url: 'https://api.flickr.com/services/rest/',
                params: {
                    method: 'flickr.photos.search',
                    api_key: key,
                    format: 'json',
                    nojsoncallback: 1,
                    tags: $scope.tags,
                    extras: 'url_h',
                    page: $scope.page
                }
            }).then(function(response) {
                console.log(response.data);

                if (response.data.stat == "fail") {
                    alert(response.data.message);
                } else {
                    $scope.img = response.data.photos.photo;
                }
            })
        }
        $scope.ImgUrl = function(photo) {
            return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_q.jpg";
        }
    }
]);