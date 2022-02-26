// Code your solution in this file!
let start;
let end;
let distance;
let blocksFromHq;
let feetFromHq;

function distanceFromHqInBlocks(start){
    return blocksFromHq = Math.abs(42-start);
}

function distanceFromHqInFeet(start){
    return feetFromHq = distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, end){
    return distance = Math.abs(end - start) * 264;
}

function calculatesFarePrice (start, end){
    distanceTravelledInFeet(start, end);
    if (distance < 400) {
        return 0;
    }
    else if (distance>=400 && distance <=2000) {
        return (distance-400)*.02;
    }
    else if (distance > 2000 && distance <= 2500){
        return 25;
    }
    else if (distance > 2500){
        return 'cannot travel that far';
    }
}