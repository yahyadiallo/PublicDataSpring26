const w = 650;
const h = 400;
const margin = 60;

d3.csv("student-time.csv").then(data => {

  data.forEach(d => {
    d["school-hours"] = +d["school-hours"];
    d["work-hours"] = +d["work-hours"];
  });

  const xScale = d3.scalePoint()
    .domain(data.map(d => d.week))
    .range([margin, w - margin]);

  const yScale = d3.scaleLinear()
    .domain([0, 50])
    .range([h - margin, margin]);

  const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  const schoolLine = d3.line()
    .x(d => xScale(d.week))
    .y(d => yScale(d["school-hours"]));

  const workLine = d3.line()
    .x(d => xScale(d.week))
    .y(d => yScale(d["work-hours"]));

  svg.append("path")
    .datum(data)
    .attr("class", "school")
    .attr("d", schoolLine);

  svg.append("path")
    .datum(data)
    .attr("class", "work")
    .attr("d", workLine);

  svg.append("g")
    .attr("transform", `translate(0, ${h - margin})`)
    .call(d3.axisBottom(xScale));

  svg.append("g")
    .attr("transform", `translate(${margin}, 0)`)
    .call(d3.axisLeft(yScale));

  svg.append("text")
    .attr("x", w / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("class", "title")
    .text("School and Work Hours Across the Quarter");

  svg.append("text")
    .attr("x", 500)
    .attr("y", 85)
    .attr("class", "schoolLabel")
    .text("School Hours");

  svg.append("text")
    .attr("x", 500)
    .attr("y", 240)
    .attr("class", "workLabel")
    .text("Work Hours");
});