import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { FilterGlyph, PinGlyph } from './Glyphs';
import { formatClock, formatCountdown } from '../utils/time';

function CountdownPill({ boss, classes, windowMinutes }) {
  const isUpcoming = boss.minutesUntil <= Number(windowMinutes);
  const className = [
    classes.pill,
    boss.spawningNow ? '' : isUpcoming ? classes.dangerPill : classes.neutralPill,
  ].filter(Boolean).join(' ');

  return (
    <span className={className}>
      {boss.spawningNow ? 'Now' : formatCountdown(boss.minutesUntil)}
    </span>
  );
}

function BossRow({ boss, classes, windowMinutes, onToggleTracked }) {
  const rowClassName = boss.spawningNow
    ? classes.spawning
    : boss.minutesUntil <= Number(windowMinutes)
      ? classes.spawnSoon
      : undefined;

  return (
    <TableRow key={boss.id} className={rowClassName}>
      <TableCell>
        <input
          checked={boss.tracked}
          className={classes.trackToggle}
          onChange={() => onToggleTracked(boss.id)}
          type="checkbox"
        />
      </TableCell>
      <TableCell>{boss.world}</TableCell>
      <TableCell>{boss.region}</TableCell>
      <TableCell>
        <Box display="flex" alignItems="center">
          <span className={classes.inlineIcon}><PinGlyph /></span>
          <Box ml={0.75}>{boss.map}</Box>
        </Box>
      </TableCell>
      <TableCell className={classes.bossName}>{boss.boss}</TableCell>
      <TableCell>{boss.spawnTimes}</TableCell>
      <TableCell>{formatClock(boss.nextSpawn)}</TableCell>
      <TableCell>
        <CountdownPill boss={boss} classes={classes} windowMinutes={windowMinutes} />
      </TableCell>
    </TableRow>
  );
}

function BossTable({ classes, bosses, windowMinutes, onToggleTracked, onResetTracking }) {
  return (
    <Box mt={3} component={Paper} className={classes.panel}>
      <Box p={2} display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <span className={classes.inlineIcon}><FilterGlyph /></span>
          <Box ml={1}>
            <Typography variant="h6">Next visible spawns</Typography>
            <Typography variant="body2" className={classes.muted}>Sorted by live countdown</Typography>
          </Box>
        </Box>
        <button className={classes.resetButton} onClick={onResetTracking} type="button">Reset tracking</button>
      </Box>

      {bosses.length > 0 ? (
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Track</TableCell>
                <TableCell>World</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Map</TableCell>
                <TableCell>Boss</TableCell>
                <TableCell>Spawn Times</TableCell>
                <TableCell>Next Spawn</TableCell>
                <TableCell>Countdown</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bosses.map((boss) => (
                <BossRow
                  key={boss.id}
                  boss={boss}
                  classes={classes}
                  windowMinutes={windowMinutes}
                  onToggleTracked={onToggleTracked}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box className={classes.emptyState}>
          <Typography variant="h6">No bosses match these filters.</Typography>
          <Typography variant="body2" className={classes.muted}>Clear a filter or turn off tracked-only mode.</Typography>
        </Box>
      )}
    </Box>
  );
}

export default BossTable;
