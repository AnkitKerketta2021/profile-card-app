export function ProfileAvatar({ src, alt }) {
  return (
    <div className="avatar-wrap">
      <img className="avatar" src={src} alt={alt} loading="lazy" />
      <span className="online-dot" aria-label="Online" />
    </div>
  );
}
