$(function() {
	var trigger = $(".button-submit").click(function(e) {
		var x = $("#x-input").val();
		var y = $("#y-input").val();
		var trendlineOption;
		var msgBox;
		if (x === "" || y === "") {
			$(".msg-box").remove();
			msgBox = createMsgElementWithMsg("please provide some values for both x-axis and y-axis with comma separated format.");
			$("#container").append(msgBox)
			$(".msg-box").fadeOut(6000);
		}
		else {
			x = x.trim().split(/[\s,]+/);
			y = y.trim().split(/[\s,]+/);
			trendlineOption = $('input:radio[name=degree]:checked').val();
			console.log(trendlineOption);
			console.log(x);
			console.log(y);
			x = x.map(parseFloat);
			y = y.map(parseFloat);
			
			// _ is a marker for an unneeded variable
			// We only need i as index here
			var pairwise = x.map(function(_,i) { 
				return [x[i], y[i]]; // can read x and y here because of closure
			});
			drawChart(pairwise, trendlineOption);
			console.table(pairwise);
		}
	});

	function createMsgElementWithMsg(msg) {
		return $("<p></p>")
			.addClass("msg-box")
			.text(msg)
			.css({
				"background-color":"#FFFF4C",
				"text-align":"center"
			});
	}

	// Load the Visualization API and the piechart package.
	// google.load('visualization', '1.1', {'packages':['corechart']}); // already loaded

	// Set a callback to run when the Google Visualization API is loaded.
	google.setOnLoadCallback(drawEmpty);
	google.setOnLoadCallback(trigger);

	// Callback that creates and populates a data table,
	// instantiates the pie chart, passes in the data and
	// draws it.
	function drawEmpty() {
		drawChart([[0,0]], "none");
	}

	function drawChart(raw_data, trendlineOption) {
		// Create the data table.
		raw_data.unshift(['x', 'y']);
		
		var data = google.visualization.arrayToDataTable(
			raw_data
			// [
				// ['x', 'y'],
				// [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]
			// ]
		);		

		// Set chart options
		var options = {
			title: 'Scatter plot with trend line',
			height: 600,
			width: 800,
			hAxis: {title: 'x'},
			vAxis: {title: 'y'},
			legend: 'none'
		};
		
		if (trendlineOption !== "none") {
			// Draw a trendline for data series 0.
			options['trendlines'] = { 
				0: {   
					type: trendlineOption,
					color: 'green'
				} 
			} 
		}
		// Instantiate and draw our chart, passing in some options.
		var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
		chart.draw(data, options);
	}
});