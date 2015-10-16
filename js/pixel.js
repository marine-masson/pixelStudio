// Class Pixel

/**
 * Représentation pxl
 * @param {number} x     position horizontal
 * @param {number} y     position vertical
 * @param {number} size  taille du pxl
 * @param {string} color couleur du pxl
 */
function Pixel(x ,y ,size ,color){

	this.$el = $('<div class="pixel"></div>');

	this.set_size(size);
	this.set_position(x,y);
	this.set_color(color || 'red');

	pixelStudio.$draw.append(this.$el);
};

Pixel.prototype ={
	/**
	 * Changement de position du pixxel
	 * @param {number} x position horizontak
	 * @param {number} y position vertical
	 */
	set_position: function(x,y){
		this.x = x;
		this.y = y;
		this.$el.css({
			top : ((this.y-1)*this.size) + 'px',
			left : ((this.x-1)*this.size) + 'px',
		})
	},
	/**
	 * Changement taille du pxl
	 * @param {number} size taille du pxl
	 */
	set_size: function(size){
		this.size = size;
		this.$el.css({
			width : this.size,
			height : this.size,
		});
	},
	/**
	 * Changement couleur du pxl
	 * @param {string} color couleur du pxl
	 */
	set_color: function(color){
		this.color = color;
		this.$el.css('background-color', this.color);
	}
}