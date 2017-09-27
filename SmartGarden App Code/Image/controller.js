

//Chris Falck Image Handler
var mistMakerApp = angular.module('mistMakerApp', []);

mistMakerApp.controller('HomeController', ['$scope', function ($scope) {

    $scope.loadImage = function () {

        // Get a reference to the HTML canvas element and initialize it to 2d.
        var imageCanvas = document.getElementById('imageCanvas');
        var imageContext = imageCanvas.getContext('2d');

        var xPosition = 0;
        var yPosition = 0;

        // Using the HTML Canvas element, we can draw the array of ints manually.
        hardCodedImage.forEach(function (rowOfInts) {
            xPosition = 0; // For each new row, start over at the 0th (left most) side of our canvas.
            rowOfInts.forEach(function (columnInt) {
                var hexForDecimal = Number(parseInt(columnInt, 10)).toString(16);
                imageContext.fillStyle = '#' + hexForDecimal + hexForDecimal + hexForDecimal; // Build the hex color code from the int.
                imageContext.fillRect(xPosition, yPosition, 1, 1); // At the x,y position on the canvas, fill in one pixel.
                ++xPosition; // Move over one pixel in the row we're currently in.
            });
            yPosition += 1; // After each row, move up one y position. (note that  an x,y position of 0,0 is the top left of the canvas)
        });
    };
    //need input from cloud
    var hardCodedImage = picArrayArray;
}]);