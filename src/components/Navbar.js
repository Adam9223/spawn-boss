import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Spawn Boss', path: '/tracker' },
  { label: 'Weekly Materials', path: '/weekly-materials' },
  { label: 'Weeklies Schedule', path: '/weeklies-schedule' },
];

function Navbar({ classes }) {
  return (
    <Box component="nav" className={classes.navbar} aria-label="Main navigation">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          className={({ isActive }) => [
            classes.navbarLink,
            isActive ? classes.navbarLinkActive : '',
          ].filter(Boolean).join(' ')}
          to={item.path}
        >
          {item.label}
        </NavLink>
      ))}
    </Box>
  );
}

export default Navbar;
