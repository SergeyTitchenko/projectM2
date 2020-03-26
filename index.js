let button = document.getElementById("calculate");

function calculateTotalAmount() {

  let firsAmount = Number(document.getElementById('firsAmount').value);
  let mounthAmount = Number(document.getElementById('mounthAmount').value);
  let percent = Number(document.getElementById('percent').value);
  let days = Math.floor(Number(document.getElementById('days').value) / 30);

  if (isNaN(firsAmount) ||
    isNaN(mounthAmount) ||
    isNaN(percent) ||
    isNaN(days) ||
    percent >= 100 ||
    percent <= 0 || 
    mounthAmount < 0 || 
    days <= 0 || 
    firsAmount <= 0) {
    console.log('Nan');
    document.getElementById('miss').style.display = 'Block';
    // return NaN;
  }
  function summary(rfirsAmount, rmounthAmount, rpercent, rdays) {

    totalNumber = (rfirsAmount + rmounthAmount) * (1 + (rpercent / 100 / 12) * rdays) + rmounthAmount * rdays;
    setTimeout(function () { alert('Сумма на момент выплаты составит ' + Math.trunc(totalNumber) +  ' AZN') }, 1);
  }
  summary(firsAmount, mounthAmount, percent, days);
}
button.addEventListener('click', calculateTotalAmount);