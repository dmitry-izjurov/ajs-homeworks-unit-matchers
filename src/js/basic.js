export default function getSortUnits(units) {
  if (Array.isArray(units) && units.length > 0) {
    const unitsFiltered = units.filter((a) => typeof a.health === 'number');
    if (unitsFiltered.length > 0) {
      return unitsFiltered.sort((a, b) => {
        if (a.health < b.health) {
          return 1;
        }
        if (a.health > b.health) {
          return -1;
        }
        return 0;
      });
    } return null;
  } if (Array.isArray(units) && units.length === 0) {
    return null;
  }
  return undefined;
}
