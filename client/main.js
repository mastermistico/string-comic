import angular from 'angular';
import angularMeteor from 'angular-meteor';

import './main.html';


var stringapp = angular.module('string', [
  angularMeteor,'ngSanitize'
]);

stringapp.directive('stringdirective',[function(){
	return {
		restrict: 'E',
		templateUrl: 'client/main.html',
		controller: 'MyController'
	}

	}]).controller('MyController', function($scope){
    //$scope.mensaje = 'I am an <code>HTML</code>string with ' +
    // '<a href="#">links!</a> and other <em>stuff</em>';  // this is how it looks up the ctrl, apparently! 
    
    $scope.change = function (){	
    	$scope.result = $scope.mensaje;
    	var textarea;
    	/*textarea = Comparetext.find(
    								{
    									comic: {$in: ["marvel","dc"] }
    								}, {heroe: 1}).fetch()
    	
    	textarea[0].heroe.map(function(mapeo){    				 
		    		if($scope.result.search(mapeo) != -1){		    			
		    			
		    			//$scope.result = $scope.result.replaceAll(mapeo,mapeo.italics())
		    			$scope.result = $scope.result.split(mapeo).join(mapeo.italics())
		    			
		    			}
		    		
		    	})
    	textarea[1].heroe.map(function(mapeo){    				 
		    		if($scope.result.search(mapeo) != -1){		    			
		    			
		    			//$scope.result = $scope.result.replaceAll(mapeo,mapeo.italics())
		    			$scope.result = $scope.result.split(mapeo).join(mapeo.bold())
		    			
		    			}
		    		
		   	})*/
    	Meteor.call("callHeroes",$scope.result, function(err, result) {

    			console.log(result)
    			$scope.helpers({
                  		result: () => {
                    	return result;
                  		}
                });

    	})
    	//$scope.result = change
    	//$scope.mensaje = change
    	//console.log(textarea.replace('microsoft','java'))
    	//console.log(textarea,'hola')*/

    }

  });

