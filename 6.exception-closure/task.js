function parseCount(input) {
    const parsed = Number.parseInt(input);
    if (Number.isNaN(parsed)) {
        throw Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(input) {
    try {
        return parseCount(input);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } 
    catch (err) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        }; 
    }
}