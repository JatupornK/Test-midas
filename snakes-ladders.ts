function quickestPath(board: {
  ladders: [number, number][];
  snakes: [number, number][];
}): number[] {
  let maxDestination: number = 1;
  let arr: { dices: number[]; dest: number }[] = [{ dices: [], dest: 1 }];
  let dice: number = 0;
  while (maxDestination < 100) {
    for (let obj of arr) {
      //the value that push from isLadder and isSnake will past to next loop
      if (obj.dices.length > arr[0].dices.length) {
        continue;
      }
      //from preset dest can go which ladder or snake
      let isLadder: [number, number][] = board.ladders.filter(
        (item) => obj.dest + 6 >= item[0] && obj.dest < item[0]
      );
      let isSnake: [number, number][] = board.snakes.filter(
        (item) => obj.dest + 6 >= item[0] && obj.dest < item[0]
      );
      //go snake
      for (let snakes = 0; snakes < isSnake.length; snakes++) {
        arr.push({
          dices: [...obj.dices, isSnake[snakes][0] - obj.dest],
          dest: isSnake[snakes][1],
        });
      }
      //go ladder
      for (let ladders = 0; ladders < isLadder.length; ladders++) {
        arr.push({
          dices: [...obj.dices, isLadder[ladders][0] - obj.dest],
          dest: isLadder[ladders][1],
        });
        if (isLadder[ladders][1] > maxDestination) {
          maxDestination = isLadder[ladders][1];
        }
      }
      //go without ladder and snake with max value
      let possibleDices: number[] = [1, 2, 3, 4, 5, 6];
      let snake: number[] = isSnake.map((item) => item[0] - obj.dest);
      let ladder: number[] = isLadder.map((item) => item[0] - obj.dest);
      dice = possibleDices.filter((item) => !snake.includes(item) && !ladder.includes(item)).sort((a, b) => b - a)[0];
      if (dice) {
        if (obj.dest + dice > maxDestination) {
          maxDestination = obj.dest + dice;
        }
        obj.dices.push(dice);
        obj.dest += dice;
      }

      if (maxDestination >= 100) {
        break;
      }
    }
  }
  return arr.filter((item) => item.dest >= 100)[0]?.dices;
}
