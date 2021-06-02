function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const dodgerOldPosition = parseInt(dodger.style.left.replace('px', ''), 10);
    const dodgerNewPosition = dodgerOldPosition === 0 ? 0 : dodgerOldPosition - 1;
    dodger.style.left = dodgerNewPosition + 'px';
}

function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  const dodgerOldPosition = parseInt(dodger.style.left.replace('px', ''), 10);
  const dodgerNewPosition = dodgerOldPosition === 360 ? 360 : dodgerOldPosition + 1;
  dodger.style.left = dodgerNewPosition + 'px';

}

function main() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveDodgerLeft();
    if (e.key === 'ArrowRight') moveDodgerRight();
  });
}
main();