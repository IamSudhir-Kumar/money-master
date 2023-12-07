import React from 'react'

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <svg viewBox="0 0 100 100">
                <defs>
                    <style>
                        .tree {
                            fill: none;
                        stroke: #000;
                        stroke-width: 2;
      }

                        .leaves {
                            fill: #008000;
      }

                        .coins {
                            fill: #ffff00;
      }

                        .animation {
                            animation: drop-coins 1s linear infinite;
      }

                        @keyframes drop-coins {
                            from {
                            transform: translateY(-10px);
        }
                        to {
                            transform: translateY(10px);
        }
      }
                    </style>
                </defs>

                <path class="tree" d="M50,50 L50,90 L40,80 L60,80 Z" />
                <path class="leaves" d="M50,50 L45,45 L55,45 Z" />
                <circle class="coins animation" cx="50" cy="60" r="5" />
            </svg>


        </div>
    )
}

export default Navbar