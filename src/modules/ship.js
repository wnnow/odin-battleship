class Ship {
  constructor(length) {
    this.length = length;
    this.sinkStatus = false;
    this.hitCounts = 0;
  }
  hit() {
    this.hitCounts++;
  }

  isSunk() {
    if (this.hitCounts === this.length) return true;
  }
}

export { Ship };
