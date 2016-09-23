'use strict';

// Is file exists ?
function fileExists($http, pFile)
{
	$http.head(pFile).then
	(
		function successCallback(response)
		{
			return true;
		},
		function errorCallback(response)
		{
			return false;
		}
	);
}

if(oConfig.bDebug)
	console.info('LOTR : common functions loaded');