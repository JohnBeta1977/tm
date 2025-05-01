async function convertCurrency(currencyFrom, currencyTo, amount = 1) {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
      const data = await response.json();
      const rates = data.rates;
      const rate = rates[currencyTo];
      const result = amount * rate;
  
      const resultElement = document.getElementById("result");
      resultElement.textContent = result;
  
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const currencyFromSelect = document.getElementById("currency-from");
  const currencyToSelect = document.getElementById("currency-to");
  const amountFromInput = document.getElementById("amount-from");
  
  
  
  // Event listeners for select changes
  currencyFromSelect.addEventListener("change", () => {
      const currencyFrom = currencyFromSelect.value;
      const currencyTo = currencyToSelect.value;
      const amount = parseFloat(amountFromInput.value);
      convertCurrency(currencyFrom, currencyTo, amount);
  });
  
  currencyToSelect.addEventListener("change", () => {
      const currencyFrom = currencyFromSelect.value;
      const currencyTo = currencyToSelect.value;
      const amount = parseFloat(amountFromInput.value);
      convertCurrency(currencyFrom, currencyTo, amount);
  });
  // Event listener for input amount change
  amountFromInput.addEventListener("input", () => {
      const currencyFrom = currencyFromSelect.value;
      const currencyTo = currencyToSelect.value;
      const amount = parseFloat(amountFromInput.value);
      if (!isNaN(amount)) {
          convertCurrency(currencyFrom, currencyTo, amount);
      }
  });
  
  // Footer buttons functionality
  const shareButton = document.querySelector(".share-button");
  const linkedInButton = document.querySelector(".linkedin-button");
  const githubButton = document.querySelector(".github-button");
  
  shareButton.addEventListener("click", () => {
      navigator.share({ title: 'TransforMoney', text: 'Check out this currency converter!', url: window.location.href })
  });
  
  linkedInButton.addEventListener("click", () => {
      window.open("https://www.linkedin.com/in/", "_blank");
  });
  
  githubButton.addEventListener("click", () => {
      window.open("https://github.com/", "_blank");
  });
  
  // Register service worker
  window.addEventListener('load', () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
          .then(registration => console.log('Service Worker registered with scope:', registration.scope))
          .catch(error => console.error('Service Worker registration failed:', error));
      }
    });
  