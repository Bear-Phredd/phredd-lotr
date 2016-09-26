'use strict';

var oOption =
{
	templateUrl	: 'app/battle/battle.html',
	bindings	: {},
	controller	:
	[
		'$compile',
		'toaster',
		battleController,
	],
	controllerAs	: 'battle',
};

var aRequire	=
[
	'ui.router',
];

function battleController($compile, toaster)
{
	var oMap	=
	{
		size	:
		{
			x	: 5,
			y	: 5,
		},
		object	:
		[
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
				att		: 90,
				def		: 10,
				pv		: 5,
				armor	: 1,
				damage	: 10,
				move	: 5
			},
			{
				team	: 1,
				name 	: "Legolas",
				img 	: 5,
				x		: 5,
				y		: 5,
				att		: 90,
				def		: 10,
				pv		: 5,
				armor	: 1,
				damage	: 10,
				move	: 5
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

	var aSearchedCells		= [];
	var aAttackableCells	= [];

	function getNeighbour(iX, iY, iMove)
	{
		getEastNeighbour(iX, iY, iMove);
		getWestNeighbour(iX, iY, iMove);
		getSouthNeighbour(iX, iY, iMove);
		getNorthNeighbour(iX, iY, iMove);

		aSearchedCells	= [];
	}

	function getEastNeighbour(iX, iY, iMove)
	{
		iX++;

		if (iX<=oMap.size.x)
			handleNeighbour(iX, iY, iMove);
	}

	function getWestNeighbour(iX, iY, iMove)
	{
		iX--;

		if (iX>0)
			handleNeighbour(iX, iY, iMove);
	}

	function getSouthNeighbour(iX, iY, iMove)
	{
		iY++;

		if (iY<=oMap.size.y)
		{
			handleNeighbour(iX, iY, iMove);
		}
	}

	function getNorthNeighbour(iX, iY, iMove)
	{
		iY--;

		if (iY>0)
			handleNeighbour(iX, iY, iMove);
	}

	function isFoundNeighbour(iX, iY)
	{
		var iPos	= aSearchedCells.indexOf(iX + '/' + iY);

		if(iPos === -1)
			return false;

		return true;
	}

	function addReachable(iX, iY, dCell)
	{
		aSearchedCells.push(iX + '/' + iY);
		angular.element(dCell).addClass('reachable');
	}

	function addAttackable(iX, iY, dCell)
	{
		aSearchedCells.push(iX + '/' + iY);
		aAttackableCells.push(iX + '/' + iY);	
		angular.element(dCell).addClass('attackable');
	}

	function handleNeighbour(iX, iY, iMove)
	{
		if (isFoundNeighbour(iX, iY))
			return;

		var dCell	= document.querySelector('[data-x="'+iX+'"][data-y="'+iY+'"]');
		var bUnit	= angular.element(dCell).children().attr('data-unit');
		var iTeam1	= angular.element(dCell).children().attr('data-team');
		var iCost	= getCost(dCell);
		var iTeam2	= oMap.troop[iSelectedTroop].team;

		if(bUnit == 'true' && iTeam1!=iTeam2)
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

	function showMove()
	{

		var iX		= oMap.troop[iSelectedTroop].x;
		var iY		= oMap.troop[iSelectedTroop].y;
		var iMove	= oMap.troop[iSelectedTroop].move;

		getNeighbour(iX, iY, iMove);
	}

	function selectTroop()
	{
		// clean prev turn marked cells
		var jAll	= document.querySelectorAll('.cell');

		angular.element(jAll).removeClass('selected');
		angular.element(jAll).removeClass('reachable');
		angular.element(jAll).removeClass('attackable');

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

		// move troop to dest
		if(jSelectedDest.hasClass('reachable'))
		{
			// get troop coords
			var iX		= jSelectedDest.attr('data-x');
			var iY		= jSelectedDest.attr('data-y');
			oMap.troop[iSelectedTroop].x	= iX;
			oMap.troop[iSelectedTroop].y	= iY;
		
			// Add mark on selected troop
			var jAll	= document.querySelectorAll('.cell');

			angular.element(jAll).removeClass('selected');
			angular.element(jAll).removeClass('reachable');

			var dCell	= document.querySelector('[data-x="'+iX+'"][data-y="'+iY+'"]');
			angular.element(dCell).addClass('selected');
		}

		if(!aAttackableCells.length)
		{
			nextTroop();
		}
	}

	function selectAtt(e)
	{
		var jSelectedDest	= angular.element(e.target);

		// attack
		if(jSelectedDest.parent().parent().hasClass('attackable'))
		{
			var bSuccess	= false;
			var sResult		= '';

			var sAtt		= oMap.troop[iSelectedTroop].name;
			var iAtt		= oMap.troop[iSelectedTroop].att;
			var iRoll		= Math.floor((Math.random() * 100) + 1);

			if(iRoll <= iAtt)
			{
				sResult	+= sAtt + 'reussi son attaque avec un jet de dès de ' + iRoll + '<br />';

				var iId		= jSelectedDest.attr('data-id');
				var sDef	= oMap.troop[iId].name;
				var iDef	= oMap.troop[iId].def;

				iRoll	= Math.floor((Math.random() * 100) + 1);
				if(iRoll <= iDef)
				{
					sResult	+= sDef + 'reussi sa parade avec un jet de dès de ' + iRoll + '<br />';
				}
				else
				{
					sResult		+= sDef + 'rate sa parade avec un jet de dès de ' + iRoll + '<br />';
					bSuccess	= true;
					var iDmg	= oMap.troop[iSelectedTroop].damage;
					iDmg		= Math.floor((Math.random() * iDmg) + 1);
					sResult		+= sAtt + ' inflige ' + iDmg + ' point de dégat<br />';

					var iArmor	= oMap.troop[iId].armor;
					iArmor		= Math.floor((Math.random() * iArmor) + 1);
					sResult		+= "l'armure de " + sDef + ' le protège de ' + iArmor + '<br />';

					var iWound	= +iDmg -iArmor
					if(iArmor > iDmg)
						var iWound	= 0;

					sResult		+= sAtt + ' perd ' + iWound + ' point de vie<br />';

					var iPv		= oMap.troop[iId].pv;
					oMap.troop[iId].pv	-= +iWound;

					if(oMap.troop[iId].pv > 0)
						sResult		+= 'Il reste ' + oMap.troop[iId].pv + ' PdV a ' + sDef + '<br />';
					else
					{
						sResult		+= sDef + ' succombe a ses blessures<br />';
						oMap.troop.splice(iId, 1);
					}
				}
			}
			else
			{
				sResult	+= sAtt + 'rate son attaque avec un jet de dès de ' + iRoll + '<br />';
			}

			if(bSuccess)
			{
				//toaster.pop('success', 'attaque reussie', sResult);
				toaster.pop
				({
					type			: 'success',
					body			: sResult,
					bodyOutputType	: 'trustedHtml'
				});
			}
			else
			{
				//toaster.pop('error', 'attaque raté', sResult);
				toaster.pop
				({
					type			: 'error',
					body			: sResult,
					bodyOutputType	: 'trustedHtml'
				});
			}
		}
		else
		{
			toaster.pop('warning', 'Erreur', 'Cible non attaquable');
		}

		nextTroop();
	}

	function nextTroop()
	{
		var jAll	= document.querySelectorAll('.cell');

		angular.element(jAll).removeClass('selected');
		angular.element(jAll).removeClass('reachable');
		angular.element(jAll).removeClass('attackable');

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
	this.selectAtt		= selectAtt;

	// Init battle
	var iTroopCount		= oMap.troop.length;
	var iSelectedTroop	= 0;

	setTimeout(selectTroop, 300);
}

app.controller('battleController', aRequire);
app.component('battle', oOption);

if(oConfig.bDebug)
	console.info('LOTR : battle componant loaded');
