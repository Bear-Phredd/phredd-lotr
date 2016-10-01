'use strict';

var oOption =
{
	templateUrl	: 'app/battle/battle.html',
	bindings	: {},
	controller	:
	[
		'$compile',
		'$http',
		'toaster',
		battleController,
	],
	controllerAs	: 'battle',
};

var aRequire	=
[
	'ui.router',
];


function battleController($compile, $http, toaster)
{
	function prepareMap(oMap)
	{
		// Prepare map size for ngRepeat
		var aX	= new Array();
		for (var i=1; i<=oMap.size.x; i++)
		{
			aX.push(i);
		}
		oMap.size.arrayX	= aX;

		var aY	= new Array();
		for (var i=1; i<=oMap.size.y; i++)
		{
			aY.push(i);
		}
		oMap.size.arrayY	= aY;

		// Add troop count for loop
		oMap.iTroopCount	= oMap.troop.length;
		oMap.iCount	= [0, 0];

		for(var i=0; i<oMap.iTroopCount; i++)
		{
			if(oMap.troop[i].team==1)
				oMap.iCount[1]++;
			else if(oMap.troop[i].team==0)
				oMap.iCount[0]++;
			else
				console.warn('ERROR : prepare map');

		}

		// Init first troop
		oMap.iSelectedTroop		= 0;

		return oMap;
	}

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
		angular.element(dCell).children().children().addClass('attackable');
	}

	function handleNeighbour(iX, iY, iMove)
	{
		// already explored
		if (isFoundNeighbour(iX, iY))
			return;

		var dCell	= document.querySelector('[data-x="'+iX+'"][data-y="'+iY+'"]');
		var bUnit	= angular.element(dCell).children().attr('data-unit');
		var iTeam1	= angular.element(dCell).children().attr('data-team');
		var iCost	= getCost(dCell);
		var iTeam2	= oMap.troop[oMap.iSelectedTroop].team;

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
		var iCur	= oMap.iSelectedTroop;
		var iX		= oMap.troop[iCur].x;
		var iY		= oMap.troop[iCur].y;
		var iMove	= oMap.troop[iCur].move;

		getNeighbour(iX, iY, iMove);
	}

	function selectTroop()
	{
		var iCur	= oMap.iSelectedTroop;

		// add class selected on next troop
		if(typeof oMap.troop[iCur] !== 'undefined')
			oMap.troop[iCur].class	= 'selected';
		else
		{
			oMap.iSelectedTroop--;
			selectTroop();
		}

		// clean prev turn marked cells
		var jAll	= document.querySelectorAll('.cell');

		angular.element(jAll).removeClass('reachable');
		angular.element(jAll).children().children().removeClass('attackable');

		// get troop coords
		var iX		= oMap.troop[iCur].x;
		var iY		= oMap.troop[iCur].y;

		showMove();
	}

	function selectDest(e)
	{
		var jSelectedDest	= angular.element(e.target);

		// move troop to dest
		if(jSelectedDest.hasClass('reachable'))
		{
			// get troop coords
			var iX				= jSelectedDest.attr('data-x');
			var iY				= jSelectedDest.attr('data-y');
			var iCur			= oMap.iSelectedTroop;
			oMap.troop[iCur].x	= iX;
			oMap.troop[iCur].y	= iY;
		
			// Add mark on selected troop
			var jAll	= document.querySelectorAll('.cell');

//			angular.element(jAll).removeClass('selected');
			angular.element(jAll).removeClass('reachable');

			var dCell	= document.querySelector('[data-x="'+iX+'"][data-y="'+iY+'"]');
//			angular.element(dCell).addClass('selected');
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
		if(jSelectedDest.hasClass('attackable'))
		{
			var bSuccess	= false;
			var sResult		= '';
			var iCur		= oMap.iSelectedTroop;
			var sAtt		= oMap.troop[iCur].name;
			var iAtt		= oMap.troop[iCur].att;
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
					var iDmg	= oMap.troop[iCur].damage;
					iDmg		= Math.floor((Math.random() * iDmg) + 1);
					sResult		+= sAtt + ' inflige ' + iDmg + ' point de dégat<br />';

					var iArmor	= oMap.troop[iId].armor;
					iArmor		= Math.floor((Math.random() * iArmor) + 1);
					sResult		+= "l'armure de " + sDef + ' le protège de ' + iArmor + '<br />';

					var iWound	= +iDmg -iArmor
					if(iArmor > iDmg)
						var iWound	= 0;

					sResult		+= sDef + ' perd ' + iWound + ' point de vie<br />';

					var iPv		= oMap.troop[iId].pv;
					oMap.troop[iId].pv	-= +iWound;

					if(oMap.troop[iId].pv > 0)
						sResult		+= 'Il reste ' + oMap.troop[iId].pv + ' PdV a ' + sDef + '<br />';
					else
					{
						var iTeam	= oMap.troop[iId].team;
						sResult		+= sDef + ' succombe a ses blessures<br />';
						oMap.troop.splice(iId, 1);
						oMap.iTroopCount--;
						oMap.iCount[iTeam]--;

						if(oMap.iCount[iTeam] == 0)
						{
							alert('Equipe ' + iTeam + ' est vaincue !')
						}
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
		// remove all classes
		var jAll	= document.querySelectorAll('.cell');

		angular.element(jAll).removeClass('reachable');
		angular.element(jAll).removeClass('attackable');
		aAttackableCells	= [];

		// remove class selected on current troop;
		var iCur	= oMap.iSelectedTroop;
		if(typeof oMap.troop[iCur] !== 'undefined')
			oMap.troop[iCur].class	= '';

		// next troop
		oMap.iSelectedTroop++;

		// Last troop reached
		if(oMap.iSelectedTroop == oMap.iTroopCount)
			oMap.iSelectedTroop	= 0;

		selectTroop();
	}

	// Init battle
	var self				= this;
	var aSearchedCells		= [];
	var aAttackableCells	= [];
	var oMap				= {};

	$http.post(oConfig.oSource.pBattle).then
	(
		function successCallback(response)
		{
			oMap				= response.data;
			oMap				= prepareMap(oMap);
			oMap.iTroopCount	= oMap.troop.length;

			// Send map to the view
			self.map	= oMap;

			// launch game
			setTimeout(selectTroop,100);
		},
		function errorCallback(response)
		{
			console.error('battleController => errorCallback', response)
		}
	);

	// public function
	this.selectDest		= selectDest;
	this.selectAtt		= selectAtt;
}

app.controller('battleController', aRequire);
//app.service('battleData', battleData);
app.component('battle', oOption);

if(oConfig.bDebug)
	console.info('LOTR : battle componant loaded');
