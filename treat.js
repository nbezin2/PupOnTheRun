class Treat {
	constructor() {
		this.xPos = canvas.width;
		this.yPos = Math.floor(Math.random() * Math.floor(200))+100;
		this.width = 30;
		this.height = 17;
		this.dx = -4;
		this.img = new Image();
		this.img.src = "./assets/treat.PNG";
		this.eaten = false;
	}
	
	getX() {
		return this.xPos;
	}
	
	getY() {
		return this.yPos;
	}
	
	getWidth() {
		return this.width;
	}
	
	checkEaten(p1) {
		if (p1.getX() <= this.xPos && p1.getX()+p1.getWidth() >= this.xPos && this.yPos <= p1.getY()+p1.getHeight() && this.yPos+this.height >= p1.getY() && !this.eaten) {
			this.eaten = true;
			return true;
		}
		return false;
	}
	
	updatePos() {
		if (this.xPos < -canvas.width) {
			this.xPos = canvas.width;
			this.eaten = false;
			this.yPos = Math.floor(Math.random() * Math.floor(200))+100;
		}
		else {
			this.xPos += this.dx;
		}
	}
	
	show() {
		if (!this.eaten) {
			ctx.beginPath();
			ctx.drawImage(this.img, this.xPos, this.yPos, this.width, this.height);
			ctx.closePath();
		}
	}
}
