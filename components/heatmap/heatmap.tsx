"use client"
import * as d3 from "d3";
import { heatmapData } from "../../data/heatmapData";
import { useEffect, useRef } from "react";
import { useState } from "react";
import "../../vars.css";
import Draggable from "react-draggable";



type HeatmapDatum = {
  model: string
  language_num: string
  score: number
  question: string
  answer: string
  type: string

};

export default function Heatmap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const data: HeatmapDatum[] = heatmapData
  const [selectedCell, setSelectedCell] = useState<HeatmapDatum | null>(null);
  const nodeRef = useRef(null);

  const description = [
    "This heatmap shows LLM model performance on questions across different languages.",
    "Rows are models, columns are language & question numbers, and cell colors reflect rubric-based scores.",
    "Click a cell to view details like the question,  answer, score, and type."
  ];


  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous render
    d3.select(containerRef.current).selectAll("*").remove();

    const margin = { top: 150, right: 150, bottom: 30, left: 150 };
    const width = 1800 - margin.left - margin.right;
    const height = 1100 - margin.top - margin.bottom;

    const svg = d3
      .select(containerRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Tooltip
    const tooltip = d3
      .select(containerRef.current)
      .append("div")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "2px solid")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("pointer-events", "none");

    const groups = Array.from(new Set(data.map(d => d.language_num)))
    const variables = Array.from(new Set(data.map(d => d.model)))

    const x = d3
      .scaleBand()
      .domain(groups)
      .range([0, width])
      .padding(0.03);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain").remove();

    svg.selectAll(".x-axis .tick text")
      .style("font-size", "15px")
      .style("font-family", "Gill Sans MT")
      .style("fill", "#051339")
      .style("font-weight", "bold");


    const y = d3
      .scaleBand()
      .domain(variables)
      .range([height, 0])
      .padding(0.03);


    svg.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y).tickSize(0))
      .select(".domain").remove();

    svg.selectAll(".y-axis .tick text")
      .style("font-size", "15px")
      .style("fill", "#051339")
      .style("font-family", "Gill Sans MT")
      .style("font-weight", "bold");

    const colorScale = d3.scaleLinear<string>()
      .domain([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
      .range([
        "#fffacd", // 0 - very light yellow
        "#fff5a0", // 10
        "#ffef66", // 20
        "#ffe533", // 30
        "#ffdb00", // 40
        "#ffd500", // 50
        "#99c2ff", // 60 - pale blue
        "#4d66ff", // 70 - medium blue
        "#003f88", // 80 - dark blue
        "#00296b", // 90
        "#00008b"  // 100 - darkest blue
      ]);


    const legendG = svg.append("g")
      .attr("transform", `translate(${width + 20}, 0)`);

    // Create a simple legend with rectangles and labels
    const legendValues = d3.range(0, 101, 10);

    legendG.selectAll("rect")
      .data(legendValues)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 20)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", d => colorScale(d));

    legendG.selectAll("text")
      .data(legendValues)
      .enter()
      .append("text")
      .attr("x", 30)
      .attr("y", (d, i) => i * 20 + 15)
      .text(d => d.toString())
      .style("font-size", "12px")
      .style("font-family", "Gill Sans MT");
    legendG.append("text")
      .attr("x", 0)
      .attr("y", -10)
      .text("Score")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .style("font-family", "Gill Sans MT");


    svg
      .selectAll("rect")
      .data(data, (d: HeatmapDatum) => `${d.model}:${d.language_num}`)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.language_num)!)
      .attr("y", (d) => y(d.model)!)
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .style("fill", (d) => colorScale(d.score))
      .style("opacity", 0.8)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        setSelectedCell(d)
      })
      .on("mouseover", function () {
        tooltip.style("opacity", 0.9).style("fill", "rgba(255, 219, 87, 0.85)");
        d3.select(this).style("stroke", "black").style("opacity", 0.9)
      })
      .on("mousemove", function (event, d) {
        const [x, y] = d3.pointer(event);
        tooltip
          .html(`<div><strong>LLM Model: </strong>${d.model}</div>
     <div><strong>Language & Question Number: </strong>${d.language_num}</div>
     <div><strong>Score: </strong>${d.score}</div>`

          )
          .style("left", `${x + 70}px`)
          .style("top", `${y}px`);
      })
      .on("mouseleave", function () {
        tooltip.style("opacity", 0);
        d3.select(this).style("stroke", "none").style("opacity", 0.8);
      });

    // Title
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -100)
      .style("font-size", "22px")
      .text("Heatmap Showing Performance Across Question Types")
      .style("font-family", "Gill Sans MT");



    // Subtitle
    const text = svg.append("text")
      .attr("x", 0)
      .attr("y", -100)
      .style("font-size", "14px")
      .style("fill", "grey")
      .style("font-family", "Gill Sans MT");


    description.forEach((line, i) => {
      text.append("tspan")
        .attr("x", 0)
        .attr("y", -70 + i * 18) // adjust line spacing (18px here)
        .text(line);
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* D3 renders the SVG inside this */}
      <div ref={containerRef} />

      {/* React renders the info box here */}
      {selectedCell && (
        <Draggable nodeRef={nodeRef} defaultPosition={{ x: -200, y: -150 }}>
          <div
            ref={nodeRef}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              backgroundColor: "rgba(255, 219, 87, 0.85)",
              border: "2px solid black",
              borderRadius: 15,
              padding: 16,
              maxWidth: 800,
              zIndex: 10,
              color: "rgb(5, 19, 57)",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",

            }}
          >

            <button
              onClick={() => setSelectedCell(null)}
              style={{
                position: "absolute",
                right: 15,
                border: "none",
                marginLeft: "auto",
                background: "transparent",
                fontSize: 18,
                cursor: "pointer",
                lineHeight: 1,
                color: "rgb(5, 19, 57)",
              }}
              aria-label="Close"
            ><strong>✕</strong>
            </button>
            <h3><strong>LLM Model: </strong> {selectedCell.model} </h3>

            <p><strong>Language & Question Number:</strong>  {selectedCell.language_num}  </p>
            <p><strong>Score:</strong> {selectedCell.score}</p>
            <p><strong>Type:</strong> {selectedCell.type}</p>

            <p>
              <strong>Question:</strong><br />
              {selectedCell.question}
            </p>

            <p>
              <strong>Answer:</strong><br />
              {selectedCell.answer || "No answer yet"}
            </p>


          </div>
        </Draggable>
      )}

    </div>
  );
}

