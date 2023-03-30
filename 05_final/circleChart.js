var dist = 150,
    cx = 150,
    cy = 200,
    x = 110,
    y = 280,
    r = 50

var svgC = d3.select("#circleChart")
    .append("svg")
    .attr("width", 800)
    .attr("height", 400)

// circle1
svgC.append("circle")
    .attr("id", "circleCustomTooltip")
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("r", r)
    .attr("fill", "#003060")

svgC.append("text")
    .text("照相功能好")
    .attr("x", x)
    .attr("y", y)

//circle2
svgC.append("circle")
    .attr("id", "circleCustomTooltip2")
    .attr("cx", 2 * cx)
    .attr("cy", cy)
    .attr("r", r)
    .attr("fill", "#AE0000")

svgC.append("text")
    .text("遊戲性能佳")
    .attr("x", x + dist)
    .attr("y", y)

//circle3
svgC.append("circle")
    .attr("id", "circleCustomTooltip3")
    .attr("cx", 3 * cx)
    .attr("cy", cy)
    .attr("r", r)
    .attr("fill", "#01814A")

svgC.append("text")
    .text("續航能力強")
    .attr("x", x + 2 * dist)
    .attr("y", y)

//circle4
svgC.append("circle")
    .attr("id", "circleCustomTooltip4")
    .attr("cx", 4 * cx)
    .attr("cy", cy)
    .attr("r", r)
    .attr("fill", "#EA7500")

svgC.append("text")
    .text("價格親民")
    .attr("x", x + 3 * dist + 5)
    .attr("y", y)



//tooltip1
var tooltip1 = d3.select("#circleChart")
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "transprant")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .html("Reno 8 Pro <br> Find x5 Pro <br> iPhone 14 Pro <br>Pixel 7 Pro");


d3.select("#circleCustomTooltip")
    .style('cursor', 'pointer')
    .on("mouseover", function () { return tooltip1.style("visibility", "visible"); })
    .on("mousemove", function () { return tooltip1.style("top", 62 + "%").style("left", 61.5 + "%") })
    .on("mouseout", function () { return tooltip1.style("visibility", "hidden"); });

//tooltip2
var tooltip2 = d3.select("#circleChart")
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "transprant")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .html("ROG Phone 6 <br> ROG Phone 6D <br> ROG Phone Pro <br> ROG Phone 6D Ultimate <br> iPhone 14 Plus");


d3.select("#circleCustomTooltip2")
    .style('cursor', 'pointer')
    .on("mouseover", function () { return tooltip2.style("visibility", "visible"); })
    .on("mousemove", function () { return tooltip2.style("top", 60 + "%").style("left", 68.5 + "%") })
    .on("mouseout", function () { return tooltip2.style("visibility", "hidden"); });


//tooltip3
var tooltip3 = d3.select("#circleChart")
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "transprant")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .html("ROG Phone 6 <br>ROG Phone 6D <br> ROG Phone Pro <br> ROG Phone 6D Ultimate");


d3.select("#circleCustomTooltip3")
    .style('cursor', 'pointer')
    .on("mouseover", function () { return tooltip3.style("visibility", "visible"); })
    .on("mousemove", function () { return tooltip3.style("top", 62 + "%").style("left", 77.5 + "%") })
    .on("mouseout", function () { return tooltip3.style("visibility", "hidden"); });

//tooltip4
var tooltip4 = d3.select("#circleChart")
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "transprant")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .html("A53 5G");


d3.select("#circleCustomTooltip4")
    .style('cursor', 'pointer')
    .on("mouseover", function () { return tooltip4.style("visibility", "visible"); })
    .on("mousemove", function () { return tooltip4.style("top", 70 + "%").style("left", 89.5 + "%") })
    .on("mouseout", function () { return tooltip4.style("visibility", "hidden"); });
