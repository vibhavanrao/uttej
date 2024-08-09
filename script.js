document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('income-expenses-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], // Dates will go here
            datasets: [
                {
                    label: 'Income',
                    data: [],
                    borderColor: 'green',
                    fill: false,
                },
                {
                    label: 'Expenses',
                    data: [],
                    borderColor: 'red',
                    fill: false,
                }
            ]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount'
                    }
                }
            }
        }
    });

    document.getElementById('transaction-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const date = document.getElementById('date').value;
        const income = parseFloat(document.getElementById('income').value);
        const expenses = parseFloat(document.getElementById('expenses').value);

        if (date && !isNaN(income) && !isNaN(expenses)) {
            // Update chart
            chart.data.labels.push(date);
            chart.data.datasets[0].data.push(income);
            chart.data.datasets[1].data.push(expenses);
            chart.update();

            // Clear form
            e.target.reset();
        }
    });

    // Sample suggestions
    const suggestions = [
        "Consider expanding your product line to increase income.",
        "Optimize your pricing strategy to improve profit margins.",
        "Look for cost-saving opportunities in your operations."
    ];

    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.textContent = suggestion;
        suggestionsContainer.appendChild(div);
    });
});
