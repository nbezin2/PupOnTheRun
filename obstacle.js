class Obstacle {
	constructor () {
		this.active = Math.floor(Math.random() * Math.floor(2));
		this.obstacle = [];
		
		this.obstacle.push(new TrashCan());
		this.obstacle.push(new Car());
	}
	
	getObst() {
		return this.obstacle[this.active];
	}
	
	checkFloor(p1) {
		if (this.active == 0) {
			if (p1.getY() >= 370) {
				p1.setGround(370);
			}
			else if (p1.getX()+80 > this.obstacle[this.active].getX() && p1.getX() < this.obstacle[this.active].getX()+this.obstacle[this.active].getWidth()) {
				if (!this.hit) {
					p1.setGround(this.obstacle[this.active].getY()-45);
				}
			}
			else {
				p1.setGround(370);
			}		
		}
		else if (this.active == 1) {
			if (p1.getY() >= 370) {
				p1.setGround(370);
			}
			else if (p1.getX()+80 > this.obstacle[this.active].getX() && p1.getX()+80 < this.obstacle[this.active].getX()+78) {
				if (!this.hit) {
					p1.setGround(this.obstacle[this.active].getY()+5);
				}
			}
			else if (p1.getX()+80 > this.obstacle[this.active].getX()+78 && p1.getX() < this.obstacle[this.active].getX()+150) {
				if (!this.hit) {
					p1.setGround(this.obstacle[this.active].getY()-45);
				}	
			}
			else if (p1.getX() > this.obstacle[this.active].getX()+150 && p1.getX() < this.obstacle[this.active].getX()+this.obstacle[this.active].getWidth()) {
				if (!this.hit) {
					p1.setGround(this.obstacle[this.active].getY()+5);
				}
			}
			else {
				p1.setGround(370);
			}
		}
	}
	
	checkCollision(p1) {
		if (this.active == 0) {
			if (this.obstacle[this.active].getX()<p1.getHBox1X() && this.obstacle[this.active].getX()+(this.obstacle[this.active].getWidth()/8)>p1.getHBox1X()+p1.getHBox1W() && this.obstacle[this.active].getY()+5<p1.getHBox1Y()+50) {
				console.log("hitBoxT");
				this.hit = true;
				return true;
			}
			else {
				this.hit = false;
				return false;
			}
		}
		else if (this.active == 1) {
			if (p1.getHBox1X()>this.obstacle[this.active].getX() && p1.getHBox1X()<this.obstacle[this.active].getX()+(this.obstacle[this.active].getWidth()/8) && p1.getHBox1Y()+50>this.obstacle[this.active].getY()+50) {
				console.log("hitBox1");
				this.hit = true;
				return true;
			}
			else if (p1.getHBox1X()>this.obstacle[this.active].getX()+78 && p1.getHBox1X()<this.obstacle[this.active].getX()+88 && p1.getHBox1Y()+50>this.obstacle[this.active].getY()+5) {
				console.log("hitBox2");
				this.hit = true;
				return true;
			}
			else {
				this.hit = false;
				return false;
			}
		}
	}
	
	updatePos() {
		if (this.obstacle[this.active].getX()+this.obstacle[this.active].getWidth() <= 0) {
			this.active = Math.floor(Math.random() * Math.floor(2));
		}
		this.obstacle[this.active].updatePos();
	}
	
	show() {
		this.obstacle[this.active].show();
	}
}