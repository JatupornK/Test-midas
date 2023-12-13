function quickestPath(board: {
  ladders: [number, number][];
  snakes: [number, number][];
}): number[] {
  // หาตำแหน่งที่น้อยสุดดของ snake ที่เราจะไม่ไปเหยียบเนื่องจากมากกว่าค่ามากสุดของ ladder แล้ว
  let maxLadder:number = board.ladders.sort((a, b) => b[1] - a[1])[0][1];
  let maxSnake:[number,number][] = board.snakes.filter((item) => item[0] >= maxLadder);
  let notIncludeSnake:number = 100;
  if (maxSnake.length > 0) {
    notIncludeSnake = maxSnake[0][0];
  }
  /////////////////////////////////////////////////////////////////////////////////
  let maxDestination:number = 1;
  let arr: { dices: number[]; dest: number }[] = [{ dices: [], dest: 1 }];

  while (maxDestination < 100) {
    for (let obj of arr) {
      let isLadder = board.ladders.filter(
        (item) => obj.dest + 6 >= item[0] && obj.dest < item[0]
      );
      let isSnake = board.snakes.filter(
        (item) => obj.dest + 6 >= item[0] && obj.dest < item[0]
      );

      // can go to ladder
      if (isLadder.length > 0) {
        //can go to snake too
        if (isSnake.length > 0 && isSnake[0][0] < notIncludeSnake) {
          let dices:number[] = [...obj.dices, isSnake[0][0] - obj.dest];
          let dest:number = isSnake[0][1];
          arr.push({ dices, dest });
        }
        obj.dices.push(isLadder[0][0] - obj.dest);
        obj.dest = isLadder[0][1];
      } else if (isSnake.length > 0 && isSnake[0][0] < notIncludeSnake) {
        // can go to only snake
        obj.dices.push(isSnake[0][0] - obj.dest);
        obj.dest = isSnake[0][1];
      } else {
        // can't go both ladder and snake
        obj.dices.push(6);
        obj.dest += 6;
      }
      //change max Destination
      if (isLadder.length > 0 && isLadder[0][1] > maxDestination) {
        maxDestination = isLadder[0][1];
      } else if (obj.dest + 6 > maxDestination) {
        maxDestination += 6;
      }
      if (obj.dest >= 100) {
        break;
      }
    }
  }
  return arr.filter((item) => item.dest >= 100)[0].dices;
}

