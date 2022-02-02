'use strict';
function computeRow(task) {
	let iter = 0;
	let c_i = task.i;
	let max_iter = task.max_iter;
	let escape = task.escape * task.escape;
	task.values = [];

	for (let i = 0; i < task.width; i++) {
		let c_r = task.r_min + (task.r_max - task.r_min) * i / task.width;
		let z_r = 0, z_i = 0;

		for (iter = 0; z_r * z_r + z_i * z_i < escape && iter < max_iter; iter++) {
			let tmp = z_r * z_r - z_i * z_i + c_r;
			z_i = 2 * z_r * z_i + c_i;
			z_r = tmp;
		}

		if (iter === max_iter) {
			iter = -1;
		}

		task.values.push(iter);
	}

	return task;
}