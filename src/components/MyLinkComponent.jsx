import { Link } from 'react-router-dom';

function MyLinkComponent({ to, children, ...rest }) {
  const isExternal = typeof to === 'string' && (to.startsWith('http://') || to.startsWith('https://'));

  if (isExternal) {
    return (
      <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}

export default MyLinkComponent;
