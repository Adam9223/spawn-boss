import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function StatCard({ classes, label, value, helper }) {
  return (
    <Grid item xs={12} md={3}>
      <Card className={classes.statCard}>
        <CardContent>
          <Typography className={classes.statLabel}>{label}</Typography>
          <Typography variant="h4">{value}</Typography>
          <Typography variant="body2" className={classes.muted}>{helper}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

function StatsGrid({ classes, trackedCount, totalBosses, visibleCount, upcomingCount, windowMinutes, spawningNowCount }) {
  return (
    <Grid container spacing={3}>
      <StatCard classes={classes} label="Tracked" value={trackedCount} helper={`${totalBosses} bosses loaded`} />
      <StatCard classes={classes} label="Visible" value={visibleCount} helper="After filters" />
      <StatCard classes={classes} label="Upcoming" value={upcomingCount} helper={`Within ${windowMinutes} minutes`} />
      <StatCard classes={classes} label="Spawning Now" value={spawningNowCount} helper="Less than 1 minute" />
    </Grid>
  );
}

export default StatsGrid;
