import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Allen() {
  return <div></div>;
}
function Courses() {
  return <div>Courses</div>;
}
function TestSeries() {
  return <div>Test Series</div>;
}
function Scholarship() {
  return <div>Scholarship</div>;
}
function Results() {
  return <div>Results</div>;
}
function StudyMaterial() {
  return <div>Study Material</div>;
}

function Nav() {
  return (
    <div style={{ backgroundColor: "#f3f5f9", padding: "10px 20px" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "15px auto"
      }}>
        
        <img
          style={{ cursor: "pointer", height: "2.5rem", width: "auto" }}
          src="https://allen.in/logo_light.svg"
          alt="Logo"
        />

        
        <div style={{ display: "flex", gap: "40px", fontSize:"20px" }}>
          <div style={{ cursor: "pointer" }}>Courses</div>
          <div style={{ cursor: "pointer" }}>Test Series</div>
          <div style={{ cursor: "pointer" }}>Scholarships</div>
          <div style={{ cursor: "pointer" }}>Results</div>
          <div style={{ cursor: "pointer" }}>Study Materials</div>
        </div>

        
        <div style={{ display: "flex", gap: "15px" }}>
          <button id="call-button" style={{
            backgroundColor: "#0066cc",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize:"20px"
          }}>
            Call
          </button>
          <button id="login-button" style={{
            backgroundColor: "transparent",
            color: "#0066cc",
            border: "2px solid #0066cc",
            padding: "8px 16px",
            borderRadius: "20px",
            cursor: "pointer"
          }}>
            Login
          </button>
        </div>
      </div>

     
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Allen />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/testSeries" element={<TestSeries />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/results" element={<Results />} />
            <Route path="/studyMaterial" element={<StudyMaterial />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Nav;
