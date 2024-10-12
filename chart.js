function generatechart(){

    fetch('/data.json')
    .then((res) => res.json())
    .then((data) =>{
        const info = {
            labels : data.map((chart) => chart.day),
            datasets:[
                {
                    data : data.map((chart) => chart.amount),
                    backgroundcolor:['hsl(10,79%,65%)'],
                    borderradius: 5,
                    hoverbackgroundcolor :'hsl(10,79%,65%)'
                }
            ]
        }
        const titleTooltip=(e) =>`$${e[0] .formattedvalue}`;
        const labelTooltip=(e) =>`${e}`;
        const options = {
            scales: {
                y:{
                    ticks: {
                        display:false
                    },
                    grid: {
                        display:false,
                        drawTicks:false,
                        drawBorder:false
                    },
                },
                x:{
                    grid: {
                        display:false,
                        drawBorder:false,
                    }
                }
            },
            Plugin: {
                legend:{display:false},
                tooltip: {
                    yalign:'bottom',
                    displaycolor:false,
                    callbacks: {
                        title: titleTooltip,
                        label: labelTooltip,
                    }
                }
            }
        }
        const config = {
            type: 'bar',
            data: info,
            options
        }
        const chart = new Chart(document.getElementById('chart'),config)
    })
}
generatechart()