class House {
	constructor(x) {
		this.house1 = new Image();
		this.house2 = new Image();
		this.house3 = new Image();
		this.house1.src = './assets/house1T.png';
		this.house2.src = './assets/house2T.png';
		this.house3.src = './assets/house3T.png';
		this.houseAnimate = [this.house1, this.house2, this.house3];
		this.frameNum = x;
		this.cntF = 0;
		this.height = 250;
		this.width = 190;
		this.xPos=canvas.width+ (x*(this.width+100));
		this.yPos=canvas.height - 400;
		this.dx = -2;
		this.aniDir = 0;
	}
	
	updatePos () {
		if (this.xPos < 0-this.width) {
			this.xPos = canvas.width;
		}
		else {
			this.xPos += this.dx;
		}
	}
	
	show() {
		ctx.beginPath();
		ctx.drawImage(this.houseAnimate[this.frameNum], this.xPos, this.yPos, this.width, this.height);
		ctx.closePath();
		
		this.cntF++;
		if (this.aniDir == 0) {
			if (this.cntF == 15) {
				if (this.frameNum == 0) {
					this.frameNum = 1;
				}
				else if (this.frameNum == 1) {
					this.frameNum = 2;
					this.aniDir = 1;
				}
				else{
					this.aniDir = 1;
				}
				this.cntF=0;
			}
		}
		else {
			if (this.cntF == 15) {
				if (this.frameNum == 2) {
					this.frameNum = 1;
				}
				else if (this.frameNum == 1) {
					this.frameNum = 0;
					this.aniDir = 0;
				}
				this.cntF=0;
			}
		}
	}
}