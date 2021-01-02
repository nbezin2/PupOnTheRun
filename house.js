class House {
	constructor(x) {
		this.img1 = new Image();
		this.img2 = new Image();
		this.img3 = new Image();
		this.img4 = new Image();
		this.img5 = new Image();
		this.img6 = new Image();
		this.img7 = new Image();
		this.animation = [];
		
		this.color = Math.floor(Math.random()* Math.floor(3));
		if (this.color == 0) {
			this.img1.src = "./assets/oHouse1.png";
			this.img2.src = "./assets/oHouse2.png";
			this.img3.src = "./assets/oHouse3.png";
			this.img4.src = "./assets/oHouse4.png";
			this.img5.src = "./assets/oHouse5.png";
			this.img6.src = "./assets/oHouse6.png";
			this.img7.src = "./assets/oHouse7.png";
			
			this.animation.push(this.img1);
			this.animation.push(this.img2);
			this.animation.push(this.img3);
			this.animation.push(this.img4);
			this.animation.push(this.img5);
			this.animation.push(this.img6);
			this.animation.push(this.img7);
			
		}
		else if (this.color == 1) {
			this.img1.src = "./assets/gHouse1.png";
			this.img2.src = "./assets/gHouse2.png";
			this.img3.src = "./assets/gHouse3.png";
			this.img4.src = "./assets/gHouse4.png";
			this.img5.src = "./assets/gHouse5.png";
			this.img6.src = "./assets/gHouse6.png";
			this.img7.src = "./assets/gHouse7.png";
			
			this.animation.push(this.img1);
			this.animation.push(this.img2);
			this.animation.push(this.img3);
			this.animation.push(this.img4);
			this.animation.push(this.img5);
			this.animation.push(this.img6);
			this.animation.push(this.img7);
		}
		else {
			this.img1.src = "./assets/pHouse1.png";
			this.img2.src = "./assets/pHouse2.png";
			this.img3.src = "./assets/pHouse3.png";
			this.img4.src = "./assets/pHouse4.png";
			this.img5.src = "./assets/pHouse5.png";
			this.img6.src = "./assets/pHouse6.png";
			this.img7.src = "./assets/pHouse7.png";
			
			this.animation.push(this.img1);
			this.animation.push(this.img2);
			this.animation.push(this.img3);
			this.animation.push(this.img4);
			this.animation.push(this.img5);
			this.animation.push(this.img6);
			this.animation.push(this.img7);
		}
		
		
		
		
		this.frameNum = x;
		this.cntF = 0;
		this.height = 250;
		this.width = 190;
		this.xPos=canvas.width+ (x*(this.width+100));
		this.yPos=canvas.height - 400;
		this.dx = -2;
		//this.aniDir = 0;
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
		ctx.drawImage(this.animation[this.frameNum], this.xPos, this.yPos, this.width, this.height);
		ctx.closePath();
		
		this.cntF++;		
		if (this.cntF == 15) {
			if (this.frameNum == 6) {
				this.frameNum = 0;
			}
			else {
				this.frameNum++;
			}
			this.cntF=0;
		}
		
		/*if (this.aniDir == 0) {
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
		}*/
	}
}