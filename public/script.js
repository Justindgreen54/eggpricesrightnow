document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/egg-prices')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#eggPriceTable tbody");
            let total = 0;

            data.forEach(item => {
                const row = document.createElement("tr");

                const stateCell = document.createElement("td");
                stateCell.textContent = item.state;
                row.appendChild(stateCell);

                const priceCell = document.createElement("td");
                priceCell.textContent = item.price.toFixed(2);
                row.appendChild(priceCell);

                tableBody.appendChild(row);

                total += item.price;
            });

            const averagePrice = total / data.length;
            document.getElementById("averagePrice").textContent = averagePrice.toFixed(2);
        })
        .catch(error => {
            console.error('Error fetching egg prices:', error);
        });
});
