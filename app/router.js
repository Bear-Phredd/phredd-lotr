'use strict';

app.config(['$stateProvider', '$urlRouterProvider', fnRouter]);

function fnRouter($stateProvider, $urlRouterProvider)
{
    var oRaceList	=
    {
        name		: 'race-list',
        url			: '/races',
        template	: '<race-list></race-list>',
        //controller	: 'app/race/race-list.js',
        //templateUrl	: 'app/race/race-list.html',
  		//component	: 'race-list',
    };

    var oRaceDetail	=
    {
        name		: 'race-detail',
        url			: '/race/:id',
        template	: '<race-detail></race-detail>',
    };

    var oFactionList	=
    {
        name		: 'faction-list',
        url			: '/factions',
        template	: '<faction-list></faction-list>',
    };

    var oFactionDetail	=
    {
        name		: 'faction-detail',
        url			: '/faction/:id',
        template	: '<faction-detail></faction-detail>',
    };

    var oArmyList	=
    {
        name		: 'army-list',
        url			: '/armies',
        template	: '<army-list></army-list>',
    };

    var oArmyDetail	=
    {
        name		: 'army-detail',
        url			: '/army/:id',
        template	: '<army-detail></army-detail>',
    };

    var oTroopList	=
    {
        name		: 'troop-list',
        url			: '/troops',
        template	: '<troop-list></troop-list>',
    };

    var oTroopDetail	=
    {
        name		: 'troop-detail',
        url			: '/troop/:id',
        template	: '<troop-detail></troop-detail>',
    };

    var oMapList	=
    {
        name		: 'map-list',
        url			: '/maps',
        template	: '<map-list></map-list>',
    };

    var oMapDetail	=
    {
        name		: 'map-detail',
        url			: '/map/:id',
        template	: '<map-detail></map-detail>',
    };

    var oBattle	=
    {
        name		: 'battle',
        url			: '/battle',
        template	: '<battle></battle>',
        //controller	: 'app/battle/battle.js',
        //templateUrl	: 'app/battle/battle.html',
    };

    var oDefault	=
    {
        name		: 'otherwise',
        url			: '/battle',
        template	: '<battle></battle>',
        //controller	: 'app/battle/battle.js',
        //templateUrl	: 'app/battle/battle.html',
    };

	// States
    $stateProvider
        .state(oRaceList)
        .state(oRaceDetail)
        .state(oFactionList)
        .state(oFactionDetail)
        .state(oArmyList)
        .state(oArmyDetail)
        .state(oTroopList)
        .state(oTroopDetail)
        .state(oMapList)
        .state(oMapDetail)
        .state(oBattle)
	;

	// Default route
	$urlRouterProvider.otherwise('/battle');
};

if(oConfig.bDebug)
	console.info('LOTR : router loaded');
