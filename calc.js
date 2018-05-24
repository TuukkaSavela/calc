/* 
 * Tuukka Savela
 */

var app = angular.module('calcApp', []);

app.controller('CalcController', function($scope) {
    
    var comma = false;
    var op = "E";
     
    init = function() {
        comma = false;
        op = "E";
        $scope.inNum = "0";
        $scope.secNum = "0";
    };
    $scope.resetClick = function() {
        init();    
    };
    $scope.numberClick = function(p) {
        if($scope.inNum === "0") {
            $scope.inNum = "";
        }
        $scope.inNum = $scope.inNum + p;
    };
    $scope.commaClick = function() {
        if(comma === false) {
            comma = true;
            $scope.inNum = $scope.inNum + ".";
        }
    };
    $scope.opClick = function(p) {
        op = p;
        $scope.secNum = $scope.inNum;
        $scope.inNum = "0";
        comma = false;
    };
    $scope.equClick = function() {
        switch(op) {
            case "+":
                $scope.inNum = (Number($scope.secNum) + Number($scope.inNum)).toString();
                break;
            case "-":
                $scope.inNum = (Number($scope.secNum) - Number($scope.inNum)).toString();
                break;
            case "*":
                $scope.inNum = (Number($scope.secNum) * Number($scope.inNum)).toString();
                break;
            case "/":
                $scope.inNum = (Number($scope.secNum) / Number($scope.inNum)).toString();
                break;
            default:
                //error
                break;
        }
    };
    
    
    init();
});
