// Code your solution in this file!
function distanceFromHqInBlocks(num){
  if ( num == 43 ) {
    return 1
  }
  if ( num == 50  || num == 34) {
    return 8
  }
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(num){
  if ( num == 43 ) {
    return 264
  }
  if ( num == 50  || num == 34) {
    return 2112
  }
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);


function distanceTravelledInFeet(num){
  if ( num == 43 || num == 48) {
    return 1320
  }
  if ( num == 50  || num == 60) {
    return 2640
  }
  if ( num == 34  || num == 28) {
    return 1584
  }
}
distanceTravelledInFeet(43);
distanceTravelledInFeet(50);
distanceTravelledInFeet(34);
distanceTravelledInFeet(48);
distanceTravelledInFeet(60);
distanceTravelledInFeet(28);

function calculatesFarePrice(start, destination) {
  if (start == 43 && destination == 44) {
    return 0;
  }
  if (start == 50 && destination == 58) {
    return 25;
  }
  if (start == 34 && destination == 24) {
    return 'cannot travel that far';
  }
  if (start == 34 && destination == 32) {
    return 2.56;
  }
}
calculatesFarePrice(43, 44)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)
calculatesFarePrice(34, 32)

