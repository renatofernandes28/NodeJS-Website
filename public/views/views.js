$.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
                if (o[this.name] !== undefined) {
                        if (!o[this.name].push) {
                                o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || '');
                } else {
                        o[this.name] = this.value || '';
                }
        });
        return o;
};


var HomeView = Backbone.View.extend({
	render: function() {
		$.get('templates/home.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#top').html(template).trigger('create');
		})
		return this;
	}
});

var MenuView = Backbone.View.extend({

	render: function() {
		$.get('templates/menu.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#sidebar-wrapper').html(template).trigger('create');
		})
		return this;
	}
});

var CarouselView = Backbone.View.extend({
	render: function() {

		var template =    
		"<div class='centertext'>"+
	    "<h1 style='font-size:60px;'>Personal Projects!</h1>"+
	    "<br>"+
	  	"</div>"+
	  	"<div id='projects'>"+
	  	"<div class='item centertext'><h1>IntuiMix</h1><a href='https://intuimix.quickmvp.com/'><img src='img/file-page1.png' alt='img'></a></div>"+
	  	"<div class='item centertext'><h1>STIM</h1><a href='https://www.youtube.com/watch?v=lp-gPd0iKfo&feature'><img src='img/hackthenorth.png' alt='img'></a></div>"+
	  	"<div class='item centertext'><h1>Classic TicTacToe</h1><a href='https://play.google.com/store/apps/details?id=com.fernsproductions.tictactoe'><img src='img/unnamed.webp' alt='img'></a></div>"+
		"<div class='item centertext'><h1>Shape Slicer</h1><a href='https://github.com/renatofernandes28/ShapeSlicer'><img src='img/fruitninja.jpg' alt='img'></a></div>";
		

		$('#carousel').html(template).trigger('create');
		$('#projects').owlCarousel({
			autoPlay: 5000,
			items: 4,
			loop: true
		});

	}
});


var ServicesView = Backbone.View.extend({
	render: function() {
		$.get('templates/services.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#services').html(template).trigger('create');
		})
		return this;
	}
});


var AboutmeView = Backbone.View.extend({
	render: function() {
		$.get('templates/aboutme.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#aboutme').html(template).trigger('create');
		})
	}
});


var FooterView = Backbone.View.extend({
	render: function() {
		$.get('templates/footer.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#footer').html(template).trigger('create');
		})
	}
});




