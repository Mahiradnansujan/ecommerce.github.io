import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{color: match ? '#E1E550' : 'black', borderBottom: match ? '1px solid #E1E550' : ''}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }