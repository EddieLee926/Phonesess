
var widthdonutd3 = d3version4.select("#donutChartd3").node().getBoundingClientRect().width,
    heightdonutd3 = d3version4.select("#donutChartd3").node().getBoundingClientRect().height,
    scale2 = 3;

data = "iPhone 14 Pro.csv"
makeDonutChart(data);


$("#reDrawButton").on("change", function () {
    // var newoption = document.getElementById("reDrawButton").value;
    var newoption = $("#reDrawButton option:selected").text();
    if (newoption == "iPhone 14 Pro") {
        data = "iPhone 14 Pro.csv"
    } else if (newoption == "Oppo Reno 8 Pro") {
        data = "Oppo Reno 8 Pro.csv"
    } else if (newoption == "Pixel 7 Pro") {
        data = "Pixel 7 Pro.csv"
    }
    makeDonutChart(data);
})


function makeDonutChart(data) {
    d3version4.selectAll("#donutChartd3 svg").remove();

    var svg = d3.select('#donutChartd3').append('svg')
        .attr("width", widthdonutd3)
        .attr("height", heightdonutd3)

    var radius = Math.min(widthdonutd3, heightdonutd3) / 2,
        g = svg.append("g").attr("transform", "translate(" + widthdonutd3 / 2 + "," + heightdonutd3 / 2 + ")");


    // var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    // ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
    // (藍橘綠紅紫....)
    var color = d3version4.scaleOrdinal(["#2ca02c", "#1f77b4", "#d62728"])


    var pie = d3.pie()
        .sort(null)
        .value(function (d) { return d.population; });

    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(radius - 70);

    var label = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);
    d3.csv(data, function (d) {
        d.population = +d.population;
        return d;
    }, function (error, data) {
        if (error) throw error;

        var arc = g.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        arc.append("path")
            .attr("d", path)
            .attr("fill", function (d) { return color(d.data.age); });

        arc.append("text")
            .attr("transform", function (d) { return "translate(" + label.centroid(d) + ")"; })
            .attr("dy", "0.35em")
            .text(function (d) { return d.data.age; });
    });
}