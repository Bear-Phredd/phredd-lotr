'use strict';

var oConfig	=
{
	//bDebug	: true,
	bDebug	: false,
	sDomain	: window.location.hostname,
	oSource	:
	{
		pRace	: 'data/race.json',
	}
};

if(oConfig.bDebug)
	console.info('LOTR : config loaded');
