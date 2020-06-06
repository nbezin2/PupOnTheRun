class TrashCan {
	constructor() {
		this.height = 90;
		this.width = 55;
		this.img = new Image();
		this.img.src = './assets/trashCanT.png';
		
		this.xPos = canvas.width;
		this.yPos = canvas.height - this.height;
		this.xV = -4;
	}
	
	getWidth() {
		return this.width;
	}
	
	getY() {
		return this.yPos;
	}
	
	getX() {
		return this.xPos;
	}
	
	resetX() {
		this.xPos = canvas.width + 200;
	}
	
	updatePos() {
		if (this.xPos <= 0-this.width) {
			this.xPos = canvas.width+5;
		}	
		else {
			this.xPos += this.xV;
		}
	}
	
	show () {
		ctx.beginPath();
		ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
		
		//ctx.moveTo(this.xPos+(this.width/8), this.yPos+5);
		//ctx.lineTo(this.xPos+(this.width/8), canvas.height);
		//ctx.strokeStyle = "red";
		//ctx.stroke();
		ctx.closePath();
	}
}