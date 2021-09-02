// Code your solution in this file!
// const distanceFromHqBlocks = (endBlock, startBlock=42) => Math.abs(endBlock - startBlock);

function distanceFromHqInBlocks (startBlocks){
    const headquarters = 42;
    return Math.abs(startBlocks - headquarters);
}

function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }
  function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }
  function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return -1;
    }
  }