/**
 * 
 */

var a = [{
	"clientId": "Client1",
	"items": ["Item1", "Item2", "Item3"]
}, {
	"clientId": "Client2",
	"items": ["Item4", "Item5", "Item6"]
}, {
	"clientId": "Client3",
	"items": ["Item1", "Item2", "Item4", "Item6"]
}, {
	"clientId": "Client4",
	"items": ["Item3", "Item5", "Item6", "Item7", "Item8"]
}];
// var select = document.getElementById("clientPopulate");
function myFunction() {
	var select = document.getElementById("clientPopulate");
	for (var i = 0; i < a.length; i++) {
		var option = document.createElement('option');
		option.setAttribute('value', a[i].clientId);
		option.appendChild(document.createTextNode(a[i].clientId));
		console.log(select)
		select.appendChild(option);
	}

}
// window.onload= myFunction();
function myfunction2() {

	var select2 = document.getElementById("clientPopulate").value;
	console.log(select2);
	var i, x = "";
	var j;
	for (i = 0; i < a.length; i++) {

		if (a[i].clientId == select2) {
			for (j = 0; j < a[i].items.length; j++) {
				x += document.getElementById("demo").innerHTML = a[i].items[j] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			}
			document.getElementById("demo").innerHTML = "Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + x;
			var t2 = document.createElement("br");
			document.getElementById("demo").appendChild(t2);
			if (a[i].clientId == select2) {
				for (j = 0; j <= a[i].items.length; j++) {
					var t = document.createElement("input");
					t.setAttribute("type", "text");
					t.setAttribute("size", "1");
					t.setAttribute("style", "margin-right: 25px");
					

					document.getElementById("demo").appendChild(t);
				}
			}
		}
	}
}

