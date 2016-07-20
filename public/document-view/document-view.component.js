angular.
  module('documentView').
  component('documentView', {
    templateUrl: 'document-view/document-view.template.html',
    controller: ['$scope', '$http', '$location',
      function documentViewController($scope, $http, $location) {
		  var self = this;
		  var doc = new pdfkit();
		  var stream = doc.pipe(blobStream());

		  doc.fontSize(25)
   			.text('Here is some vector graphics...', 100, 80);
		  console.log('view document here');
		  //console.log("routeParams:" + $routeParams.projectId);
		  $http.get('/view').then(function(response) {
			 console.log('xxxx');
			 //console.log(response.data);
			 //self.projects = response.data; 
		  });
		}]
  });
