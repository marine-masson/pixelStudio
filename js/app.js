
	var pixelStudio = {

			pixel_dim: 50,
			$draw: null,

			pixels: [],

		init: function(){
			var self = this;

			this.init_draw();

			this.$draw.on('mousedown', function(e){
				var x = Math.floor(e.offsetX/self.pixel_dim)+1;
				var y = Math.floor(e.offsetY/self.pixel_dim)+1;

				var p = new Pixel(x,y,self.pixel_dim,'#000');
			console.log(e);
			});

		},
		
		init_draw: function(){
			this.$draw = $('#container');

			var w = window.innerWidth/this.pixel_dim;
				w = Math.floor(w - (w/6));

			var h = Math.floor(window.innerHeight/this.pixel_dim);

			console.log(w,h);

			this.$draw.css({
				width:(w*this.pixel_dim)+'px',
				height:(h*this.pixel_dim)+'px',
			})
		}

	};