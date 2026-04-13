import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import useBossTimerStyles from '../styles/useBossTimerStyles';

function WeekliesSchedulePage() {
  const classes = useBossTimerStyles();

  return (
    <>
      <AppHeader classes={classes} />
      <Container maxWidth="lg" className={classes.main}>
        <Box className={classes.panel} p={3}>
          <Typography variant="h4">Weeklies Schedule</Typography>
          <Typography variant="body1" className={classes.muted}>
            Weekly schedule details will be added here.
          </Typography>
        </Box>
        <Footer classes={classes} />
      </Container>
    </>
  );
}

export default WeekliesSchedulePage;
