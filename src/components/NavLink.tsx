interface NavProps {
  href: string;
  children: string;
  className?: string;
}

const NavLink = ({ href, children, className }: NavProps) => {
  return (
    <li>
      <a className={className} href={href}>
        {children}
      </a>
    </li>
  );
};

export default NavLink;
