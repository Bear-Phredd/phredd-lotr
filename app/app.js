'use strict';

var aDependences	=
[
	'ui.router',
	'ui.bootstrap',
	'toaster',
	'ngAnimate',
];

var app	= angular.module('lotr', aDependences);

app.controller('myController', function($scope, toaster)
{
	$scope.pop = function()
	{
		toaster.pop('success', "title", "text");
	};
});

if(oConfig.bDebug)
	console.info('LOTR : app loaded');
