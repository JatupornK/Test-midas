function minEnergy(
  start: number,
  shops: number[],
  stations: number[],
  target: number
): number {

  let currentPosition: number = start;
  let countEnergy: number = 0;
  shops.push(target);
  for (let selectedTarget of shops) {
    let walkEnergy: number = 1 * (selectedTarget - currentPosition);

    let nearestBus: number = stations[0];
    for (let bus of stations) {
      if (nearestBus > bus) {
        nearestBus = bus;
      }
    }
    let energyBusToTarget: number =
      stations
        .filter((item) => item !== nearestBus)
        .map((item) => Math.abs(item - selectedTarget))
        .sort((a, b) => a - b)[0] + Math.abs(nearestBus - currentPosition);

    if(walkEnergy<energyBusToTarget){
        countEnergy+=walkEnergy;
    }else{
        countEnergy+=energyBusToTarget;
    }
    currentPosition=selectedTarget;
  }

  return countEnergy;
}
