export function playerStatus(player) {
  if (player.health < 15) {
    return 'critical';
  } else if (player.health > 50) {
  return 'healthy';
  } else {
    return 'wounded';
  }
}

export function sortList(list) {
  return list.sort((a, b) => a.health < b.health ? 1 : -1);
}
