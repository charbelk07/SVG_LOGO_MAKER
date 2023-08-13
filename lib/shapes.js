class Shape {
  //constructor is for properties
  constructor() {
    this.color = "";
  }
  //methods are functions attached to objects
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="95" stroke="red" fill="${this.color}" stroke-width="5"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="30" y="30" width="170" height="170" stroke="black" fill="${this.color}" stroke-width="5"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 0 300, 200 0, 200" fill="${this.color}"/>`;
  }
}

module.exports = { Circle, Square, Triangle };
