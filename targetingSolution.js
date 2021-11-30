class TargetingSolution {
  constructor(coordinates) {
    this.x = coordinates.x;
    this.y = coordinates.y;
    this.z = coordinates.z;
  }
  target() {
    const location = `(${this.x}, ${this.y}, ${this.z})`;
    return location;
  }
}

const sln = new TargetingSolution({ x: 45, y: 12, z: -1 });
console.log(sln.target());
