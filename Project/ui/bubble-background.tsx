import React from "react";

type BubbleColors = {
  colorA?: string;
  colorB?: string;
  colorC?: string;
  colorD?: string;
  colorE?: string;
  interactive?: string;
};

type BubbleBackgroundProps = {
  className?: string;
  bgGradient?: string;
  bgColorA?: string;
  bgColorB?: string;
  bubbleColors?: BubbleColors;
  bubbleSize?: string;
  blendMode?: React.CSSProperties["mixBlendMode"];
};

const defaultBubbleColors: Required<BubbleColors> = {
  colorA: "var(--aura-blue-rgb)",
  colorB: "var(--aura-purple-rgb)",
  colorC: "var(--aura-green-rgb)",
  colorD: "var(--aura-yellow-rgb)",
  colorE: "var(--aura-orange-rgb)",
  interactive: "var(--aura-red-rgb)",
};

const bubbles = [
  {
    id: "a",
    colorKey: "a",
    top: "18%",
    left: "16%",
    scale: "0.75",
    duration: "22s",
    delay: "-4s",
  },
  {
    id: "b",
    colorKey: "b",
    top: "28%",
    left: "78%",
    scale: "0.6",
    duration: "26s",
    delay: "-10s",
  },
  {
    id: "c",
    colorKey: "c",
    top: "58%",
    left: "20%",
    scale: "0.7",
    duration: "24s",
    delay: "-6s",
  },
  {
    id: "d",
    colorKey: "d",
    top: "65%",
    left: "82%",
    scale: "0.55",
    duration: "28s",
    delay: "-12s",
  },
  {
    id: "e",
    colorKey: "e",
    top: "82%",
    left: "48%",
    scale: "0.5",
    duration: "30s",
    delay: "-16s",
  },
  {
    id: "interactive",
    colorKey: "interactive",
    top: "40%",
    left: "50%",
    scale: "0.9",
    duration: "20s",
    delay: "-8s",
  },
] as const;

export default function BubbleBackground({
  className,
  bgGradient,
  bgColorA = "var(--aura-blue)",
  bgColorB = "var(--aura-purple)",
  bubbleColors,
  bubbleSize = "70%",
  blendMode = "screen",
}: BubbleBackgroundProps) {
  const colors = { ...defaultBubbleColors, ...bubbleColors };

  return (
    <div
      className={`bubble-background${className ? ` ${className}` : ""}`}
      style={
        {
          "--bb-bg-color-a": bgColorA,
          "--bb-bg-color-b": bgColorB,
          "--bb-bg-gradient": bgGradient ?? "",
          "--bb-bubble-size": bubbleSize,
          "--bb-blend-mode": blendMode,
          "--bb-color-a": colors.colorA,
          "--bb-color-b": colors.colorB,
          "--bb-color-c": colors.colorC,
          "--bb-color-d": colors.colorD,
          "--bb-color-e": colors.colorE,
          "--bb-color-interactive": colors.interactive,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="bubble-background__bubble"
          style={
            {
              "--bubble-color": `var(--bb-color-${bubble.colorKey})`,
              "--bubble-top": bubble.top,
              "--bubble-left": bubble.left,
              "--bubble-scale": bubble.scale,
              "--bubble-duration": bubble.duration,
              "--bubble-delay": bubble.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
