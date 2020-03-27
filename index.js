let button = document.getElementById("calculate");

function calculateTotalAmount(firsAmount, mounthAmount, percent, days) {
  document.getElementById('miss').style.display = 'none';

  firsAmount = Number(document.getElementById('firsAmount').value);
    mounthAmount = Number(document.getElementById('mounthAmount').value);
    percent = Number(document.getElementById('percent').value);
    days = Math.floor(Number(document.getElementById('days').value) / 30);

  if (isNaN(firsAmount) ||
    isNaN(mounthAmount) ||
    isNaN(percent) ||
    isNaN(days) ||
    percent >= 100 ||
    percent <= 0 ||
    mounthAmount < 0 ||
    days <= 0 ||
    firsAmount <= 0) {
    console.error('Ошибка');
    document.getElementById('miss').style.display = 'Block';
    return NaN;
  } else {
    summary(firsAmount, mounthAmount, percent, days);
  }
}
function summary(rfirsAmount, rmounthAmount, rpercent, rdays) {

  totalNumber = (rfirsAmount + rmounthAmount) * (1 + (rpercent / 100 / 12) * rdays) + rmounthAmount * rdays;

  alert('Сумма на момент выплаты составит ' + Math.trunc(totalNumber) + ' AZN')
}
button.addEventListener('click', calculateTotalAmount);