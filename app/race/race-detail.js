'use strict';

var oOption =
{
	templateUrl	: 'app/race/race-detail.html',
	controller	:
	[
		'$stateParams',
		'$http',
		raceDetailController,
	],
};

var aRequire	=
[
	'ui.router',
];

function raceDetailController($stateParams, $http)
{
	var self		= this;

	$http.post(oConfig.oSource.pRace).then
	(
		function successCallback(response)
		{
			// send data to view
			self.list		= search($stateParams.id, response.data);
		},
		function errorCallback(response)
		{
			console.error('raceListController cannot load JSON ' + oConfig.oSource.pRace);
		}
	);

	// Private functions **********************************************************
	var search	= function (iId, oData)
	{
		var iLength	= oData.length;

		// Link to previous item
		var iPrev	= +iId - 1;
		if(iPrev===0)
			iPrev	= iLength;

		// Link to next item
		var iNext	= +iId + 1;
		if(iNext === iLength)
			iNext = 1;

		// is image exist ?
		var pImg	= '/img/race/' + iId + '.png';
		var bImage	= fileExists($http, pImg);

		for (var i=0; i<iLength; i++)
		{
			if (oData[i].id == iId)
			{
				oData[i].prev	= iPrev;
				oData[i].next	= iNext;
				oData[i].img	= bImage;

				return oData[i];
			}
		}
	}
}

app.controller('raceDetailController', aRequire);
app.component('raceDetail', oOption);

if(oConfig.bDebug)
	console.info('LOTR : raceDetail componant loaded');