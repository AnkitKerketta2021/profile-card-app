import { useState } from "react";
import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileStats } from "./ProfileStats";
import { Link } from "react-router-dom";
import MyLinkComponent from "./MyLinkComponent";

export function ProfileCard({ profile }) {
  const {
    name,
    role,
    bio,
    avatarUrl,
    location,
    availability,
    portfolio,
    linkedin,
    stats,
  } = profile;

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;

    setRotation({
      x: rotateX,
      y: rotateY,
    });
  };

  const handleMouseLeave = () => {
    setRotation({
      x: 0,
      y: 0,
    });
  };

  return (
    <article
      className="profile-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--rotate-x": `${rotation.x}deg`,
        "--rotate-y": `${rotation.y}deg`,
      }}
    >
      <header className="profile-header">
        <ProfileAvatar src={avatarUrl} alt={`${name} profile`} />

        <div>
          <p className="eyebrow">{availability}</p>

          <h1>{name}</h1>

          <p className="role">{role}</p>
        </div>
      </header>

      <p className="bio">{bio}</p>

      <div className="location" aria-label={`Location: ${location}`}>
        <span aria-hidden="true">⌖</span>
        <span>{location}</span>
      </div>

      <div className="portfolio" aria-level={`portfolio: ${portfolio}`}>
        <MyLinkComponent to={portfolio}>Portfolia Link</MyLinkComponent>
      </div>

      <ProfileStats stats={stats} />

      <footer className="card-actions">
        <button
          type="button"
          className="primary-button linkedin"
          onClick={() => {
            window.open(linkedin, "_blank", "noopener,noreferrer");
          }}
        >
          View LinkedIn profile
        </button>

        <button type="button" className="secondary-button">
          Message
        </button>
      </footer>
    </article>
  );
}
