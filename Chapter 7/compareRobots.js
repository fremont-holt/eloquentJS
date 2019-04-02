function compareRobots(robot1, memory1, robot2, memory2) {
  function testRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
      if (state.parcels.length == 0) {
        return turn;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }
  const robot1Results = [];
  const robot2Results = [];
  for (let i = 0; i < 100; i++) {
    const state = VillageState.random();
    robot1Results.push(testRobot(state, robot1, memory1));
    robot2Results.push(testRobot(state, robot2, memory2));
  }
  const sum = (accumulator, currentValue) => accumulator + currentValue;
  const robot1Average = robot1Results.reduce(sum) / robot1Results.length;
  const robot2Average = robot2Results.reduce(sum) / robot2Results.length;
  const betterRobot = robot1Average < robot2Average ? "Robot1" : "Robot2";
  return `
      Robot1: ${robot1Average}
      Robot2: ${robot2Average}
      ${betterRobot} wins!
    `;
}
