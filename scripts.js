document.addEventListener('DOMContentLoaded', () => {
    const currencySelect = document.getElementById('currency');
    const prices = {
        usd: ["$10/month", "$20/month", "$30/month"],
        eur: ["€9/month", "€18/month", "€27/month"],
        gbp: ["£8/month", "£16/month", "£24/month"],
        inr: ["₹750/month", "₹1500/month", "₹2250/month"]
    };

    currencySelect.addEventListener('change', (event) => {
        const currency = event.target.value;
        const priceElements = document.querySelectorAll('.card-title');
        priceElements.forEach((element, index) => {
            element.textContent = prices[currency][index];
        });
    });
});
