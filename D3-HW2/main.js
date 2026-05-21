const w = 600;
const h = 400;
const margin = 50;

const parseTime = d3.timeParse("%Y-%m");

d3.csv("nyc-2023.csv").then(data => {

  data.forEach(d => {
    d.date = parseTime(d.date);
    d.max = +d.max;
    d.min = +d.min;
  });

  const xScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([margin, w - margin]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.max)])
    .range([h - margin, margin]);

  const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  // MAX LINE
  const maxLine = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.max));

  svg.append("path")
    .datum(data)
    .attr("class", "maxLine")
    .attr("d", maxLine);

  // MIN LINE
  const minLine = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.min));

  svg.append("path")
    .datum(data)
    .attr("class", "minLine")
    .attr("d", minLine);

  // AXES
  svg.append("g")
    .attr("transform", `translate(0, ${h - margin})`)
    .call(
      d3.axisBottom(xScale)
      .tickFormat(d3.timeFormat("%b"))
    );

  svg.append("g")
    .attr("transform", `translate(${margin}, 0)`)
    .call(d3.axisLeft(yScale));

  // TITLE
  svg.append("text")
    .attr("x", w / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .text("NYC Temperatures 2023");

});