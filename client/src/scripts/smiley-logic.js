/**
 * Draw a smiley on a canvas with a given joy level.
 * Modified from https://codepen.io/keisuke/pen/mPPjRB
 */
function makeDrawEmoji(ctx, canvasHeight, canvasWidth) {

  const gColorBrown = '#463502';
  const gColorDarkYellow = '#f0a20b';
  const gColorYellow = '#fcc21b';

  const gEmojiCenterX = canvasWidth / 2; // 480 / 2
  const gEmojiCenterY = canvasHeight / 2;  // 300 / 2
  const gEmojiR = (5 / 6) * Math.min(canvasHeight, canvasWidth) / 2; // 125

  const gEmojiEyeHeight = gEmojiR * (30 / 125);
  const gEmojiEyeWidth = gEmojiEyeHeight * (2 / 3);
  const gLineWidth = gEmojiEyeHeight * (7 / 50);

  const drawEmoji = function(joy) {
    ctx.beginPath();
    ctx.arc(gEmojiCenterX, gEmojiCenterY, gEmojiR, 0, 2*Math.PI);
    ctx.fill();
    ctx.fillStyle = gColorYellow;

    ctx.arc(gEmojiCenterX, gEmojiCenterY, gEmojiR, 0, 2*Math.PI);
    ctx.fill();
    ctx.fillStyle = gColorBrown;

    drawEyes(ctx);
    drawMouth(ctx, joy);
  }

  function drawEyes(ctx) {
    const left_x = gEmojiCenterX - gEmojiR * 2 / 5;
    const right_x = gEmojiCenterX + gEmojiR * 2 / 5;
    const y = gEmojiCenterY - gEmojiR / 10;

    ctx.save();
    ellipse(ctx, left_x, y, gEmojiEyeWidth, gEmojiEyeHeight);
    ellipse(ctx, right_x, y, gEmojiEyeWidth, gEmojiEyeHeight);
    ctx.restore();
  }

  function drawMouth(ctx, joy) {
    ctx.save();
    ctx.beginPath();

    let offset = (joy * gEmojiR + 0.0) / 3 / 100;
    const startX = gEmojiCenterX - gEmojiR * 3 / 5;
    let startY = gEmojiCenterY + gEmojiR * 2 / 5;

    const arcX1 = startX + gEmojiR / 5;
    let arcY1 = gEmojiCenterY + gEmojiR * 2 / 5;

    if (offset > 0) {
      offset *= 1.5;
      arcY1 += offset;
    } else {
      offset *= 0.75;
      startY -= offset;
    }


    const endX = gEmojiCenterX + gEmojiR * 3 / 5;
    const endY = startY;
    const arcX2 = endX - gEmojiR / 5;
    const arcY2 = arcY1;

    ctx.moveTo(startX, startY);
    ctx.lineWidth = gLineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = gColorBrown;

    ctx.bezierCurveTo(arcX1, arcY1, arcX2, arcY2, endX, endY);

    if (joy > 75) {
      ctx.lineTo(startX, startY);
      ctx.fillStyle = gColorDarkYellow;
      ctx.fill();
    }

    ctx.stroke();
    ctx.closePath();

    ctx.restore();
  }

  function ellipse(ctx, cx, cy, rx, ry) {
    ctx.save();
    ctx.strokeStyle = null;
    ctx.beginPath();
    ctx.translate(cx-rx, cy-ry);
    ctx.scale(rx, ry);
    ctx.arc(1, 1, 1, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  return drawEmoji;
}

export default makeDrawEmoji;
