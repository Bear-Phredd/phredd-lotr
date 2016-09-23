'use strict';

var aDependences	=
[
	'ui.router',
	'ui.bootstrap',
];

var app	= angular.module('lotr', aDependences);

if(oConfig.bDebug)
	console.info('LOTR : app loaded');