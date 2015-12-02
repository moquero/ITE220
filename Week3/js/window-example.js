var myWindow = {
	screenX: window.screenX,
	screenY: window.screenY,
	location: window.location.pathname,
	screenW : window.screen.width,
	screenZ : window.screen.height,

	render: function() {
		var ele = document.getElementById("location");
		ele.value = this.location;

		ele = document.getElementById("sx");
		ele.value = this.screenX;

		ele = document.getElementById("sy");
		ele.value = this.screenY;

		ele = document.getElementById("sz");
		ele.value = this.screenW; 

		ele = document.getElementById("sa");
		ele.value = this.screenZ;
	}
};


myWindow.render();