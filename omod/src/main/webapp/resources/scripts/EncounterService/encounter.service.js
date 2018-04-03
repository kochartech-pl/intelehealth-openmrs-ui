  encounterService.factory('EncounterFactory', ['$http', '$filter',function( $http, $filter ){
  var str = window.location.search.split('=')[1];
  var patient = str.split('&')[0];
  var date = new Date();
  date = $filter('date')(new Date(), 'yyyy-MM-dd');
  var url = "/" + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/encounter";
      url += "?patient=" + patient;
      url += "&encounterType=" + "d7151f82-c1f3-4152-a605-2f9ea7414a79";
  var testurl = "/" + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/session";
  var countryUrl = "/" + OPENMRS_CONTEXT_PATH + "/ws/rest/v1/person/" + patient + "/address";
  return{
    getEncounter: function(){
      return $http.get(url).then(function(response){
      return response.data.results;
      });
    },

    postEncounter: function(){
      return $http.get(testurl).then(function(response){
      return response.data.user.uuid;
    });
  },

    locationService: function(){
      return $http.get(countryUrl).then(function(response){
      return response.data.results;
    });
  }
};
}
]);
