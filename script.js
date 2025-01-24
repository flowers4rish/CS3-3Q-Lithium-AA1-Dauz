const PI = 3.14;
let circleRadius = 6.378e6;
let circleCircumference = 2 * PI * circleRadius;
let circleSurfaceArea = 4 * PI * (circleRadius ** 2);
let circleVolume = (4/3) * PI * (circleRadius ** 3);

document.write('The radius of the sphere is ' + circleRadius + '.' + '<br>');
document.write('The circumference is ' + circleCircumference + '.' + '<br>');
document.write('The surface area is ' + circleSurfaceArea  + '.' + '<br>');
document.write('The volume is ' + circleVolume + '.' + '<br>');


