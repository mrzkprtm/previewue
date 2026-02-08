import React from 'react';

export default function Logo({ className = "h-10 w-auto" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 494 425.14"
            className={className}
        >
            <defs>
                <style>{`.cls-1{fill:#4195d5;}.cls-2{fill:url(#linear-gradient);}`}</style>
                <linearGradient id="linear-gradient" y1="212.57" x2="494" y2="212.57" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" />
                </linearGradient>
            </defs>
            <title>Asset 4</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <rect className="cls-1" width="222" height="425" />
                    <path className="cls-2" d="M157,425C50,429,0,347.06,0,289.47V0H102V285.38c0,31.51,25.32,57.38,56.83,57.62h.67q1.18,0,2.35,0c33.62-.9,60.15-29,60.15-62.61V0H494V74H332V175H494v74H332V351H494v74H222" />
                </g>
            </g>
        </svg>
    );
}
