var find = [
	{
		class: 'logo',
		action: function(obj) {
			obj.removeAttribute("href");
		}
	},
	{
		class: 'fastspot',
		action: function(obj) {
			var keep = null;
			for (var i = obj.children.length - 1; i >= 0; i--) {
				if (obj.children[i].tagName == 'P') {
					keep = obj.children[i];
				}
			};
			if (keep != null) {
				keep.innerHTML = keep.innerHTML.match(/(Version [0-9|.]{0,})/)[0];
				obj.innerHTML = '';
				obj.appendChild(keep);
			};
		}
	}
];
 
document.addEventListener('DOMContentLoaded', function() {
    findAndDoStuff(find);
}, false);
 
function findAndDoStuff(input) {
	for (var i = input.length - 1; i >= 0; i--) {
		var domelem = [];
 
		if (input[i].class !== undefined) {
 
			if (typeof input[i].class !== 'object') {
				input[i].class = [input[i].class];
			};
 
			for (var ii = input[i].class.length - 1; ii >= 0; ii--) {
				document.getElementsByClassName(input[i].class[ii])
 
				for (var iii = document.getElementsByClassName(input[i].class[ii]).length - 1; iii >= 0; iii--) {
					domelem.push({
						elem: document.getElementsByClassName(input[i].class[ii])[iii],
						action: input[i].action
					});
				};
			};
		};
 
		for (var ii = domelem.length - 1; ii >= 0; ii--) {
			domelem[ii].action(domelem[ii].elem);
		};
	};
}