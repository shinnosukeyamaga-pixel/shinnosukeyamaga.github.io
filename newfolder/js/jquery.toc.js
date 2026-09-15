jQuery.fn.toc = function(depth) {
	return this.each(function() {
		var headers, re, i;
		headers = [];
		re = new RegExp("h([1-" + depth + "])", "i");
		i = 0;
		$("*").each(function() {
			var ms;
			ms = $(this).get(0).tagName.match(re);
			if(ms) {
				$(this).prop("id", "header" + i);
				headers.push([
					parseInt(ms[1]),
					"<a href='#header" + i + "'>" + $(this).html() + "</a>"
				]);
				i++;
			}
		});
		$(this).append(array2ul(headers));
	});
}

function array2ul(a) {
	var t, exlevel, level, i, j;
	t = "";
	exlevel = 0;
	for(i = 0; i <= a.length; i++) {
		level = i < a.length ? a[i][0] : 0;
		for(j = 0; j < Math.abs(exlevel - level); j++) {
			t += exlevel < level ? "<ul>" : "</ul>";
		}
		t += i < a.length ? "<li>" + a[i][1] + "</li>" : "";
		exlevel = level;
	}
	return t;
}
