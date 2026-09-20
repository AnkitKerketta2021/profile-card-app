export function ProfileStats({ stats }) {
  return (
    <dl className="stats" aria-label="Profile statistics">
      {stats.map(({ label, value }) => (
        <div className="stat" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
