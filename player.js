class Player {
	
	constructor(g) {
		this.jumping = false;
		this.airB = false;
		this.xPos = canvas.width/3;
		this.yPos = 370;
		this.width = 80;
		this.height = 50;
		this.yV = 0;
		this.jumpV = -20;
		this.gravity = g;
		this.pup1 = new Image();
		this.pup1.src = "./assets/pupStillT.png";
		this.pup2 = new Image();
		this.pup2.src = "./assets/pupRunT.png";
		this.animateFrame = [this.pup1, this.pup2];
		this.frameNum = 0;
		this.cntF = 0;
		this.ground = 370;
		this.hit = false;
		
		//Detects hitting trash can and eating treats
		this.hitB1_xPos = this.xPos + 80;
		this.hitB1_yPos = this.yPos;
		this.hitB1_width = 1;
		this.hitB1_height = 50;
		
		//Detects being caught by dog catcher
		this.hitB2_xPos = this.xPos;
		this.hitB2_yPos = this.yPos;
		this.hitB2_width = 1;
		this.hitB2_height = 50;
	}
	
	getHBox1W() {
		return this.hitB1_width;
	}
	
	getHBox1Y() {
		return this.hitB1_yPos;
	}
	
	getHBox1X() {
		return this.hitB1_xPos;
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
	
	getYV() {
		return this.yV;
	}
	
	setGround(g) {
		this.ground = g;
	}
	
	checkOnT(o) {
		/*if (this.yPos >= 370) {
			this.ground = 370;
			return true;
		}
		else if (this.yPos >= o.getY()-50 && (this.xPos+80 > o.getX() && this.xPos < o.getX()+o.getWidth())) {
			if (!this.hit) {
				this.ground = o.getY()-50;
				return true;
			}
		}
		else {
			this.ground = 370;
			return false;
		}*/
	} 
	
	checkOnCar(c) {
		/*if (this.yPos >= 370) {
			this.ground = 370;
			return true;
		}
		else if (this.yPos+50 >= c.getY()+50 && (this.xPos+80 > c.getX() && this.xPos+80 < c.getX()+78)) {
			if (!this.hit) {
				this.ground = c.getY()+50;
				return true;
			}
		}
		else if (this.yPos+50 >= c.getY()+5 && (this.xPos+80 > c.getX()+78 && this.xPos < c.getX()+150)) {
			if (!this.hit) {
				this.ground = c.getY()+5;
				return true;
			}
		}
		else if (this.yPos+50 >= c.getY()+50 && (this.xPos > c.getX()+150 && this.xPos < c.getX()+c.getWidth())) {
			if (!this.hit) {
				this.ground = c.getY()+50;
				return true;
			}
		}
		else {
			this.ground = 370;
			return false;
		}*/
	}
	
	jump() {
		this.jumping = true;
	}
	
	updatePos() {
		this.yPos += this.yV;
		this.yV += this.gravity;
		
		if (this.yPos > this.ground) {
			this.yPos = this.ground;
		}
		
		if (!this.airB) {
			if (this.jumping) {
				this.airB = true;
				this.yV = this.jumpV;
			}
		}
		else {
			if (this.yPos == this.ground) {
				this.airB = false;
				this.jumping = false;
			}
		}
			
		if (this.yV > 10) {
			this.yV = 10;
		}
		this.hitB1_xPos = this.xPos + 80;
		this.hitB1_yPos = this.yPos;
		
	}

	show(){
		
		ctx.beginPath();
		ctx.drawImage(this.animateFrame[this.frameNum], this.xPos, this.yPos, this.width, this.height);
		ctx.closePath();
		
		if (this.cntF == 6) {
			if (this.frameNum == 1) {
				this.frameNum = 0;
			}
			else {
				this.frameNum = 1;
			}
			this.cntF = 0;
		}
		this.cntF++;
	}
}