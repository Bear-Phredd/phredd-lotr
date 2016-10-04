'use strict';

var oOption =
{
	templateUrl	: 'app/race/race-list.html',
	controller	:
	[
		'$http',
		raceListController,
	],
};

var aRequire	=
[
	'ui.router',
];

function raceListController($http)
{
	var self		= this;

	$http.post(oConfig.oSource.pRace).then
	(
		function successCallback(response)
		{
			var iLength	= response.data.length;

			for (var i=0; i<iLength; i++)
			{
				// is image exist ?
				var pImg	= '/img/race/' + response.data[i].id + '.png';
				var bImage	= fileExists($http, pImg);

				response.data[i].img	= bImage;
			}

			// send data to view
			self.list	= response.data;
		},
		function errorCallback(response)
		{
			console.error('raceListController cannot load JSON ' + oConfig.oSource.pRace);
		}
	);
}

//app.controller('raceListController', aRequire);
app.component('raceList', oOption);

if(oConfig.bDebug)
	console.info('LOTR : raceList componant loaded');
