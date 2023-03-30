var width3 = d3version4.select("#bubbleChart").node().getBoundingClientRect().width;
var height3 = d3version4.select("#bubbleChart").node().getBoundingClientRect().height;

// var diameter = 700,
//     format = d3version4.format(",d"),
//     color = d3version4.scaleOrdinal(d3.schemeCategory10);

// var bubble = d3version4.pack()
//     .size([width3, height3])
//     .padding(1.5);

// var svg = d3version4.select("#bubbleChart").append("svg")
//     .attr("width", width3)
//     .attr("height", height3)
//     .attr("class", "bubble");



data = "flare.json"
makeBubbleChart(data);

$("#selectButton").on("change", function () {
    var newoption = $("#selectButton option:selected").text();
    if (newoption == "iPhone 14 Pro") {
        data = "flare.json"
    } else if (newoption == "Oppo Reno 8 Pro") {
        data = "flare2.json"
    } else if (newoption == "Pixel 7 Pro") {
        data = "flare3.json"
    }
    makeBubbleChart(data);
})

function makeBubbleChart(data) {
    d3version4.selectAll("#bubbleChart svg").remove();

    var diameter = 700,
        format = d3version4.format(",d"),
        color = d3version4.scaleOrdinal(d3.schemeCategory10);

    var bubble = d3version4.pack()
        .size([width3, height3])
        .padding(1.5);

    var svg = d3version4.select("#bubbleChart").append("svg")
        .attr("width", width3)
        .attr("height", height3)
        .attr("class", "bubble");

    d3version4.json(data, function (error, data) {
        if (error) throw error;

        var root = d3version4.hierarchy(classes(data))
            .sum(function (d) { return d.value; })
            .sort(function (a, b) { return b.value - a.value; });

        bubble(root);
        var node = svg.selectAll(".node")
            .data(root.children)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("title")
            .text(function (d) { return d.data.className + ": " + format(d.value); });

        node.append("circle")
            .attr("r", function (d) { return d.r; })
            .style("fill", function (d) {
                return color(d.data.packageName);
            });

        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function (d) { return d.data.className.substring(0, d.r / 3); });
    });
}

// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) {
    var classes = [];

    function recurse(name, node) {
        if (node.children) node.children.forEach(function (child) { recurse(node.name, child); });
        else classes.push({ packageName: name, className: node.name, value: node.size });
    }

    recurse(null, root);
    return { children: classes };
}

d3version4.select(self.frameElement).style("height", 700 + "px");