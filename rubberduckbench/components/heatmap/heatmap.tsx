"use client"
import * as d3 from "d3"
import { heatmapData } from "../../data/heatmapData";
import { useEffect, useRef } from "react";
import { useState } from "react";




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


  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous render
    d3.select(containerRef.current).selectAll("*").remove();

    const margin = { top: 80, right: 150, bottom: 30, left: 150 };
    const width = 2000 - margin.left - margin.right;
    const height = 1000 - margin.top - margin.bottom;

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
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain")
      .remove();

    const y = d3
      .scaleBand()
      .domain(variables)
      .range([height, 0])
      .padding(0.03);

    svg
      .append("g")
      .call(d3.axisLeft(y).tickSize(0))
      .select(".domain")
      .remove();


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

    svg
      .selectAll("rect")
      .data(data, (d: any) => `${d.group}:${d.variable}`)
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
      .style("cursor","pointer")
      .on("click", (event, d) => {
        setSelectedCell(d)
      })
      .on("mouseover", function () {
        tooltip.style("opacity", 1);
        d3.select(this).style("stroke", "black").style("opacity", 1);
      })
      .on("mousemove", function (event, d) {
        const [x, y] = d3.pointer(event);
        tooltip
          .html(`<div>Type: ${d.type}</div>
     <div>Language: ${d.language_num}</div>
     <div>Score: ${d.score}</div>`
  
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
      .attr("y", -50)
      .style("font-size", "22px")
      .text("Heatmap Showing Performance Across Question Types");

    // Subtitle
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", -20)
      .style("font-size", "14px")
      .style("fill", "grey")
      .text("A short description of the take-away message of this chart.");
  }, []);


  return (
    <div style={{ position: "relative" }}>
      {/* D3 renders the SVG inside this */}
      <div ref={containerRef} />

      {/* React renders the info box here */}
      {selectedCell && (
        <div
        
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            backgroundColor: "white",
            border: "2px solid black",
            borderRadius: 8,
            padding: 16,
            maxWidth: 400,
            zIndex: 10,
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
        color: "red",
      }}
      aria-label="Close"
    ><strong>✕</strong>
    </button>
          <h3>{selectedCell.model} – {selectedCell.language_num}</h3>

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
      )}
    </div>
  );
}

