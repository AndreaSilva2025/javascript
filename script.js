function formatMoney(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  
  function calculate() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const years = parseInt(document.getElementById('years').value);
  
    if (isNaN(principal) || isNaN(interestRate) || isNaN(years)) {
      document.getElementById('result').innerHTML = '<p class="error">Por favor, preencha todos os campos corretamente.</p>';
      return;
    }
  
    const monthlyRate = interestRate / 100 / 12;
    const months = years * 12;
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    const totalPaid = monthlyPayment * months;
    const totalInterest = totalPaid - principal;
  
    document.getElementById('result').innerHTML = `
      <h2>Resultados:</h2>
      <p>Pagamento mensal: <strong>${formatMoney(monthlyPayment)}</strong></p>
      <p>Valor total pago: <strong>${formatMoney(totalPaid)}</strong></p>
      <p>Total de juros pagos: <strong>${formatMoney(totalInterest)}</strong></p>
    `;
  }
  