class Background {
	constructor() {
		this.width = canvas.width;
		this.height = (canvas.height/3)*2;
		this.xPos = 0;
		this.yPos = 0;
		this.dx = -0.1;
		
		this.street = new Image();
		this.backGround = new Image();
		this.street.src = './assets/street.png';
		this.backGround.src = './assets/background.png';
		
	}
	
	updatePos() {
		
	}
	
	show() {
		ctx.beginPath();
		ctx.drawImage(this.backGround, this.xPos, this.yPos, this.width, this.height);
		ctx.drawImage(this.street, this.xPos, this.yPos+this.height, this.width, this.height/2);
		ctx.closePath();
	}
}