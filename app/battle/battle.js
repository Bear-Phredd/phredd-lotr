'use strict';

var oOption =
{
	templateUrl	: 'app/battle/battle.html',
	bindings	: {},
	controller	:
	[
		'$compile',
		battleController,
	],
	controllerAs	: 'battle',
};

var aRequire	=
[
	'ui.router',
];

function battleController($compile)
{
	var oMap	=
	{
		size	:
		{
			x	: 18,
			y	: 12,
		},
		object	:
		[
			{
				type	: 'rock1',
				cost	: 0,
				x		: 2,
				y		: 3,
			},
			{
				type	: 'rock1',
				cost	: 0,
				x		: 5,
				y		: 9,
			},
			{
				type	: 'rock1',
				cost	: 0,
				x		: 1,
				y		: 1,
			},
			{
				type	: 'rock1',
				cost	: 0,
				x		: 13,
				y		: 11,
			},
			{
				type	: 'rock1',
				cost	: 0,
				x		: 3,
				y		: 3,
			},
			{
				type	: 'rock1',
				cost	: 0,
				x		: 13,
				y		: 3,
			},
			{
				type	: 'tree1',
				cost	: 3,
				x		: 3,
				y		: 4,
			},
			{
				type	: 'tree1',
				cost	: 3,
				x		: 7,
				y		: 11,
			},
			{
				type	: 'tree2',
				cost	: 3,
				x		: 8,
				y		: 11,
			},
			{
				type	: 'tree3',
				cost	: 3,
				x		: 9,
				y		: 11,
			},
			{
				type	: 'tree4',
				cost	: 3,
				x		: 6,
				y		: 11,
			},
			{
				type	: 'tree5',
				cost	: 3,
				x		: 5,
				y		: 11,
			},
			{
				type	: 'tree6',
				cost	: 3,
				x		: 4,
				y		: 11,
			},
			{
				type	: 'tree3',
				cost	: 3,
				x		: 7,
				y		: 10,
			},
			{
				type	: 'ruin1',
				cost	: 2,
				x		: 9,
				y		: 5,
			},
			{
				type	: 'ruin2',
				cost	: 2,
				x		: 8,
				y		: 7,
			},
		],
		army	:
		[
			{
				player	: 'Phredd',
			},
			{
				player	: 'Tristan',
			},
		],
		troop	:
		[
			{
				team	: 0,
				name 	: "orc1",
				img 	: 6,
				x		: 1,
				y		: 4,
				move	: 4
			},
			{
				team	: 0,
				name 	: "orc2",
				img 	: 6,
				x		: 1,
				y		: 5,
				move	: 4
			},
			{
				team	: 0,
				name 	: "orc3",
				img 	: 6,
				x		: 1,
				y		: 6,
				move	: 4
			},
			{
				team	: 0,
				name 	: "orc4",
				img 	: 6,
				x		: 1,
				y		: 7,
				move	: 4
			},
			{
				team	: 0,
				name 	: "orc5",
				img 	: 6,
				x		: 1,
				y		: 8,
				move	: 4
			},
			{
				team	: 0,
				name 	: "gob1",
				img 	: 7,
				x		: 2,
				y		: 4,
				move	: 5
			},
			{
				team	: 0,
				name 	: "gob2",
				img 	: 7,
				x		: 2,
				y		: 5,
				move	: 5
			},
			{
				team	: 0,
				name 	: "gob3",
				img 	: 7,
				x		: 2,
				y		: 6,
				move	: 5
			},
			{
				team	: 0,
				name 	: "gob4",
				img 	: 7,
				x		: 2,
				y		: 7,
				move	: 5
			},
			{
				team	: 0,
				name 	: "gob5",
				img 	: 7,
				x		: 2,
				y		: 8,
				move	: 5
			},
			{
				team	: 0,
				name 	: "Ren l'Impur",
				img 	: 10,
				x		: 3,
				y		: 6,
				move	: 7
			},
			{
				team	: 0,
				name 	: "Troll1",
				img 	: 8,
				x		: 3,
				y		: 5,
				move	: 2
			},
			{
				team	: 0,
				name 	: "Troll2",
				img 	: 8,
				x		: 3,
				y		: 7,
				move	: 3
			},
			{
				team	: 1,
				name 	: "Gimli",
				img 	: 4,
				x		: 13,
				y		: 8,
				move	: 5
			},
			{
				team	: 1,
				name 	: "Frodo",
				img 	: 1,
				x		: 14,
				y		: 4,
				move	: 6
			},
			{
				team	: 1,
				name 	: "Sam",
				img 	: 1,
				x		: 14,
				y		: 5,
				move	: 6
			},
			{
				team	: 1,
				name 	: "Merry",
				img 	: 1,
				x		: 14,
				y		: 6,
				move	: 6
			},
			{
				team	: 1,
				name 	: "Pippin",
				img 	: 1,
				x		: 14,
				y		: 7,
				move	: 6
			},
			{
				team	: 1,
				name 	: "Aragorn",
				img 	: 2,
				x		: 13,
				y		: 5,
				move	: 5
			},
			{
				team	: 1,
				name 	: "Boromir",
				img 	: 2,
				x		: 13,
				y		: 6,
				move	: 5
			},
			{
				team	: 1,
				name 	: "Gandalf",
				img 	: 9,
				x		: 13,
				y		: 4,
				move	: 5
			},
			{
				team	: 1,
				name 	: "Legolas",
				img 	: 5,
				x		: 13,
				y		: 7,
				move	: 6
			},
		],
	};

	// Prepare map size for ngRepeat
	var aX	= new Array();
	for (var j=1; j<=oMap.size.x; j++)
	{
		aX.push(j);
	}
	oMap.size.arrayX	= aX;

	var aY	= new Array();
	for (var j=1; j<=oMap.size.y; j++)
	{
		aY.push(j);
	}
	oMap.size.arrayY	= aY;

	var aReachable	= [];
	var aAttackable	= [];

	function getNeighbour(iX, iY, iMove)
	{
		if(oConfig.bDebug)
			console.info('getNeighbour(iX='+iX+', iY='+iY+', iMove='+iMove+')');

		getEastNeighbour(iX, iY, iMove);
		getWestNeighbour(iX, iY, iMove);
		getSouthNeighbour(iX, iY, iMove);
		getNorthNeighbour(iX, iY, iMove);

		aReachable	= [];
		aAttackable	= [];
	}

	function getEastNeighbour(iX, iY, iMove)
	{
		if(oConfig.bDebug)
			console.info('getEastNeighbour(iX='+iX+', iY='+iY+', iMove='+iMove+')');

		iX++;

		if (!isFoundNeighbour(iX, iY) && iX<oMap.size.x)
			handleNeighbour(iX, iY, iMove);
	}

	function getWestNeighbour(iX, iY, iMove)
	{
		if(oConfig.bDebug)
			console.info('getWestNeighbour(iX='+iX+', iY='+iY+', iMove='+iMove+')');

		iX--;

		if (!isFoundNeighbour(iX, iY) && iX>0)
			handleNeighbour(iX, iY, iMove);
	}

	function getSouthNeighbour(iX, iY, iMove)
	{
		if(oConfig.bDebug)
			console.info('getSouthNeighbour(iX='+iX+', iY='+iY+', iMove='+iMove+')');

		iY++;
		if (!isFoundNeighbour(iX, iY) && iY<oMap.size.y)
		{
			handleNeighbour(iX, iY, iMove);
		}
	}

	function getNorthNeighbour(iX, iY, iMove)
	{
		if(oConfig.bDebug)
			console.info('getNorthNeighbour(iX='+iX+', iY='+iY+', iMove='+iMove+')');

		iY--;

		if (!isFoundNeighbour(iX, iY) && iY>0)
			handleNeighbour(iX, iY, iMove);
	}

	function isFoundNeighbour(iX, iY)
	{
		var iPos1	= aReachable.indexOf(iX + '/' + iY);
		var iPos2	= aAttackable.indexOf(iX + '/' + iY);

		if(iPos1 === -1 && iPos2 === -1)
			return false;

		return true;
	}

	function addReachable(iX, iY, dCell)
	{
		aReachable.push(iX + '/' + iY);
		angular.element(dCell).addClass('reachable');
	}

	function addAttackable(iX, iY, dCell)
	{
		aAttackable.push(iX + '/' + iY);
		angular.element(dCell).addClass('attackable');
	}

	function handleNeighbour(iX, iY, iMove)
	{
		if(oConfig.bDebug)
			console.debug('handleNeighbour(iX='+iX+', iY='+iY+', iMove='+iMove+')');

		var dCell	= document.querySelector('[data-x="'+iX+'"][data-y="'+iY+'"]');
		var bUnit	= angular.element(dCell).children().attr('data-unit');
		var iCost	= getCost(dCell);
console.debug(bUnit);
		if(bUnit == 'yes')
			addAttackable(iX, iY, dCell);

		iMove	-= iCost;

		if(iMove>=0)
			addReachable(iX, iY, dCell);

		if(iMove>0)
			getNeighbour(iX, iY, iMove);
	}

	function getCost(dCell)
	{
			var iCost	= angular.element(dCell).children().attr('data-cost');

			// Empty cell
			if(typeof iCost == 'undefined')
				return 1;
			// Intraversable
			else if(iCost==0)
				return 1000;

			return iCost;
	}

	function cleanCell()
	{
		var jAll	= document.querySelectorAll('.cell');

		angular.element(jAll).removeClass('selected');
		angular.element(jAll).removeClass('reachable');
	}

	function showMove()
	{
		if(oConfig.bDebug)
		{
			console.info('showMove()');
			console.info(jSelectedTroop);
		}

		var iX		= oMap.troop[iSelectedTroop].x;
		var iY		= oMap.troop[iSelectedTroop].y;
		var iMove	= oMap.troop[iSelectedTroop].move;

		getNeighbour(iX, iY, iMove);
	}

	function selectTroop()
	{
		cleanCell();

		// get troop coords
		var iX		= oMap.troop[iSelectedTroop].x;
		var iY		= oMap.troop[iSelectedTroop].y;
	
		// Add mark on selected troop
		var dCell	= document.querySelector('[data-x="'+iX+'"][data-y="'+iY+'"]');
		angular.element(dCell).addClass('selected');

		showMove();
	}

	function selectDest(e)
	{
		var jSelectedDest	= angular.element(e.target);

		if(jSelectedDest.hasClass('reachable'))
		{
			// move troop to dest
			oMap.troop[iSelectedTroop].x	= jSelectedDest.attr('data-x');
			oMap.troop[iSelectedTroop].y	= jSelectedDest.attr('data-y');

			// reset cell class
			cleanCell();
		}

		// next troop
		iSelectedTroop++;

		if(iSelectedTroop == iTroopCount)
			iSelectedTroop	= 0;

		selectTroop(iSelectedTroop);
	}

	// Send info to the view
	this.map	= oMap;

	// public function
	this.selectDest		= selectDest;

	// Init battle
	var iTroopCount		= oMap.troop.length;
	var iSelectedTroop	= 0;

	setTimeout(selectTroop, 300);
}

app.controller('battleController', aRequire);
app.component('battle', oOption);

if(oConfig.bDebug)
	console.info('LOTR : battle componant loaded');
