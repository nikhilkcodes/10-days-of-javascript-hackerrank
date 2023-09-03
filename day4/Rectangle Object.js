function Rectangle(a, b) {
    let rectangle = {};
    rectangle.length = a;
    rectangle.width = b;
    rectangle.perimeter = 2 * (a + b);
    rectangle.area = a * b;
    return rectangle;
}
