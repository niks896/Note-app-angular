import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as d3 from 'd3';

import {CommonServiceService} from '../common-service.service';


@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})

export class HeatmapComponent implements OnInit, AfterContentInit{
states;
  constructor(private ServiceService: CommonServiceService) {
    // this.ServiceService.Getuser().subscribe(res =>
    //  res = this.states );
  }


  ngAfterContentInit(): void {
    // this._setTopoJson(this.states);
  }


//      w = 650;
//      h = 650;
//      proj = d3.geo.mercator();
//      path = d3.geo.path().projection(this.proj);
//      t = this.proj.translate(); // the projection's default translation
//      s = this.proj.scale(); // the projection's default scale

//     buckets = 9;
//       colors = ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58']; // alternatively colorbrewer.YlGnBu[9]

//      map = d3.select('#chart').append('svg:svg')
//       .attr('width', this.w)
//       .attr('height', this.h)
//       //.call(d3.behavior.zoom().on("zoom", redraw))
//       .call(this._initialize);

//      india = this.map.append('svg:g')
//       .attr('id', 'india');

//      div = d3.select('body').append('div')
//       .attr('class', 'tooltip')
//       .style('opacity', 0);

//     _setTopoJson(states) {
//       console.log(states)
//       var maxTotal = d3.max(states.features, function (d) { return d.totalcases });
//       var colorScale = d3.scale.quantile()
//         .domain(d3.range(this.buckets).map(function (d) { return (d / this.buckets) * maxTotal }))
//         .range(this.colors);


//       var y = d3.scale.sqrt()
//         .domain([0, 10000])
//         .range([0,300]);

//       var yAxis = d3.svg.axis()
//           .scale(y)
//           .tickValues(colorScale.domain())
//           .orient('right');


//       this.india.selectAll('path')
//         .data(states.features)
//         .enter().append('path')
//         .attr('d', this.path)
//         .style('fill', this.colors[0])
//         .style('opacity', 0.5)

//         .on('mouseover', function (d) {
//           // d3.select(this).transition().duration(300).style("opacity", .9);
//           d3.style('opacity', .9)
//           // div.transition().duration(300)
//           //   .style("opacity", 1)
//           // div.text(d.id + " : " + d.totalcases )
//           .style(d.id + '<br>' + 'Total Cases' + ':'+d.totalcases+'<br>'+'Active Cases' + ': ' + d.activecases)
//             .style('left', (d3.event.pageX) + 'px')
//             .style('top', (d3.event.pageY - 30) + 'px');
//           // div.text("Active Cases" + ": " + d.activecases)
//         })

//         .on('mouseout', function() {
//             d3.style('opacity', 0);
//           })
//         // .on('mouseout', function (d, i) {
//         //   d3.select(this).transition().duration(300)
//         //     .style("opacity", 0);
//         //   div.transition().duration(300)
//         //     .style("opacity", 0);
//         // })
//         // .on('mouseenter', function (d, i) {
//         //   d3.select(this).transition().duration(300)
//         //     .style("opacity", 0.5);
//         //   div.transition().duration(300)
//         //     .style("opacity", 0);

//         // });

//       this.india.selectAll('path').transition().duration(1000)
//         .style('fill', function (d) { return colorScale(d.totalcases); });



//       //Adding legend for our Choropleth


//       var g = this.india.append('g')
//                 .attr('class', 'key')
//                 .attr('transform', 'translate(445, 305)')
//                 .call(yAxis);

//             g.selectAll('rect')
//                 .data(colorScale.range().map(function(d, i) {
//                     return {
//                         y0: i ? y(colorScale.domain()[i - 1]) : y.range()[0],
//                         y1: i < colorScale.domain().length ? y(colorScale.domain()[i]) : y.range()[1],
//                         z: d
//                     };
//                 }))
//                 .enter().append('rect')
//                     .attr('width', 7)
//                     .attr('y', function(d) { return d.y0; })
//                     .attr('height', function(d) { return d.y1 - d.y0; })
//                     .style('fill', function(d) { return d.z; });


//     }

//  _initialize() {
//       this.proj.scale(6700);
//       this.proj.translate([-1240, 720]);
//     }

//  w = 600;
//  h = 600;
//  proj = d3.geo.mercator();
//  path = d3.geo.path().projection(this.proj);
//  t = this.proj.translate(); // the projection's default translation
//  s = this.proj.scale() // the projection's default scale

//  map = d3.select("#chart").append("svg:svg")
//     .attr("width", this.w)
//     .attr("height", this.h)
// //        .call(d3.behavior.zoom().on("zoom", redraw))
//     .call(this.initialize);

// india = this.map.append("svg:g")
//     .attr("id", "india");

// _settopojson(states) {
//   this.india.selectAll("path")
//       .data(states.features)
//     .enter().append("path")
//       .attr("d", this.path);
// };

//  initialize() {
//   this.proj.scale(6700);
//   this.proj.translate([-1240, 720]);
// }


/*
// This section should allow for zoom & pan.

function redraw() {
  // d3.event.translate stores the current translation from the parent SVG element
  // t stores the projection's default translation
  // adding the x and y vales in each array to yields the projection's new translation
  var tx = t[0] * d3.event.scale + d3.event.translate[0];
  var ty = t[1] * d3.event.scale + d3.event.translate[1];
  proj.translate([tx, ty]);

  // determine the projection's new scale and redraw the map:
  proj.scale(s * d3.event.scale);
  india.selectAll("path").attr("d", path);
}


 // This section should color each state.

var states = svg.append("g")
.attr("id", "states")
.attr("class", "Blues");

// load the GDP data
d3.json("wealth.json", function(json) {
  data = json;
  states.selectAll("path")
    .attr("class", quantize);
});

function quantize(d) {
  return "q" + Math.min(8, ~~(data[d.id] * 9 / 12)) + "-9";
}
*/

  ngOnInit() {
  }
}
