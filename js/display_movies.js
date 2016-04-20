"use strict";

$(document).ready(function(){
	console.log("in display movie.js");

	var jqxhr = $.getJSON("../movie-list.json", function(data){
		var items = [];
		var $all = $('#all');
		var $english = $('#english');
		var $kannada = $('#kannada');
		var $hindi = $('#hindi');
		var $tamil = $('#tamil');

		$.each(data, function(idx, item){
			var htmlString = '<li><div><img src="images/' + item.EventId + '.jpg"' + 'alt="' + item.EventId + '"></div><div><p><b>' + item.EventName + '</b></p><p>' + item.Language + '</p><p>' + item.Genre + '</p><p>R | ' + item.RunTime + '</p></div><div class="popularity"><p><img src="../images/heart.png" alt="<3">' + item.likes + '</p><p style="font-size: 12px">' + item.UserVotes + 'votes</p></div></li>';

			items.push(htmlString);
		});
		$("<ul/>", {
			"class": "new-movie",
			html: items.join('')
		}).appendTo($all);

		var englishMovies = data.filter(function(obj){
			items = [];
			if('Language' in obj && obj["Language"].indexOf("English") !== -1){
				return true;
			}
			else
				return false;
		});

		$.each(englishMovies, function(idx, item){
			var htmlString = '<li><div><img src="images/' + item.EventId + '.jpg"' + 'alt="' + item.EventId + '"></div><div><p><b>' + item.EventName + '</b></p><p>' + item.Language + '</p><p>' + item.Genre + '</p><p>R | ' + item.RunTime + '</p></div><div class="popularity"><p><img src="../images/heart.png" alt="<3">' + item.likes + '</p><p style="font-size: 12px">' + item.UserVotes + 'votes</p></div></li>';

			items.push(htmlString);
		});
		$("<ul/>", {
			"class": "new-movie",
			html: items.join('')
		}).appendTo($english);

		var kannadaMovies = data.filter(function(obj){
			items = [];
			if('Language' in obj && obj["Language"].indexOf("Kannada") !== -1){
				return true;
			}
			else
				return false;
		});

		$.each(kannadaMovies, function(idx, item){
			var htmlString = '<li><div><img src="images/' + item.EventId + '.jpg"' + 'alt="' + item.EventId + '"></div><div><p><b>' + item.EventName + '</b></p><p>' + item.Language + '</p><p>' + item.Genre + '</p><p>R | ' + item.RunTime + '</p></div><div class="popularity"><p><img src="../images/heart.png" alt="<3">' + item.likes + '</p><p style="font-size: 12px">' + item.UserVotes + 'votes</p></div></li>';

			items.push(htmlString);
			console.log("items:", items);
		});
		$("<ul/>", {
			"class": "new-movie",
			html: items.join('')
		}).appendTo($kannada);

		var hindiMovies = data.filter(function(obj){
			items = [];
			if('Language' in obj && obj["Language"].indexOf("Hindi") !== -1){
				return true;
			}
			else
				return false;
		});

		$.each(hindiMovies, function(idx, item){
			var htmlString = '<li><div><img src="images/' + item.EventId + '.jpg"' + 'alt="' + item.EventId + '"></div><div><p><b>' + item.EventName + '</b></p><p>' + item.Language + '</p><p>' + item.Genre + '</p><p>R | ' + item.RunTime + '</p></div><div class="popularity"><p><img src="../images/heart.png" alt="<3">' + item.likes + '</p><p style="font-size: 12px">' + item.UserVotes + 'votes</p></div></li>';

			items.push(htmlString);
		});
		$("<ul/>", {
			"class": "new-movie",
			html: items.join('')
		}).appendTo($hindi);

		var tamilMovies = data.filter(function(obj){
			items = [];
			if('Language' in obj && obj["Language"].indexOf("Tamil") !== -1){
				return true;
			}
			else
				return false;
		});

		$.each(tamilMovies, function(idx, item){
			var htmlString = '<li><div><img src="images/' + item.EventId + '.jpg"' + 'alt="' + item.EventId + '"></div><div><p><b>' + item.EventName + '</b></p><p>' + item.Language + '</p><p>' + item.Genre + '</p><p>R | ' + item.RunTime + '</p></div><div class="popularity"><p><img src="../images/heart.png" alt="<3">' + item.likes + '</p><p style="font-size: 12px">' + item.UserVotes + 'votes</p></div></li>';

			items.push(htmlString);
			console.log("items:", items);
		});
		$("<ul/>", {
			"class": "new-movie",
			html: items.join('')
		}).appendTo($tamil);

	}).done(function(){
		console.log("success");
	}).fail(function(){
		console.log("error");
	}).always( function () {
		console.log("complete");
	});
});