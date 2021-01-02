class Dogcatcher {
	constructor() {
		this.slipped = true;
		this.height = 120;
		this.width = 100;
		this.xPos = -100;
		this.yPos = canvas.height - 120;
		this.dx = 1;
		
		this.img = new Image();
		this.img2 = new Image();
		this.img3 = new Image();
		this.img4 = new Image();
		this.img.src = "./assets/dogCatcher1.png";
		this.img2.src = "./assets/dogCatcher2.png";
		this.img3.src = "./assets/dogCatcher3.png";
		this.img4.src = "./assets/dogCatcher4.png";
		this.animation = [this.img, this.img2, this.img3, this.img4];
		this.frameNum = 3;
		this.cntF = 0;
		this.coolDown = 30;
		this.frameAdjuster = 1;
	}
	
	getHeight() {
		return this.height;
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
	
	setSlipped() {
		this.slipped = true;
	}
	
	updatePos() {
		if (!this.slipped) {
			this.xPos += this.dx;
		}
		else {
			if (this.xPos+this.width < 0) {
				this.coolDown++;
				this.frameNum = 3;
				if (this.coolDown >= 1000) {
					this.coolDown = 0;
					this.slipped = false;
				}
			}
			
			
			if (this.xPos > -120) {
				this.xPos--;
			}
		}
	}
	
	show() {
		ctx.beginPath();
		ctx.drawImage(this.animation[this.frameNum], this.xPos, this.yPos, this.width, this.height);
		ctx.closePath();
		
		
		if (!this.slipped) {
			this.cntF += 1;
			if (this.cntF == 10) {
				if (this.frameNum == 3) {
					this.frameNum = 1;
				}
				else if (this.frameNum == 2) {
					this.frameAdjuster *= -1;
					this.frameNum += this.frameAdjuster;
				}
				else if (this.frameNum == 0) {
					this.frameAdjuster *= -1;
					this.frameNum += this.frameAdjuster;
				}
				else {
					this.frameNum += this.frameAdjuster;
				}
				this.cntF = 0;
			}
			
		}
		else {
			this.frameNum = 3;
		}
	}
	
}