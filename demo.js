// Ab

// Select elements
const button = document.getElementById("load-btn");
const select = document.getElementById("molecule-select");

button.addEventListener("click", () => {
  const molecule = select.value;
  const data = spectra[molecule];
  drawSpectrum(data);
});

// Draw spectrum using D3
function drawSpectrum(data) {
  // Clear previous chart
  d3.select("#spectrum").selectAll("*").remove();

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 40, left: 50 };

  const svg = d3.select("#spectrum")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const x = d3.scaleLinear()
    .domain([350, 700]) // visible light range
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([0, 1]) // intensity scale
    .range([height - margin.bottom, margin.top]);

  // X axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(6));

  // Y axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // Line generator
  const line = d3.line()
    .x(d => x(d.wavelength))
    .y(d => y(d.intensity));

  // Draw line
  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#ffcc00")
    .attr("stroke-width", 2)
    .attr("d", line);
}
