document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitButton');
  
  submitButton.addEventListener('click', function() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    let FPsToSnipe = Number(input1) / 2;

    if(Number(input2) !== 0){
      FPsToSnipe = FPsToSnipe +(Number(input2)/2)
    }
    
    document.getElementById('outputLabel').textContent = `FPs to snipe: ${FPsToSnipe}`;
  });
});
