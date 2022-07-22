const Player = () => {
  const visited = [];
  const setVisited = (coord) => {
    visited.push(coord)
  }
  const getVisited = () => {
    return visited.slice();
  }
  return {
    setVisited,
    getVisited
  }
}
export default Player;