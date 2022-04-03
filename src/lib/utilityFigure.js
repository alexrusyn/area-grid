export const getItem = (x, y, w, h) => ({ x, y, w, h });

export const getItemFromGrid = (size, offsetX, offsetY, figureW, figureH) =>
  getItem(size * offsetX, size * offsetY, size * figureW, size * figureH);

export const getSnap = (multiplicator, value) => {
  return Math.round(value / multiplicator) * multiplicator;
};

export const getSnapCoords = (multiplicator, { x, y }) => {
  const getSnapGrid = getSnap.bind(null, multiplicator);
  return [getSnapGrid(x), getSnapGrid(y)];
};

export const getSnapItem = (multiplicator, { x, y, w, h }) => {
  const getSnapGrid = getSnap.bind(null, multiplicator);

  return getItem(
    getSnapGrid(x),
    getSnapGrid(y),
    getSnapGrid(w),
    getSnapGrid(h)
  );
};

export const getFigureStyle = ({ x, y, w, h }) => {
  return {
    width: `${w}px`,
    height: `${h}px`,
    transform: `translate3d(${x}px, ${y}px, 0)`
  };
};

export const edgeCollisionDetection = (container, box) => {
  if (
    container.x > box.x ||
    container.x + container.w < box.x + box.w ||
    container.y > box.y ||
    container.y + container.h < box.y + box.h
  ) {
    return false;
  }

  return true;
};

export const getCoords = (element, parent = document.body) => {
  const parentRect = parent.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return getItem(
    elementRect.x - parentRect.x,
    elementRect.y - parentRect.y,
    elementRect.width,
    elementRect.height
  );
};
