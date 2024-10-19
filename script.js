
const salesByCategoryCtx = document.getElementById('salesByCategoryChart').getContext('2d');
const salesByCategoryChart = new Chart(salesByCategoryCtx, {
    type: 'bar',
    data: {
        labels: ['Electronics', 'Clothing', 'Home Appliances', 'Books', 'Toys'],
        datasets: [{
            label: 'Sales ($)',
            data: [5000, 7000, 4000, 3000, 6000],
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#17a2b8', '#dc3545'],
            borderColor: ['#007bff', '#28a745', '#ffc107', '#17a2b8', '#dc3545'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const monthlySalesCtx = document.getElementById('monthlySalesTrend').getContext('2d');
const monthlySalesChart = new Chart(monthlySalesCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'Sales ($)',
            data: [2000, 3000, 2500, 3200, 4000, 4500, 4700, 5200, 6100, 7500],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: '#007bff',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});