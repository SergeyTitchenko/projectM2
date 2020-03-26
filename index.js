let button = document.getElementById("calculate");

function calculateTotalAmount() {

  let firsAmount = Number(document.getElementById("firsAmount").value);
  let mounthAmount = Number(document.getElementById("mounthAmount").value);
  let percent = Number(document.getElementById("percent").value);
  let days = Math.floor(Number(document.getElementById("days").value) / 30);

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
    document.getElementById("miss").style.display = 'Block';
    return NaN;
  }
  function summary(xfirsAmount, xmounthAmount, xpercent, xdays) {

    totalNumber = (xfirsAmount + xmounthAmount) * (1 + (xpercent / 100 / 12) * xdays) + xmounthAmount * xdays;
    // document.getElementById("miss").style.display = 'Block';
    setTimeout(function () { alert(`Сумма на момент выплаты составит ` + totalNumber + ` Рублей`) }, 1);
  }
  summary(firsAmount, mounthAmount, percent, days);
}
button.addEventListener("click", calculateTotalAmount);