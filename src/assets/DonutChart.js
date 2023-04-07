import * as d3 from 'd3';

export function myFunction(dataset){
  const datasetNew = dataset;


  var pie=d3.pie()
    .value(function(d){return d.footPrint})
    .sort(null)
    .padAngle(.03);

  var w=800,h=800;

  var outerRadius=w/2;
  var innerRadius=300;

  var color = d3.scaleOrdinal().range(['orange','blue','steelblue','green','red','yellow','purple','pink','indigo']);

  var arc=d3.arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius);


  var svg=d3.select("#chart")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g")
    .attr(
      "transform",
      "translate(" + w / 2 + "," + h / 2 + ")"
    );

  var path=svg.selectAll('pieces')
    .data(pie(datasetNew))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(Math.min(w, h) / 2 - 100)
      .outerRadius(Math.min(w,h) / 2 - 1)
    )
    .attr('fill', color)
    .attr("stroke", "#121926")
    .style("stroke-width", "1px");

  path.filter(function(d){
    return d.footPrint == 0
  }).remove();

  path.transition()
    .duration(1000)
    .attrTween('d', function(d) {
      var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
      return function(t) {
        return arc(interpolate(t));
      };
    });


  var restOfTheData=function(){
    var text=svg.selectAll('text')
      .data(pie(datasetNew))
      .enter()
      .append("text")
      .transition()
      .duration(200)
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
      })
      .attr("dy", ".4em")
      .attr("text-anchor", "middle")
      .text(function(d){
        return d.data.footPrint;
      })
      .style("stroke-width", "1px")
      .attr("stroke", "#FFFFFF");

    var legendRectSize=20;
    var legendSpacing=7;
    var legendHeight=legendRectSize+legendSpacing;


    var legend=svg.selectAll('.legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr("transform", (d,i) => 'translate(-35,' + ((i*legendHeight)-65) + ')')
      .style("text-anchor", "middle")
      .style("font-size", 15);

    legend.append('rect')
      .attr("width", legendRectSize)
      .attr("height", legendRectSize)
      .attr("rx", 20)
      .attr("ry", 20)
      .style("fill", color)
      .style("stroke", color);


    legend.append('text')
      .attr("x", 120)
      .attr("y", 15)
      .text(function(d){
        return d.data.generalCategory;
      })
      .style("fill", "#FFFFFF" )
      .style("font-size", "14px")

  };

  setTimeout(restOfTheData,1000);

}
