"use client";

import React from 'react'

const BackgroundWrapper = ({ children }: any) => {

    return (
        <div className="relative min-h-screen ">
            {/* Fixed background layers that stay behind all content */}
            <div className="fixed inset-0 z-0">
                {/* Primary gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/50 via-black to-gray-800/30"></div> */}

                {/* Radial gradient for depth */}
                {/* <div className="absolute inset-0 bg-gradient-radial from-gray-700/20 via-transparent to-black/60"></div> */}

                {/* Animated dots pattern - increased from 50 to 120 */}
                <div className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={`dot-${i}`}
                            className="absolute w-1 h-1 bg-gray-400/30 dark:bg-gray-400/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `
          floating ${3 + Math.random() * 14}s ease-in-out infinite,
          pulse ${2 + Math.random() * 13}s ease-in-out infinite
        `,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>

                {/* Geometric squares pattern - increased from 20 to 50 */}
                <div className="absolute inset-0 opacity-20 dark:opacity-15">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={`square-${i}`}
                            className="absolute border border-gray-500/40 dark:border-gray-600/30"
                            style={{
                                width: `${15 + Math.random() * 35}px`,
                                height: `${15 + Math.random() * 35}px`,
                                left: `${Math.random() * 95}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `
          rotate ${8 + Math.random() * 12}s linear infinite,
          floatSquare ${6 + Math.random() * 8}s ease-in-out infinite,
          pulse ${4 + Math.random() * 6}s ease-in-out infinite
        `,
                                animationDelay: `${Math.random() * 6}s`
                            }}
                        />
                    ))}
                </div>

                {/* Large geometric accent elements - enhanced movement */}
                <div className="absolute inset-0 opacity-12 dark:opacity-8">
                    <div
                        className="absolute top-20 left-20 w-32 h-32 border border-gray-600/50 dark:border-gray-500/40"
                        style={{
                            animation: `
        rotate ${15}s linear infinite,
        floatLarge ${8}s ease-in-out infinite,
        pulse ${6}s ease-in-out infinite
      `
                        }}
                    ></div>
                    <div
                        className="absolute bottom-32 right-32 w-24 h-24 border border-gray-500/40 dark:border-gray-400/30"
                        style={{
                            animation: `
        rotateReverse ${12}s linear infinite,
        floatLarge ${7}s ease-in-out infinite,
        pulse ${5}s ease-in-out infinite
      `,
                            animationDelay: '2s'
                        }}
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/3 w-40 h-40 border border-gray-700/35 dark:border-gray-600/25"
                        style={{
                            animation: `
        rotate ${20}s linear infinite,
        floatXL ${10}s ease-in-out infinite,
        pulse ${7}s ease-in-out infinite
      `,
                            animationDelay: '4s'
                        }}
                    ></div>
                    <div
                        className="absolute top-1/4 right-1/4 w-28 h-28 border border-gray-600/45 dark:border-gray-500/35"
                        style={{
                            animation: `
        rotateReverse ${18}s linear infinite,
        floatLarge ${9}s ease-in-out infinite,
        pulse ${6}s ease-in-out infinite
      `,
                            animationDelay: '1s'
                        }}
                    ></div>
                </div>

                {/* Floating diamond shapes - increased from 12 to 25 */}
                <div className="absolute inset-0 opacity-18 dark:opacity-12">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={`diamond-${i}`}
                            className="absolute w-2 h-2 bg-gray-600/50 dark:bg-gray-500/40"
                            style={{
                                left: `${10 + Math.random() * 80}%`,
                                top: `${10 + Math.random() * 80}%`,
                                animation: `
          rotateDiamond ${4 + Math.random() * 6}s linear infinite,
          floatDiamond ${5 + Math.random() * 4}s ease-in-out infinite,
          pulse ${3 + Math.random() * 4}s ease-in-out infinite
        `,
                                animationDelay: `${Math.random() * 7}s`
                            }}
                        />
                    ))}
                </div>

                {/* Enhanced grid overlay - now works in both light and dark mode */}
                <div
                    className="absolute inset-0 opacity-8 dark:opacity-3"
                    style={{
                        backgroundImage: `
      linear-gradient(rgba(100,100,100,0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(100,100,100,0.15) 1px, transparent 1px)
    `,
                        backgroundSize: '80px 80px',
                        animation: 'gridMove 30s linear infinite'
                    }}
                >
                </div>

                {/* Additional fine grid overlay for more texture */}
                <div
                    className="absolute inset-0 opacity-4 dark:opacity-2"
                    style={{
                        backgroundImage: `
      linear-gradient(rgba(120,120,120,0.1) 0.5px, transparent 0.5px),
      linear-gradient(90deg, rgba(120,120,120,0.1) 0.5px, transparent 0.5px)
    `,
                        backgroundSize: '20px 20px',
                        animation: 'gridMove 45s linear infinite reverse'
                    }}
                >
                </div>
            </div>

            {/* Content wrapper - your website content goes here */}
            <div className="relative z-10">
                {children}
            </div>
            {/* CSS Animations */}
            <style jsx>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
        
        @keyframes floatSquare {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-20px) translateX(10px) scale(1.1); }
          66% { transform: translateY(-10px) translateX(-15px) scale(0.9); }
        }
        
        @keyframes floatLarge {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-30px) translateX(20px) scale(1.05); }
          50% { transform: translateY(-15px) translateX(-25px) scale(0.95); }
          75% { transform: translateY(-40px) translateX(15px) scale(1.02); }
        }
        
        @keyframes floatXL {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          20% { transform: translateY(-40px) translateX(30px) scale(1.08); }
          40% { transform: translateY(-20px) translateX(-35px) scale(0.92); }
          60% { transform: translateY(-50px) translateX(25px) scale(1.05); }
          80% { transform: translateY(-30px) translateX(-20px) scale(0.98); }
        }
        
        @keyframes floatDiamond {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-25px) translateX(15px) scale(1.2); }
          50% { transform: translateY(-10px) translateX(-20px) scale(0.8); }
          75% { transform: translateY(-35px) translateX(10px) scale(1.1); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotateReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes rotateDiamond {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.3); }
          to { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes gridMove {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(10px) translateY(-5px); }
          50% { transform: translateX(-5px) translateY(10px); }
          75% { transform: translateX(8px) translateY(3px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
        </div>
    )
}

export default BackgroundWrapper