"use client";

import React from "react";

export default function ComingSoonPage() {
  // The raw HTML markup for the logo SVG
  const logoHTML = `
    <div class="logo">
      <svg width="1000px" height="" viewBox="0 0 600 160">  
        <text 
          fill="none" 
          stroke="#fff" 
          x="0"
          y="120"
          stroke-width="5" 
          font-size="80" 
          font-family="'Raleway', sans-serif" 
          font-weight="800" 
          class="is-active">
          Coming Soon
        </text>
        <path class="underline" data-name="Path 1" d="M107,318.311s18.935-20,32.92,0,31.85,0,31.85,0,18.736-19.584,33.161,0,29.294,0,29.294,0,23.385-16.934,35.261,0,34.535,10.772,35.875,0,32.49-14.143,33.135,0,41.233,11.789,42.7,0,33.415-7.747,32.62,0,25.6,19.335,34.531,0" transform="translate(60 -188.421)" fill="none" stroke="#00BFFF" stroke-width="3"/>
      </svg>
    </div>
  `;

  return (
    <div>
      {/* Render the logo HTML */}
      <div dangerouslySetInnerHTML={{ __html: logoHTML }} />
      {/* Render the animated text */}
      <div className="animated-text">We hope the semester comes soon!</div>
      {/* Global CSS for logo and animated text */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap");

        /* Body styles for a full-screen background */
        body {
          background: black
            url("https://source.unsplash.com/random/1600x900?flower") no-repeat
            fixed center;
          width: 100vw;
          height: 100vh;
          justify-content: center;
          align-items: center;
        }

        /* Logo container styles */
        .logo {
          width: 100%;
          display: flex;
          font-size: 120px;
          color: white;
          justify-content: center;
          align-items: center;
          padding: 25px;
          background: rgba(0, 0, 0, 0.5);
          position: relative;
        }

        /* SVG text animation */
        .logo text {
          stroke-width: 5px;
          stroke-dasharray: 900;
          stroke-dashoffset: -900;
          animation: text 4s forwards 1;
          animation-delay: 1s;
        }

        /* Underline animation */
        .logo .underline {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: underline 4s forwards 1;
          animation-delay: 5s;
        }

        /* Keyframes for logo text animation */
        @keyframes text {
          75% {
            fill: transparent;
            stroke-dashoffset: 0;
            stroke-width: 5px;
          }
          100% {
            fill: #f3f3f3;
            stroke-dashoffset: 0;
            stroke-width: 0;
          }
        }

        /* Keyframes for underline animation */
        @keyframes underline {
          75% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        /* Animated text styling */
        .animated-text {
          font-family: "Raleway", sans-serif;
          font-size: 40px;
          color: #fff;
          text-align: center;
          margin-top: 20px;
          animation: textSlide 3s forwards 1;
          animation-delay: 6s;
        }

        @keyframes textSlide {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
