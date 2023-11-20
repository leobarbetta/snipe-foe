document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submitButton');
  const fpsToLevelInput = document.getElementById('fps-to-level');
  const fpsDesiredPositionInput = document.getElementById('fps-desired-position');

  fpsToLevelInput.focus();

  fpsToLevelInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) submitButton.click();
  });

  fpsDesiredPositionInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) submitButton.click();
  });

  submitButton.addEventListener('click', function () {
    const fpsToLevel = fpsToLevelInput.value;
    const fpsDesiredPosition = fpsDesiredPositionInput.value;

    let FPsToSnipe = Number(fpsToLevel) / 2;

    if (Number(fpsDesiredPosition) !== 0) {
      FPsToSnipe = FPsToSnipe + (Number(fpsDesiredPosition) / 2)
    }

    document.getElementById('outputLabel').textContent = `FPs to snipe: ${FPsToSnipe}`;
  });
});
