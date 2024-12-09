function loadContentWithoutJQuery(){
	const xhr=new XMLHttpRequest();
	xhr.open('GET','content.txt',true);
	xhr.onreadystatechange=Function(){
		if(xhr.readyState===4&&xhr.status===200){
			document.getElementById('content-without-jquery").textContent=xhr.responseText;
		}
	}
	xhr.send();
}
function loadContentWithJQuery(){
	$.ajax({
		url:"content.txt",
		method:'GET',
		success:function(data){
			$('#content-with-jquery').text(data);
		},
		error:function(){
			$('#content-with-jquery').text('Failed to load content.');
		}
	});
}
function loadJSONWithJQuery(){
	$.getJSON('data.json',function(data){
		let content='<ul>';
		for(let key in data){
			content+=`<li>${key}:{data[key]}</li>`;
		}
		content+='</ul>';
		$('#json-content').html(content);
	});
}
function parseJSONExample(){
	const jsonString='{"name":"Alice","age":25,"city":"New York"}';
	const jsonObj=$.parseJSON(jsonString);
	let content=`<p>Name:${jsonObj.name}</p>`;
	content+=`<p>Age:${jsonObj.age}</p>`;
	content+=`<p>City:${jsonObj.city}</p>`; 
	$('#parsed-json-content').html(content);
}
