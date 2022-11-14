# Check is point inside of polygon or not - React app


## The brief

- Web app is builted with React, styled with SCSS preprocessor, drawing is done in Canvas.
- App is responsive down to 500px of viewport width, because that is width oc Canvas.

## Web app functionality:

- This App checks is point inside of polygon or not.
- In first upper form you can enter number from 3 to 10 for desired points (angles) of Polygon.
- In second form there are input fields for Polygon point - x and y axis. Default value is 0 for both x and y axis, but soon as you enter numeric values in input fields (from 0 to 500 for x, and form 0 to 400 for y axis), in Canvas field below you will se that Polygon is being created. Polygon has white background.
- Third form is for point, it also have input fields for x and y axis from 0 to 500 for x, and form 0 to 400 for y axis). Point have black color.
- By clicking on "Check is point inside or not" button check function is taking values  of Polygon points (angles), and values of Point coordinates. Algorithm in this function draws horizontal line from Point, and check how many times this line intersect Polygon borders (lines). If that number is even Point is inside of Polygon. This result is printed in console, and can also be seen on Front end.

## Live Preview

[See live here](https://gorankukic-dashboardapp.netlify.app/)

## What we have learned?

- To work with and manipulate Canvas inside of React.

## Development requirements

- [Node.js](http://nodejs.org/)

To install dependencies run:

`npm install`

To start app run:

`npm start`