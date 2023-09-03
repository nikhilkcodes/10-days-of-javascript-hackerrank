function getArea(length, width) {
    let area;
    area = length * width;
        
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    let a=2; 
     perimeter = a*(length + width);
    
    return perimeter;
}