var doc = document;

function test(){
	var element = doc.getElementById('block-1');
	var link = doc.createElement('a');
	var br = doc.createElement('br');

	link.innerHTML = 'go to google';
	link.setAttribute('href', 'http://google.com');
//	link.href = 'http://google.com';

	element.appendChild(br);
	element.appendChild(link);

};

(function(){
	var context =doc.createTextNode("this is dynamically created element!");
	var elem = doc.createElement('p');
	elem.appendChild(context);
	var wrapp = doc.getElementById('block-1');
	console.log(wrapp);
	wrapp.parentNode.insertBefore(elem, wrapp);
//	wrapp.parentNode.appendChild(elem);
//	wrapp.appendChild(elem);



})();