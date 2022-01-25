const circleCoords = (r) => {
  let coords = [];
  for (let i = 0; i < 360; i++) {
    const rad = (i * Math.PI) / 180;
    coords.push([Math.cos(rad) * r, Math.sin(rad) * r]);
  }
  return coords;
};

const convert = (ratio, copy) => copy.concat(copy.splice(0, ratio * 360));

const getCoords = (i, numPoints, r) => {
  const coordsOrdered = convert(i / numPoints, circleCoords(r));
  const x = coordsOrdered.map((set) => set[0]);
  const y = coordsOrdered.map((set) => set[1]);

  return [x, y];
};

export default getCoords;
