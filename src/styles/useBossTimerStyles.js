import { makeStyles } from '@material-ui/core/styles';

const useBossTimerStyles = makeStyles((theme) => ({
  appBar: {
    background: '#ffffff',
    borderBottom: '1px solid #dce5e1',
    boxShadow: 'none',
    color: theme.palette.text.primary,
  },
  toolbar: {
    minHeight: 68,
    justifyContent: 'space-between',
  },
  titleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.25),
  },
  iconTile: {
    alignItems: 'center',
    background: '#172321',
    borderRadius: 8,
    color: '#ffffff',
    display: 'flex',
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  brandImage: {
    borderRadius: 8,
    height: 42,
    objectFit: 'cover',
    width: 42,
  },
  main: {
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(4),
  },
  panel: {
    border: '1px solid #dce5e1',
    borderRadius: 8,
    boxShadow: '0 8px 24px rgba(23, 35, 33, 0.06)',
  },
  statCard: {
    border: '1px solid #dce5e1',
    borderRadius: 8,
    boxShadow: 'none',
    height: '100%',
  },
  statLabel: {
    color: theme.palette.text.secondary,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  controls: {
    padding: theme.spacing(2),
  },
  nativeLabel: {
    color: theme.palette.text.secondary,
    display: 'block',
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 4,
  },
  nativeSelect: {
    background: '#ffffff',
    border: '1px solid #c7d4cf',
    borderRadius: 8,
    color: theme.palette.text.primary,
    font: 'inherit',
    height: 40,
    padding: '0 12px',
    width: '100%',
  },
  nativeInputWrap: {
    position: 'relative',
  },
  nativeInput: {
    background: '#ffffff',
    border: '1px solid #c7d4cf',
    borderRadius: 8,
    color: theme.palette.text.primary,
    font: 'inherit',
    height: 40,
    padding: '0 48px 0 12px',
    width: '100%',
  },
  inputSuffix: {
    color: theme.palette.text.secondary,
    fontSize: 13,
    position: 'absolute',
    right: 12,
    top: 11,
  },
  pill: {
    alignItems: 'center',
    background: '#11615f',
    borderRadius: 8,
    color: '#ffffff',
    display: 'inline-flex',
    fontSize: 13,
    fontWeight: 700,
    minHeight: 32,
    padding: '6px 12px',
    whiteSpace: 'nowrap',
  },
  neutralPill: {
    background: '#e4ebe7',
    color: theme.palette.text.primary,
  },
  dangerPill: {
    background: '#b5344a',
    color: '#ffffff',
  },
  resetButton: {
    background: '#ffffff',
    border: '1px solid #11615f',
    borderRadius: 8,
    color: '#11615f',
    cursor: 'pointer',
    font: 'inherit',
    fontWeight: 700,
    minHeight: 36,
    padding: '6px 14px',
  },
  trackToggle: {
    accentColor: '#11615f',
    height: 18,
    width: 18,
  },
  inlineIcon: {
    alignItems: 'center',
    color: theme.palette.primary.main,
    display: 'inline-flex',
  },
  table: {
    minWidth: 980,
  },
  bossName: {
    fontWeight: 700,
  },
  muted: {
    color: theme.palette.text.secondary,
  },
  spawnSoon: {
    backgroundColor: '#f7e8ea',
  },
  spawning: {
    backgroundColor: '#e3f1ec',
  },
  emptyState: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
}));

export default useBossTimerStyles;
