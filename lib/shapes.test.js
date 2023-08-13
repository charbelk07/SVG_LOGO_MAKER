const {Circle, Square, Triangle} = require('./shapes');

describe("Circle", ()=>{
    test('The circle class should render a proper SVG circle file',()=>{
    const expectedCircle = `<circle cx="25" cy="75" r="20" stroke="red" fill="blue" stroke-width="5"/>`
    const circle = new Circle();
    circle.setColor('blue')
    const actualCircle = circle.render()
    expect(expectedCircle).toEqual(actualCircle)
    })
})

describe ("Square", ()=>{
    test('The Square class should render a proper SVG square circle file' ,()=>{
        const expectedSquare = `<rect x="10" y="10" width="30" height="30" stroke="black" fill="red" stroke-width="5"/>`
        const square = new Square();
        square.setColor('Red')
        const actualSquare = square.render()
        expect(expectedSquare).toEqual(actualSquare)

    })
})
 
    describe ("Triangle", ()=>{
        test('The Square class should render a proper SVG square circle file' ,()=>{
            const expectedTriangle = `<polygon points="150, 0 300, 200 0, 200" fill="yellow"/>`
            const triangle = new Triangle();
            triangle.setColor('yellow')
            const actualTriangle = triangle.render()
            expect(expectedTriangle).toEqual(actualTriangle)
        })
    
    })