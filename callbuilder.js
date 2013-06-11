function CallbuilderCtrl($scope) {
  $scope.blocks = [
    {type:'screening', name:'learn angular', numbers:["111","222"]},
    {type:'standard-routing', name:'build an angular app', done:false}];

}

function ScreeningCtrl($scope) {
    $scope.addNumber = function(block) {
        console.log(block);
        block.numbers.push($scope.newNumber);
    }
}
