"use client";

import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react";
import Draggable from "react-draggable";
import { heatmapData } from "../../data/heatmapData";
import "../../vars.css";

type HeatmapDatum = {
  model: string;
  language_num: string;
  score: number;
  averageScore: number;
  question: string;
  answer: string;
  type: string;
  rubric: string;
  pointsdeducted: string;
};

type TrialKey = "trial1" | "trial2" | "trial3";

export default function Heatmap() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeTrial, setActiveTrial] = useState<TrialKey>("trial1");
  type SelectedCell = HeatmapDatum & { activeTrial: TrialKey };
  const [selectedCell, setSelectedCell] = useState<SelectedCell | null>(null);

  const data: HeatmapDatum[] = useMemo(
    () =>
      heatmapData.map((entry) => ({
        model: entry.model,
        language_num: entry.language_num,
        question: entry.question,
        type: entry.type,
        score: entry.score[activeTrial] ?? 0,
        averageScore: entry.averageScore ?? 0,
        answer: entry.answer[activeTrial] ?? "",
        pointsdeducted: entry.pointsdeducted[activeTrial] ?? "",
        rubric: entry.rubric ?? "",
      })),
    [activeTrial]
  );

  const selectedData = selectedCell
    ? heatmapData.find(
        (entry) =>
          entry.model === selectedCell.model &&
          entry.language_num === selectedCell.language_num
      )
    : null;

  useEffect(() => {
    if (!viewportRef.current) return;

    const element = viewportRef.current;
    const updateWidth = () => {
      setContainerWidth(element.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!chartRef.current || !rootRef.current || containerWidth === 0) return;

    d3.select(chartRef.current).selectAll("*").remove();
    d3.select(rootRef.current).selectAll(".heatmap-tooltip").remove();

    const groups = Array.from(new Set(data.map((datum) => datum.language_num)));
    const variables = Array.from(new Set(data.map((datum) => datum.model)));
    const isCompact = containerWidth < 1180;
    const isNarrow = containerWidth < 860;
    const margin = isNarrow
      ? { top: 28, right: 24, bottom: 118, left: 96 }
      : isCompact
        ? { top: 32, right: 24, bottom: 110, left: 110 }
        : { top: 40, right: 110, bottom: 50, left: 170 };
    const minCellWidth = isNarrow ? 58 : isCompact ? 66 : 72;
    const chartWidth = Math.max(
      containerWidth - margin.left - margin.right,
      groups.length * minCellWidth
    );
    const svgWidth = chartWidth + margin.left + margin.right;
    const height = Math.max(
      variables.length * (isNarrow ? 25 : isCompact ? 28 : 38),
      isNarrow ? 520 : isCompact ? 560 : 760
    );
    const axisFontSize = isNarrow ? "10px" : isCompact ? "11px" : "15px";
    const legendLabelSize = isNarrow ? "9px" : isCompact ? "10px" : "12px";
    const legendTitleSize = isNarrow ? "11px" : isCompact ? "12px" : "14px";

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", height + margin.top + margin.bottom)
      .style("display", "block")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const tooltip = d3
      .select(rootRef.current)
      .append("div")
      .attr("class", "heatmap-tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "2px solid")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("pointer-events", "none");

    const x = d3
      .scaleBand()
      .domain(groups)
      .range([0, chartWidth])
      .padding(0.03);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain")
      .remove();

    svg
      .selectAll(".x-axis .tick text")
      .style("font-size", axisFontSize)
      .style("font-family", "Gill Sans MT")
      .style("fill", "#051339")
      .style("font-weight", "bold")
      .style("text-anchor", isCompact ? "end" : "middle")
      .attr("transform", isNarrow ? "rotate(-45)" : isCompact ? "rotate(-35)" : null);

    const y = d3
      .scaleBand()
      .domain(variables)
      .range([0, height])
      .padding(0.03);

    svg
      .append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y).tickSize(0))
      .select(".domain")
      .remove();

    svg
      .selectAll(".y-axis .tick text")
      .style("font-size", axisFontSize)
      .style("fill", "#051339")
      .style("font-family", "Gill Sans MT")
      .style("font-weight", "bold");

    const colorScale = d3
      .scaleLinear<string>()
      .domain([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
      .range([
        "#fffacd",
        "#fff5a0",
        "#ffef66",
        "#ffe533",
        "#ffdb00",
        "#ffd500",
        "#99c2ff",
        "#4d66ff",
        "#003f88",
        "#00296b",
        "#00008b",
      ]);

    const legendG = svg
      .append("g")
      .attr(
        "transform",
        isCompact ? `translate(0, ${height + 42})` : `translate(${chartWidth + 24}, 0)`
      );

    const legendValues = d3.range(0, 101, 10);

    legendG
      .selectAll("rect")
      .data(legendValues)
      .enter()
      .append("rect")
      .attr("x", (_datum, index) => (isCompact ? index * (isNarrow ? 24 : 28) : 0))
      .attr("y", (_datum, index) => (isCompact ? 0 : index * 20))
      .attr("width", isCompact ? (isNarrow ? 20 : 24) : 20)
      .attr("height", isCompact ? (isNarrow ? 12 : 14) : 20)
      .attr("fill", (datum) => colorScale(datum));

    legendG
      .selectAll("text")
      .data(legendValues)
      .enter()
      .append("text")
      .attr("x", (_datum, index) =>
        isCompact ? index * (isNarrow ? 24 : 28) + (isNarrow ? 10 : 12) : 30
      )
      .attr("y", (_datum, index) => (isCompact ? (isNarrow ? 24 : 28) : index * 20 + 15))
      .text((datum) => datum.toString())
      .style("font-size", legendLabelSize)
      .style("font-family", "Gill Sans MT")
      .style("text-anchor", isCompact ? "middle" : "start");

    legendG
      .append("text")
      .attr("x", 0)
      .attr("y", -10)
      .text("Score")
      .style("font-size", legendTitleSize)
      .style("font-weight", "bold")
      .style("font-family", "Gill Sans MT");

    svg
      .selectAll<SVGRectElement, HeatmapDatum>("rect")
      .data(data, (datum) => `${datum.model}:${datum.language_num}`)
      .enter()
      .append("rect")
      .attr("x", (datum) => x(datum.language_num)!)
      .attr("y", (datum) => y(datum.model)!)
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .style("fill", (datum) => colorScale(datum.averageScore))
      .style("opacity", 0.8)
      .style("cursor", "pointer")
      .on("click", (_event, datum) => {
        setSelectedCell({ ...datum, activeTrial });
      })
      .on("mouseover", function () {
        tooltip.style("opacity", 0.9).style("fill", "rgba(255, 219, 87, 0.85)");
        d3.select(this).style("stroke", "black").style("opacity", 0.9);
      })
      .on("mousemove", function (event, datum) {
        const [xPos, yPos] = d3.pointer(event, rootRef.current);
        tooltip
          .html(`<div><strong>LLM Model: </strong>${datum.model}</div>
     <div><strong>Language & Question Number: </strong>${datum.language_num}</div>
     <div><strong>Average Score: </strong>${datum.averageScore.toFixed(2)}%</div>`)
          .style("left", `${Math.min(xPos + 16, Math.max(containerWidth - 220, 16))}px`)
          .style("top", `${Math.max(yPos - 16, 12)}px`);
      })
      .on("mouseleave", function () {
        tooltip.style("opacity", 0);
        d3.select(this).style("stroke", "none").style("opacity", 0.8);
      });

  }, [activeTrial, containerWidth, data]);

  return (
    <div ref={rootRef} style={{ position: "relative" }}>
      <div
        ref={viewportRef}
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          paddingBottom: 8,
        }}
      >
        <div ref={chartRef} />
      </div>

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
              width: "min(800px, calc(100vw - 2rem))",
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
            >
              <strong>x</strong>
            </button>

            <h3>
              <strong>LLM Model: </strong>
              {selectedCell.model}
            </h3>
            <p>
              <strong>Language & Question Number:</strong> {selectedCell.language_num}
            </p>
            <p>
              <strong>Average Score:</strong> {selectedData?.averageScore ?? 0}%
            </p>
            <p>
              <strong>Trial Score:</strong>{" "}
              {selectedData?.score[selectedCell.activeTrial]?.toFixed(2) ?? 0}%
            </p>
            <p>
              <strong>Type:</strong> {selectedCell.type}
            </p>
            <p>
              <strong>Question:</strong>
              <br />
              {selectedCell.question}
            </p>

            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              {(["trial1", "trial2", "trial3"] as TrialKey[]).map((trial, index) => (
                <button
                  key={trial}
                  onClick={() => {
                    setActiveTrial(trial);
                    setSelectedCell((previous) =>
                      previous ? { ...previous, activeTrial: trial } : null
                    );
                  }}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: "1px solid rgb(5, 19, 57)",
                    background:
                      selectedCell.activeTrial === trial
                        ? "rgb(5, 19, 57)"
                        : "transparent",
                    color:
                      selectedCell.activeTrial === trial
                        ? "white"
                        : "rgb(5, 19, 57)",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  Trial {index + 1}
                </button>
              ))}
            </div>

            <p>
              <strong>Answer:</strong>
              <br />
              {selectedData?.answer[selectedCell.activeTrial] ?? ""}
            </p>

            <p>
              <strong>Rubric:</strong>{" "}
              {selectedData?.rubric ? (
                <a
                  href={selectedData.rubric}
                  className="underline text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View rubric for {selectedCell.language_num}
                </a>
              ) : (
                "No rubric available"
              )}
            </p>

            <p>
              <strong>Points Deducted:</strong>{" "}
              {selectedData?.pointsdeducted[selectedCell.activeTrial] ?? "N/A"}
            </p>
          </div>
        </Draggable>
      )}
    </div>
  );
}
