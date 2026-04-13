import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { formatServerClock } from '../utils/time';

function AppHeader({ classes, serverDate, serverRegion }) {
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.titleGroup}>
          <Box className={classes.iconTile}>
            <img className={classes.brandImage} src={`${process.env.PUBLIC_URL}/mir4img.jpg`} alt="MIR4" />
          </Box>
          <Box>
            <Typography variant="h6">MIR4 Boss Timer</Typography>
            <Typography variant="body2" className={classes.muted}>Asia server spawn tracker</Typography>
          </Box>
        </Box>
        <Box className={classes.headerActions}>
          <Link className={classes.navLink} to="/">Home</Link>
          <Navbar classes={classes} />
          {serverDate ? <span className={classes.pill}>{`${serverRegion?.label || 'Server'} ${formatServerClock(serverDate)}`}</span> : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
