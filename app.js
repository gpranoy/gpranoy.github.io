
var gpranoyApp = angular.module('gpranoyApp',[  ]).
    factory('DataSource', ['$http',function($http){
       return {
           get: function(fileName,callback){
                $http.get(fileName).
                success(function(data, status) {
                    callback(data);
                });
           }
       };
    }]);

gpranoyApp.config(function($routeProvider) {
        $routeProvider
            // route for the about page
            .when('/', {
                templateUrl : './project.html',
                controller  : 'myController'
            })
            .when('/aboutMe', {
                templateUrl : './about.html',
                controller  : 'aboutController'
            })
            .when('/getPastNow', {
                templateUrl : './getPastNow/index.html',
                controller  : 'project'
            })
            .when('/explorations/getPastNow', {
                templateUrl : './explorations.html',
                controller  : 'controller'
            })
                .when('/explorations/sayl', {
                templateUrl : './explorations.html',
                controller  : 'controller'
            })
            .when('/explorations/ppl', {
                templateUrl : './explorations.html',
                controller  : 'controller'
            })
            .when('/explorations/exptAnim', {
                templateUrl : './explorations.html',
                controller  : 'controller'
            })
            .when('/explorations/imagineWithMe', {
                templateUrl : './explorations.html',
                controller  : 'controller'
            })
            .when('/explorations/invntn', {
                templateUrl : './explorations.html',
                controller  : 'controller'
            })
             .when('/explorations/swarachakra', {
                templateUrl : './explorations.html',
                controller  : 'controller'
            })
            .when('/explorations/ganesh', {
                templateUrl : './explorations.html',
                controller  : 'controller'
            })
             .when('/explorations/convo', {
                templateUrl : './explorations.html',
                controller  : 'controller'
            })
            .when('/explorations/ozchi2014', {
                templateUrl : './explorations.html',
                controller  : 'controller'
            })


            // route for the contact page
            .when('/explorations/', {
                templateUrl : './explorations.html',
                controller  : 'anotherController'
            }).
    otherwise({
        redirectTo: '/'
    });
    });



gpranoyApp.directive('isActiveNav', [ '$location', function($location) {
return {
 restrict: 'A',
 link: function(scope, element) {
   scope.location = $location;
   scope.$watch('location.path()', function(currentPath) {
    var a ='/#' + currentPath;
    var b = element[0].attributes['href'].nodeValue;
    if(a.search(b)==1)  {
        var id = element[0].attributes['id'].nodeValue;
        document.getElementById('pro').style.textDecoration = 'underline';
        document.getElementById(id).style.textDecoration = 'underline';

    }
    else{
        //var id = element[0].attributes['id'].nodeValue);
        //document.getElementById(String(id)).style.textDecoration = 'none';
    }
   });
 }
 };
}]);

gpranoyApp.directive('scrollThing', [ '$location', function($location) {
return {
 link: function(scope, element) {
         var sc = parseInt(scope.selected.index);

         $("#projects1").scrollTo(140*sc);
    }
   };
 }]);

gpranoyApp.directive('tweetLoad', [ '$location', function($location) {
return {
 link: function(scope, element) {
         
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    }
   };
 }]);

gpranoyApp.directive('myCarousel', function() {

return {
  link: function(scope, element, attrs) {
        angular.forEach(scope.slides, function(value, key){
          $('#mediaGallery').append("<div>"+value+"</div>");
        });

        $(".media-gallery").slick({
            dots: true,
            centerMode: false,
            adaptiveHeight: true,
            infinite: true
    }
  ); 
    }
}});


var controller = function($scope,DataSource) {
    DataSource.get("./data.json",function(data) {
        $scope.projects = data;
    });


    var len = $scope.projects.length;
    var loc = String(window.location);
    for(var i=0;i<len;i++) {
        var temp = String($scope.projects[i].divID);
        
        var val = loc.search(temp);
        if(val > 10)   {
             $scope.selected = $scope.projects[i];
         }
    }

    

    $("#leftTab").animate({left:'-3%'},"fast");
    $('#leftTab').animate({opacity:'0.4'},"fast");
    
    var abc = $scope.selected.divID;
    var def = "#"+abc;
    

    $( "#leftTab" )
  .mouseenter(function() {
    $('#leftTab').animate({opacity:'1'},"fast");
  })
  .mouseleave(function() {
    $('#leftTab').animate({opacity:'0.5'},"fast");
  });

}

var myController = function($scope,DataSource) {
   
    // Retrieve and set data 
    DataSource.get("./data.json",function(data) {
        $scope.projects = data;
        $scope.selected = data[0];
    });

    $("#leftTab").animate({left:'7%'},"fast");
    $('#leftTab').animate({'opacity':'1'},"fast");
    document.getElementById('abt').style.textDecoration = 'none';
    document.getElementById('pro').style.textDecoration = 'none';


};

var aboutController = function($scope,DataSource) {
   
    // Retrieve and set data 
    DataSource.get("./data.json",function(data) {
        $scope.projects = data;
        $scope.selected = data[0];

    });

    $("#leftTab").animate({left:'7%'},"fast");
    $('#leftTab').animate({opacity:'1'},"fast");


    document.getElementById('abt').style.textDecoration = 'underline';
    document.getElementById('pro').style.textDecoration = 'none';


};

var anotherController = function($scope,DataSource){

    // Retrieve and set data 
    DataSource.get("./data.json",function(data) {
        $scope.projects = data;
        $scope.selected = data[0];
    });

    $scope.myEventHandler = function()  {
        var len = $scope.projects.length;
    }

    $scope.pullProject = function(project)  {
        $scope.selected = project;
        var ab = project;
        var div = ab.anotherID;
       // document.getElementById(div).style.textDecoration = 'underline';

    };

    $("#leftTab").animate({left:'-3%'},"fast");
    $("#leftTab").animate({opacity:'0.4'},"fast");


    $( "#leftTab" )
  .mouseenter(function() {
    $('#leftTab').animate({opacity:'1'},"fast");
  })
  .mouseleave(function() {
    $('#leftTab').animate({opacity:'0.5'},"fast");
  });

    document.getElementById('abt').style.textDecoration = 'none';
    document.getElementById('pro').style.textDecoration = 'underline';

}

var project = function($scope,DataSource){

    // Retrieve and set data 
    DataSource.get("./data.json",function(data) {
        $scope.projects = data;
        $scope.selected = data[0];
    });
}


