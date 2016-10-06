'use strict';

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

		// Add logger
		oMap.logs	= [ [], [] ];

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
			handleNeighbour(iX, iY, iMove);
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

		if(iAction == 2 && bUnit == 'true' && iTeam1!=iTeam2)
			addAttackable(iX, iY, dCell);

		iMove	-= iCost;

		if(iAction == 1 && iMove>=0)
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
		// clean prev turn marked cells
		var jAll	= document.querySelectorAll('.cell');
		angular.element(jAll).removeClass('reachable');

		var iCur	= oMap.iSelectedTroop;
		var iX		= oMap.troop[iCur].x;
		var iY		= oMap.troop[iCur].y;
		var iMove	= oMap.troop[iCur].move;

		iAction		= 1;
		getNeighbour(iX, iY, iMove);
	}

	function fnShowAttack()
	{
		// clean prev turn marked cells
		var jAll	= document.querySelectorAll('.cell');
		angular.element(jAll).children().children().removeClass('attackable');

		var iCur	= oMap.iSelectedTroop;
		var iX		= oMap.troop[iCur].x;
		var iY		= oMap.troop[iCur].y;
		var iRange	= oMap.troop[iCur].range;

		iAction		= 2;
		getNeighbour(iX, iY, iRange);
	}

	function fnSelectTroop()
	{
		var iCur	= oMap.iSelectedTroop;

		// add class selected on next troop
		if(typeof oMap.troop[iCur] !== 'undefined')
			oMap.troop[iCur].class	= 'selected';
		else
		{
			console.error('fnSelectTroop veut selectionner une troupe absente');
			oMap.iSelectedTroop--;
			fnSelectTroop();
		}

		// get troop coords
		var iX		= oMap.troop[iCur].x;
		var iY		= oMap.troop[iCur].y;

		fnShowAttack();

		showMove();

	}

	function selectDest(e)
	{
		var jSelectedDest	= angular.element(e.target);

		// move troop to dest
		if(jSelectedDest.hasClass('reachable'))
		{
			// get destination coords
			var iX				= jSelectedDest.attr('data-x');
			var iY				= jSelectedDest.attr('data-y');

			// move troop
			var iCur			= oMap.iSelectedTroop;
			oMap.troop[iCur].x	= iX;
			oMap.troop[iCur].y	= iY;
	

			fnShowAttack();

			if(!aAttackableCells.length)
			{
				fnNextTroop();
			}
		}
	}

	function selectAtt(e)
	{
		var jSelectedDest	= angular.element(e.target);

		// attack
		if(jSelectedDest.hasClass('attackable'))
		{
			var bSuccess	= false;
			var aResult		= [];
			var iCur		= oMap.iSelectedTroop;
			var sAtt		= oMap.troop[iCur].name;
			var iAtt		= oMap.troop[iCur].att;
			var iTeamAtt	= oMap.troop[iCur].team;
			var iRoll		= Math.floor((Math.random() * 100) + 1);

			if(iRoll <= iAtt)
			{
				aResult.push('[' + iRoll + '] ' + sAtt + ' reussi son attaque');

				var iId		= jSelectedDest.attr('data-id');
				var sDef	= oMap.troop[iId].name;
				var iDef	= oMap.troop[iId].def;

				iRoll	= Math.floor((Math.random() * 100) + 1);
				if(iRoll <= iDef)
				{
					aResult.push('[' + iRoll + '] ' + sDef + ' reussi sa parade');
				}
				else
				{
					aResult.push('[' + iRoll + '] ' + sDef + ' rate sa parade');

					bSuccess	= true;
					var iDmg	= oMap.troop[iCur].damage;
					iDmg		= Math.floor((Math.random() * iDmg) + 1);

					aResult.push(sAtt + ' inflige ' + iDmg + ' point de dégat');

					var iArmor	= oMap.troop[iId].armor;
					iArmor		= Math.floor((Math.random() * iArmor) + 1);

					aResult.push("l'armure de " + sDef + ' le protège de ' + iArmor);

					var iWound	= +iDmg -iArmor
					if(iArmor > iDmg)
						var iWound	= 0;

					if(iWound)
					{
						aResult.push(sDef + ' perd ' + iWound + ' point de vie');

						var iPv		= oMap.troop[iId].pv;
						oMap.troop[iId].pv	-= +iWound;

						if(oMap.troop[iId].pv > 0)
							aResult.push('Il reste ' + oMap.troop[iId].pv + ' PdV a ' + sDef);
						else
						{
							var iTeam	= oMap.troop[iId].team;

							aResult.push(sDef + ' succombe à ses blessures.');

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
			}
			else
			{
				aResult.push('[' + iRoll + '] ' + sAtt + ' rate son attaque');
			}

			var sType	= 'fail';
			var sTitle	= 'attaque echouée';
			if(bSuccess)
			{
				sType	= 'pass';
				sTitle	= 'attaque réussie';
			}

			var oLog	=
			{
				type	: sType,
				hide	: true,
				title	: sTitle,
				text	: aResult,
			};

			oMap.logs[iTeamAtt].push(oLog);
		}
		else
		{
			toaster.pop('warning', 'Erreur', 'Cible non attaquable');
		}

		fnNextTroop();
	}

	function fnNextTroop()
	{
		console.info('fnNextTroop', oMap.iSelectedTroop);

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

		fnSelectTroop();
	}

	// Affichage des informations d'une unité (onMouseOver)
	function displayUnitInfo(iUnitId)
	{
		var oTroop				= oMap.troop[iUnitId];
		aInfo[(oTroop.team)]	= oTroop;
	}

	// Suppression des informations d'une unité (onMouseLeave)
	function clearUnitInfo()
	{
		aInfo		= ['', ''];
		this.info				= aInfo;
	}

	// Init battle
	var self				= this;
	var aSearchedCells		= [];
	var aAttackableCells	= [];
	var oMap				= {};
	var aInfo				= ['', ''];
	var iAction				= 1;	// 1 : move; 2 : attack

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
			setTimeout(fnSelectTroop,100);
		},
		function errorCallback(response)
		{
			console.error('battleController => errorCallback', response)
		}
	);

	// send to view
	this.info				= aInfo;

	// public function
	this.fnNextTroop		= fnNextTroop;
	this.selectDest			= selectDest;
	this.selectAtt			= selectAtt;
	this.displayUnitInfo	= displayUnitInfo;
	this.clearUnitInfo		= clearUnitInfo;
}

// Controller******************************************************************
var aRequire	=
[
	'ui.router',
];

app.controller('battleController', aRequire);

//app.service('battleData', battleData);

// Component ******************************************************************
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

app.component('battle', oOption);

if(oConfig.bDebug)
	console.info('LOTR : battle componant loaded');
