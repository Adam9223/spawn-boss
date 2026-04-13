import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Footer({ classes }) {
  return (
    <Box component="footer" className={classes.footer}>
      <Typography variant="body2" className={classes.footerCredit}>Developed by Ncyy</Typography>
    </Box>
  );
}

export default Footer;
