$(document).ready(function(){
	console.log("in movie.js");
	var jqxhr = $.getJSON("movie-list.json", function(data){
		var items = [];
		var $list = $('#list');
		$.each(data, function(idx, item){
			items.push('<li><div><img src="images/' + item.EventId + '.jpg"' + 'alt="' + item.EventId + '"></div><div><p><b>' + item.EventName + '</b></p><p>' + item.Language + '</p><p>' + item.Genre + '</p><p>' + item.RunTime + '</p><p>' + item.UserVotes + '</p><p>' + item.likes + '</p></div></li>');
		});
		$("<ul/>", {
			"class": "new-movie",
			html: items.join('')
		}).appendTo($list);
	}).done(function(){
		console.log("success");
	}).fail(function(){
		console.log("error");
	}).always( function () {
		console.log("complete");
	});
});