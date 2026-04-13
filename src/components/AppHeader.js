import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { formatServerClock } from '../utils/time';

function AppHeader({ classes, serverDate }) {
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
        <span className={classes.pill}>{`Server ${formatServerClock(serverDate)}`}</span>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
