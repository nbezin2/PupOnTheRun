class Bird {
	constructor() {
		this.xPos = canvas.width;
		this.yPos = Math.floor(Math.random() * Math.floor(110));
		this.dx = Math.floor(Math.random() * Math.floor(5))+5;
		this.dy = 0;
		this.width = 70;
		this.height = 40;
		this.gravity = .9;
		
		this.img1 = new Image();
		this.img2 = new Image();
		this.img1.src = "./assets/bird1.PNG";
		this.img2.src = "./assets/bird2.PNG";
		this.animation = [this.img1, this.img2];
		this.frameNum = 0;
		this.cntF = 0;
		
		this.hit = false;
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
	
	getHeight() {
		return this.height;
	}
	
	setHit() {
		this.hit = true;
	}
		
	updatePos() {
		if (!this.hit) {
			if (this.xPos <= -(canvas.width*2)) {
				this.xPos = canvas.width;
				this.yPos = Math.floor(Math.random() * Math.floor(110));
				this.dx = Math.floor(Math.random() * Math.floor(5))+5;
			}
			else {
				this.xPos -= this.dx;
			}
		}
		else {
			if (this.xPos <= -(canvas.width*2)) {
				this.xPos = canvas.width;
				this.yPos = Math.floor(Math.random() * Math.floor(110));
				this.dx = Math.floor(Math.random() * Math.floor(5))+5;
				this.hit = false;
			}
			else {
				this.yPos += this.dy
				this.dy += this.gravity;
				this.xPos -= this.dx;
				if (this.dy >= 10) {
					this.dy = 10;
				}
			}
		}
	}
	
	show() {
		ctx.beginPath();
		ctx.drawImage(this.animation[this.frameNum], this.xPos, this.yPos, this.width, this.height);
		ctx.closePath();
		
		this.cntF++;
		if (this.cntF == 9) {
			if (this.frameNum == 0) {
				this.frameNum = 1;
			}
			else {
				this.frameNum = 0;
			}
			this.cntF = 0;
		}
	}
}
