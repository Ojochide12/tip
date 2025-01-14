function calculateTip() {
    const billAmount = Number(document.getElementById('billAmount').value)
    const tipPerecentage =Number(document.getElementById('tipPerecentage').value)
    const result = document.getElementById('total');

    const sum = (billAmount * tipPerecentage) / 100;
    const all = sum + billAmount
    result.textContent = `Tip: $${sum} TotalBill: $${all}`
}