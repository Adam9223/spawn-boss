import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useBossTimerStyles from '../styles/useBossTimerStyles';

function LandingPage() {
  const classes = useBossTimerStyles();

  return (
    <main className={classes.landingPage}>
      <Container maxWidth={false} className={classes.landingContainer}>
        <Box className={classes.landingTopBar}>
          <Box className={classes.titleGroup}>
            <Box className={classes.iconTile}>
              <img className={classes.brandImage} src={`${process.env.PUBLIC_URL}/mir4img.jpg`} alt="MIR4" />
            </Box>
            <Box>
              <Typography variant="h6">MIR4 Boss Timer</Typography>
              <Typography variant="body2" className={classes.muted}>Asia server spawn tracker</Typography>
            </Box>
          </Box>
          <Navbar classes={classes} />
        </Box>

        <Box
          className={classes.landingHeroImage}
          style={{ backgroundImage: `linear-gradient(90deg, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.25)), url("${process.env.PUBLIC_URL}/mir4image.jpg")` }}
        >
          <Box className={classes.landingCopy}>
            <Typography variant="h2" component="h1" className={classes.landingTitle}>
              MIR4 BOSS TIMER
            </Typography>
            <Typography variant="body1" className={classes.landingText}>
              Know the next window. Move with your party. Keep the hunt on time.
            </Typography>
            <Link className={classes.primaryLinkButton} to="/tracker">Enter tracker</Link>
          </Box>
        </Box>

        <Footer classes={classes} />
      </Container>
    </main>
  );
}

export default LandingPage;
