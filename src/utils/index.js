export function generateVersusLink(firstPokemon, secondPokemon) {
  return `/${firstPokemon}/vs/${secondPokemon}`;
}

export function countTotalPoint(points = []) {
  return points.reduce((acc, current) => acc + current.base_stat, 0);
}
