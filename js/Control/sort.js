(function(){

var app = angular.module('App', ['angularUtils.directives.dirPagination']);

app.controller('Control', ['$scope', function($scope){
	scope = $scope;
	scope.itemsPerPage = 15;
	scope.sortKey = 'name';
	scope.sortReverse = false;
	
	

	scope.sort = function(key){
		scope.sortReverse = (scope.sortKey == key) ? !scope.sortReverse : scope.sortReverse;
		scope.sortKey = key;
	}

	

scope.people = [
   		   {
   		 	"id": "1",
   		 	"name": "Moreno",
   		 	"email": "more@gmail.com",
   		 	"telephone": "07554556789"
   		   },
   		   {
   		 	"id": "2",
   		 	"name": "Donovan",
   		 	"email":"dono@gmail.com",
   		 	"telephone": "075556657575"
   		   },
         {"id": "3",
        "name": "James",
        "email":"jam@gmail.com",
        "telephone": "07555657579",
         },
         {"id": "4",
        "name": "Peter",
        "email":"pet@gmail.com",
        "telephone": "075556657573"
         },
         {"id": "5",
        "name": "Kate",
        "email":"kat@gmail.com",
        "telephone": "075556657545"
         },
         {"id": "6",
        "name": "Donovan",
        "email":"dono@gmail.com",
        "telephone": "075556657575"
         },
         {"id": "7",
        "name": "Gemma",
        "email":"gem@gmail.com",
        "telephone": "075556657575"
         },
         {"id": "8",
        "name": "Carl",
        "email":"Cra@gmail.com",
        "telephone": "07555664566"
         },
         {"id": "9",
        "name": "Demon",
        "email":"dem@gmail.com",
        "telephone": "075556657545"
         },
         {"id": "10",
        "name": "kim",
        "email":"kim@gmail.com",
        "telephone": "0755566234575"
         },
         {"id": "11",
        "name": "Gren",
        "email":"gren@gmail.com",
        "telephone": "075556657575"
         },
         {"id": "12",
        "name": "Carlie",
        "email":"dono@gmail.com",
        "telephone": "075556657575"
         },
         {"id": "13",
        "name": "Jim",
        "email":"Jim@gmail.com",
        "telephone": "0755534657575"
         },
         {"id": "14",
        "name": "Barbara",
        "email":"bar@gmail.com",
        "telephone": "075556623"
         },
         {"id": "15",
        "name": "Peppe",
        "email":"pep@gmail.com",
        "telephone": "075556652375"
         },
         {"id": "16",
        "name": "Katiusha",
        "email":"Katiusha@gmail.com",
        "telephone": "07555665723"
         },
         {"id": "17",
        "name": "Grim",
        "email":"grim@gmail.com",
        "telephone": "075556652344"
         },
         {"id": "18",
        "name": "Cristian",
        "email":"cri@gmail.com",
        "telephone": "075556657523"
         },
         {"id": "19",
        "name": "Albert",
        "email":"alb@gmail.com",
        "telephone": "0755566573333"
         },
         {"id": "20",
        "name": "David",
        "email":"dav@gmail.com",
        "telephone": "0755566523"
         },
         {"id": "21",
        "name": "Desire",
        "email":"Desire@gmail.com",
        "telephone": "07555661111"
         },
         {"id": "22",
        "name": "Carmel",
        "email":"car@gmail.com",
        "telephone": "075556657575"
         },
         {"id": "23",
        "name": "Beto",
        "email":"Beto@gmail.com",
        "telephone": "0752356657575"
         },
         {"id": "24",
        "name": "Victor",
        "email":"vistor@gmail.com",
        "telephone": "075556657523"
         },
         {"id": "25",
        "name": "Alf",
        "email":"alf@gmail.com",
        "telephone": "0755523657575"
         },
         {"id": "26",
        "name": "Nemo",
        "email":"Nemo@gmail.com",
        "telephone": "075556657575"
         },
         {"id": "27",
        "name": "Marcus",
        "email":"Marcus@gmail.com",
        "telephone": "0756656657575"
         },
         {"id": "28",
        "name": "Lino",
        "email":"Lino@gmail.com",
        "telephone": "0755226657575"
         },
         {"id": "29",
        "name": "Jason",
        "email":"Jason@gmail.com",
        "telephone": "0755226657575"
         },
         {"id": "30",
        "name": "Isidor",
        "email":"Isi@gmail.com",
        "telephone": "072556657575"
         },
         {"id": "31",
        "name": "Dragon",
        "email":"dra@gmail.com",
        "telephone": "075522657575"
         },
         {"id": "32",
        "name": "Zac",
        "email":"zac@gmail.com",
        "telephone": "075126657575"
         },
         {"id": "33",
        "name": "Mathias",
        "email":"Mathia@gmail.com",
        "telephone": "072556657575"
         },
         {"id": "34",
        "name": "Pool",
        "email":"Pool@gmail.com",
        "telephone": "075512657575"
         },
         {"id": "35",
        "name": "Chicco",
        "email":"Chicco@gmail.com",
        "telephone": "0755226657575"
         },
         {"id": "36",
        "name": "Damian",
        "email":"dami@gmail.com",
        "telephone": "075556657575"
         },
         {"id": "37",
        "name": "Gimmy",
        "email":"gim@gmail.com",
        "telephone": "075226657575"
         },
         {"id": "38",
        "name": "Zaza",
        "email":"za@gmail.com",
        "telephone": "075556657575"
         },
         {"id": "39",
        "name": "Donovan",
        "email":"dono@gmail.com",
        "telephone": "075556657575"
         },
         {"id": "40",
        "name": "Gabriel",
        "email":"gab@gmail.com",
        "telephone": "075236657575"
         },
         {"id": "41",
        "name": "Hoshido",
        "email":"hos@gmail.com",
        "telephone": "075556657575"
         },
         {"id": "42",
        "name": "Kimmy",
        "email":"Kimmy@gmail.com",
        "telephone": "0755226657575"
         },
         {"id": "43",
        "name": "Mimi",
        "email":"Mimi@gmail.com",
        "telephone": "0755523357575"
         },
         {"id": "44",
        "name": "Attil",
        "email":"Attil@gmail.com",
        "telephone": "075346657575"
         },
         {"id": "45",
        "name": "Karim",
        "email":"Kari@gmail.com",
        "telephone": "075556657500"
         }

   		 ];

}]);


})();
