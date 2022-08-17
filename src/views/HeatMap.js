const HeatMap = (array) => {
  const heatMap = document.createElement('div');
  heatMap.classList.add('HeatMap');
  heatMap.style.display = 'grid';
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    heatMap.append(tile);
    tile.textContent = array[i];
  }
  return heatMap;
}
export default HeatMap;