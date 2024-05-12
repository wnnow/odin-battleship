class Ship {
  constructor(length) {
    this.length = length;
    this.sunkStatus = false;
    this.hitCounts = 0;
    this.position = [];
  }

  hit() {
    if (this.hitCounts >= this.length) return;
    this.hitCounts++;
    this.isSunk();
  }

  isSunk() {
    if (this.hitCounts === this.length) {
      this.sunkStatus = true;
      return true;
    }
    return false;
  }
}

export { Ship };
