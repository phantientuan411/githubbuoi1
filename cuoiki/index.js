let myChart = document.getElementById('myChart').getContext('2d');
// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'This week',
            lineColor: '#FCC43E',
            data: [
                5,
                45,
                80,
                30,
                0,
                20,
                50,
                40,
                25,
                50,
                75,
                60

            ],
        },
        {
            label: 'last week',
            data: [
                20,
                30,
                50,
                25,
                15,
                35,
                60,
                35,
                10,
                50,
                90,
                45

            ],
            //backgroundColor:'green',
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#fff',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000',
                lineColor: '#FCC43E'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        },
        scales: {
            y: {
                display: false
            },
            min: 0,
            max: 100,
        }
    }
});
let nextChart = document.getElementById('schoolfinace').getContext('2d');
// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let masPopChart = new Chart(schoolfinace, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'This week',
            lineColor: '#FCC43E',
            data: [
                98,
                56,
                38,
                45,
                30,
                63,
                76

            ],
        },
        {
            label: 'last week',
            data: [
                75,
                58,
                30,
                38,
                20,
                82,
                56

            ],
            //backgroundColor:'green',
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)'

            ],
            borderWidth: 1,
            borderColor: '#fff',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000',
                lineColor: '#FCC43E'
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        },
        scales: {
            y: {
                display: false
            },
            min: 0,
            max: 100,
        }
    }
});
