import * as d3 from 'd3';

export function myFunction(dataset){
  const datasetNew = dataset;

  //console.log("Dataset", dataset);
  console.log(dataset[0].hasOwnProperty('footPrint'));


  d3.selectAll("#chart > *").remove();

  let footprintOrBalance;
  footprintOrBalance = dataset[0].hasOwnProperty('footPrint');

  if(footprintOrBalance){

    console.log("TEST is footprint");

    var pie=d3.pie()
      .value(function(d){return d.footPrint})
      .sort(null)
      .padAngle(.03);

    var w=600,h=600;

    var outerRadius=w/2;
    var innerRadius=200;

    var color = d3.scaleOrdinal().range(['#005f73ff','#0a9396ff','#94d2bdff','#e9d8a6ff','#ee9b00ff','#ca6702ff','#bb3e03ff','#ae2012ff','#9b2226ff']);

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
        .style("fill", "#FFFFFF" )

      //.attr("stroke", "#FFFFFF");

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

  }else{
    console.log("TEST not footprint");
    var pie=d3.pie()
      .value(function(d){return d.moneyBalance})
      .sort(null)
      .padAngle(.03);

    var w=600,h=600;

    var outerRadius=w/2;
    var innerRadius=200;

    var color = d3.scaleOrdinal().range(['#005f73ff','#0a9396ff','#94d2bdff','#e9d8a6ff','#ee9b00ff','#ca6702ff','#bb3e03ff','#ae2012ff','#9b2226ff']);

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
      return d.moneyBalance == 0
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
          return d.data.moneyBalance;
        })
        .style("stroke-width", "1px")
        .style("fill", "#FFFFFF" )

      //.attr("stroke", "#FFFFFF");

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

}
