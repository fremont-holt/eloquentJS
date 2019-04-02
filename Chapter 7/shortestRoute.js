memory = [];
function deliverClosestRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let shortestRoute = [];
    for (let parcel of parcels) {
      let tempRoute = [];
      if (parcel.place != place) {
        tempRoute = findRoute(roadGraph, place, parcel.place);
      } else {
        tempRoute = findRoute(roadGraph, place, parcel.address);
      }
      if (shortestRoute.length === 0) {
        shortestRoute = tempRoute;
      }
      shortestRoute =
        shortestRoute.length > tempRoute.length ? tempRoute : shortestRoute;
    }
    route = shortestRoute;
  }
  return { direction: route[0], memory: route.slice(1) };
}
runRobotAnimation(VillageState.random(), deliverClosestRobot, memory);
