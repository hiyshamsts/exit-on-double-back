function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.state.routes[navigationState.state.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

module.exports = getCurrentRouteName;
