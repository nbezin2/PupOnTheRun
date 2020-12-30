class Car {
	constructor() {
		this.height=140;
		this.width=220;
		this.xPos=canvas.width;
		this.yPos=canvas.height-this.height;
		this.dx = -8;
		
		this.img1 = new Image();
		this.img2 = new Image();
		this.animation = [];
		this.carNum = Math.floor(Math.random()* Math.floor(3));
		if (this.carNum == 0) {
			this.img1.src = "./assets/car1B.PNG";
			this.img2.src = "./assets/car2B.PNG";
			
			this.animation.push(this.img1);
			this.animation.push(this.img2);
			
		}
		else if (this.carNum == 1) {
			this.img1.src = "./assets/car1G.PNG";
			this.img2.src = "./assets/car2G.PNG";
			
			this.animation.push(this.img1);
			this.animation.push(this.img2);
		}
		else {
			this.img1.src = "./assets/car1R.PNG";
			this.img2.src = "./assets/car2R.PNG";
			
			this.animation.push(this.img1);
			this.animation.push(this.img2);
		}
		
		this.frameNum = 0;
		this.cntF = 0;
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
	
	
	updatePos() {
		if (this.xPos+this.width <= 0) {
			this.xPos = canvas.width+Math.floor(Math.random()*Math.floor(250));
			this.carNum = Math.floor(Math.random()* Math.floor(3));
			if (this.carNum == 0) {
				this.img1.src = "./assets/car1B.PNG";
				this.img2.src = "./assets/car2B.PNG";
			}
			else if (this.carNum == 1) {
				this.img1.src = "./assets/car1G.PNG";
				this.img2.src = "./assets/car2G.PNG";
			}
			else {
				this.img1.src = "./assets/car1R.PNG";
				this.img2.src = "./assets/car2R.PNG";
			}
			this.animation[0] = this.img1;
			this.animation[1] = this.img2;
		}
		else {
			this.xPos+=this.dx;
		}
	}
	
	show() {
		ctx.beginPath();
		ctx.drawImage(this.animation[this.frameNum], this.xPos, this.yPos, this.width, this.height);
		
		/*ctx.moveTo(this.xPos, this.yPos+50);
		ctx.lineTo(this.xPos+this.width, this.yPos+50);
		ctx.moveTo(this.xPos+78, this.yPos);
		ctx.lineTo(this.xPos+150, this.yPos);
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.closePath();
		
		ctx.beginPath();
		ctx.moveTo(this.xPos+78, this.yPos);
		ctx.lineTo(this.xPos+78, this.yPos+50);
		ctx.moveTo(this.xPos, this.yPos+50);
		ctx.lineTo(this.xPos, this.yPos+this.height);
		ctx.strokeStyle = "red";
		ctx.stroke();
		ctx.closePath();*/
		
		this.cntF++;
		if (this.cntF == 4) {
			if(this.frameNum==0){
				this.frameNum=1;
			}
			else {
				this.frameNum=0;
			}
			this.cntF=0;
		}
	}
	
}
