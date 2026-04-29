"use client";

import { useEffect, useState } from "react";

type Screen = "feed" | "challenge" | "ranks";

const screens: { id: Screen; label: string }[] = [
  { id: "feed", label: "Feed" },
  { id: "challenge", label: "Challenge" },
  { id: "ranks", label: "Ranks" },
];

export default function PhoneMockup({
  className = "",
  autoPlay = true,
}: {
  className?: string;
  autoPlay?: boolean;
}) {
  const [active, setActive] = useState<Screen>("feed");

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const idx = screens.findIndex((s) => s.id === prev);
        return screens[(idx + 1) % screens.length].id;
      });
    }, 3800);
    return () => clearInterval(id);
  }, [autoPlay]);

  return (
    <div className={`phone-frame-wrap ${className}`}>
      <div className="phone-glow" aria-hidden="true" />
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-statusbar">
            <span>9:41</span>
            <span className="phone-statusbar-right">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </span>
          </div>

          <div className="phone-header">
            <span className="phone-wordmark">Aura Farm</span>
          </div>

          <div className="phone-body">
            {active === "feed" && <FeedScreen />}
            {active === "challenge" && <ChallengeScreen />}
            {active === "ranks" && <RanksScreen />}
          </div>

          <div className="phone-tabbar">
            <TabIcon active={active === "feed"} label="Feed" glyph="home" />
            <TabIcon active={active === "challenge"} label="Aura" glyph="diamond" />
            <TabIcon active={active === "ranks"} label="Ranks" glyph="trophy" />
            <TabIcon active={false} label="Friends" glyph="users" />
          </div>
        </div>
      </div>

      <div className="phone-screen-pills">
        {screens.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Show ${s.label} screen`}
            className={`phone-screen-pill ${active === s.id ? "is-active" : ""}`}
            onClick={() => setActive(s.id)}
          />
        ))}
      </div>
    </div>
  );
}

function FeedScreen() {
  return (
    <div className="screen-feed">
      <div className="feed-card">
        <div className="feed-card-header">
          <strong>Hike the P</strong>
          <span className="feed-pill">+50</span>
        </div>
        <div className="feed-card-image">
          <div className="feed-card-photo" />
        </div>
        <div className="feed-card-meta">
          <div className="feed-avatar">R</div>
          <span className="feed-username">@rkota</span>
        </div>
        <p className="feed-caption">made it to the top before sunrise</p>
        <div className="feed-card-footer">
          <span className="feed-heart">♥ 142</span>
        </div>
      </div>
      <div className="feed-card feed-card-secondary">
        <div className="feed-card-header">
          <strong>Find Waldo</strong>
          <span className="feed-pill">+30</span>
        </div>
        <div className="feed-card-photo feed-card-photo-purple" />
      </div>
    </div>
  );
}

function ChallengeScreen() {
  return (
    <div className="screen-challenge">
      <div className="challenge-progress">
        <div className="challenge-progress-bar" />
        <div className="challenge-progress-bar challenge-progress-bar-fill" />
      </div>
      <p className="challenge-progress-label">Aura tier</p>
      <p className="challenge-progress-value">Green</p>
      <div className="challenge-tier-track">
        <span className="tier-pill tier-gray" />
        <span className="tier-pill tier-purple" />
        <span className="tier-pill tier-blue" />
        <span className="tier-pill tier-green is-current" />
        <span className="tier-pill tier-yellow" />
        <span className="tier-pill tier-orange" />
        <span className="tier-pill tier-red" />
      </div>
      <div className="challenge-stat-row">
        <div className="challenge-stat">
          <span className="stat-value">128</span>
          <span className="stat-label">aura</span>
        </div>
        <div className="challenge-stat">
          <span className="stat-value">14</span>
          <span className="stat-label">posts</span>
        </div>
        <div className="challenge-stat">
          <span className="stat-value">#3</span>
          <span className="stat-label">rank</span>
        </div>
      </div>
    </div>
  );
}

function RanksScreen() {
  const rows = [
    { rank: 1, name: "alex.h", points: 612, color: "var(--aura-red)" },
    { rank: 2, name: "kira.m", points: 547, color: "var(--aura-orange)" },
    { rank: 3, name: "rkota", points: 481, color: "var(--aura-yellow)" },
    { rank: 4, name: "trace", points: 322, color: "var(--aura-green)" },
    { rank: 5, name: "drew", points: 248, color: "var(--aura-blue)" },
  ];
  return (
    <div className="screen-ranks">
      <div className="ranks-header">
        <span className="ranks-tab is-active">All</span>
        <span className="ranks-tab">Friends</span>
      </div>
      {rows.map((r) => (
        <div key={r.rank} className="ranks-row">
          <span className="ranks-rank" style={{ color: r.color }}>
            #{r.rank}
          </span>
          <span className="ranks-avatar" style={{ background: r.color }}>
            {r.name[0].toUpperCase()}
          </span>
          <span className="ranks-name">@{r.name}</span>
          <span className="ranks-points">{r.points}</span>
        </div>
      ))}
    </div>
  );
}

function TabIcon({
  active,
  label,
  glyph,
}: {
  active: boolean;
  label: string;
  glyph: "home" | "diamond" | "trophy" | "users";
}) {
  return (
    <div className={`phone-tab ${active ? "is-active" : ""}`}>
      <span className={`phone-tab-glyph glyph-${glyph}`} aria-hidden="true" />
      <span className="phone-tab-label">{label}</span>
    </div>
  );
}
