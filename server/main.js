import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
  // code to run on server at startup
    if (Comparetext.find().count() === 0) {
    const comparetext = [{
      'comic': 'marvel',
      'heroe': ['ironman','hulk','spiderman','magneto']
    }, {
      'comic': 'dc',
      'heroe': ['batman','superman','joker','bane']
    }];

      comparetext.forEach((heroes) => {
      Comparetext.insert(heroes)
    });
 
  }
});
Meteor.methods({
	callHeroes: function (argument) {
		var textarea,result;
    	textarea = Comparetext.find(
    								{
    									comic: {$in: ["marvel","dc"] }
    								}, {heroe: 1}).fetch()

    	 textarea[0].heroe.map(function(mapeo){    				 
		    		if(argument.search(mapeo) != -1){		    			
		    			
		    			//$scope.result = $scope.result.replaceAll(mapeo,mapeo.italics())
		    			argument = argument.split(mapeo).join(mapeo.italics())
		    			
		    			}
		    		
		    	})
    	 textarea[1].heroe.map(function(mapeo){    				 
		    		if(argument.search(mapeo) != -1){		    			
		    			
		    			//$scope.result = $scope.result.replaceAll(mapeo,mapeo.italics())
		    			argument = argument.split(mapeo).join(mapeo.bold())
		    			
		    			}
		    		
		   	})
    	 
    	 return argument
	}


})	