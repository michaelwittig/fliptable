function createUndefineds(n) {
	var undefineds = [], i;
	for(i = 0; i < n; i += 1) {
		undefineds.push(undefined);
	}
	return undefineds;
}

function flipRow2Col(rows) {
	var cols = {}, col;
	rows.forEach(function(row, i) {
		for (col in row) {
			if (row.hasOwnProperty(col)) {
				// create empty array if the col was first seen
				if (cols[col] === undefined) {
					cols[col] = [];
				}
				// fill col with undefined values for missing values
				if (cols[col].length !== i) {
					Array.prototype.push.apply(cols[col], createUndefineds(i - cols[col].length));
				}
				cols[col].push(row[col]);
			}
		}
	});
	// check if all cols are filled with undefined values if needed
	for (col in cols) {
		if (cols.hasOwnProperty(col)) {
			if (cols[col].length !== rows.length) {
				Array.prototype.push.apply(cols[col], createUndefineds(rows.length - cols[col].length));
			}
		}
	}
	return cols;
}

function flipCol2Row(cols) {
	var rows = [], col;
	for (col in cols) {
		if (cols.hasOwnProperty(col)) {
			cols[col].forEach(function(value, i) {
				if (rows[i] === undefined) {
					rows[i] = {};
				}
				if (value !== undefined) {
					rows[i][col] = value;
				}
			});
		}
	}
	return rows;
}

function flip(o) {
	if (Array.isArray(o)) {
		return flipRow2Col(o);
	}
	if (typeof o === "object") {
		return flipCol2Row(o);
	}
	throw new Error("only array or object is supported");
}

module.exports = flip;
