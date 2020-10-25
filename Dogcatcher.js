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
		this.img.src = "./assets/dogCatcher1.png";
		this.img2.src = "./assets/dogCatcher2.png";
		this.img3.src = "./assets/dogCatcher3.png";
		this.animation = [this.img, this.img2, this.img3, this.img];
		this.frameNum = 0;
		this.cntF = 0;
		this.coolDown = 30;
	}
	
	updatePos() {
		if (!this.slipped) {
			this.xPos += this.dx;
		}
		else {
			this.coolDown++;
			if (this.coolDown >= 120) {
				this.coolDown = 0;
				this.slipped = false;
			}
			
			if (this.xPos > -60) {
				this.xPos--;
			}
		}
	}
	
	show() {
		ctx.beginPath();
		ctx.drawImage(this.animation[this.frameNum], this.xPos, this.yPos, this.width, this.height);
		ctx.closePath();
		
		if (!this.slipped) {
			if (this.cntF == 10) {
				if (this.frameNum < 2) {
					this.frameNum++;
				}
				else {
					this.frameNum = 0;
				}
				this.cntF = 0;
			}
			this.cntF++;
		}
		else {
			this.frameNum = 3;
		}
	}
	
}