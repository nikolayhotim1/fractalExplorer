'use strict';
importScripts('workerLib.js');

onmessage = function (task) {
	let workerResult = computeRow(task.data);
	postMessage(workerResult);
	// close();
};