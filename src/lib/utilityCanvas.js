export const drawLine = (ctx, x, y, w, h) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(w, h);
  ctx.stroke();
};

export const drawGrid = (ctx, size, width, height) => {
  const stepX = width / size;
  const stepY = height / size;

  // style
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#b1b0b0";

  // drag horizontal line
  for (let i = 0; i <= stepX; i++) {
    drawLine(ctx, i * size, 0, i * size, height);
  }

  // draw vertical line
  for (let i = 0; i <= stepY; i++) {
    drawLine(ctx, 0, i * size, width, i * size);
  }

  ctx.restore();
};
