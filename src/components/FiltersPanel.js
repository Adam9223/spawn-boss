import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function SelectFilter({ classes, id, label, value, options, onChange }) {
  return (
    <>
      <label className={classes.nativeLabel} htmlFor={id}>{label}</label>
      <select className={classes.nativeSelect} id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((item) => {
          const optionValue = typeof item === 'string' ? item : item.id;
          const optionLabel = typeof item === 'string' ? item : item.label;
          return <option key={optionValue} value={optionValue}>{optionLabel}</option>;
        })}
      </select>
    </>
  );
}

function NumberInput({ classes, id, label, value, suffix, onChange }) {
  return (
    <>
      <label className={classes.nativeLabel} htmlFor={id}>{label}</label>
      <div className={classes.nativeInputWrap}>
        <input
          className={classes.nativeInput}
          id={id}
          onChange={(event) => onChange(event.target.value)}
          type="number"
          value={value}
        />
        <span className={classes.inputSuffix}>{suffix}</span>
      </div>
    </>
  );
}

function FiltersPanel({
  classes,
  regions,
  worlds,
  serverRegions,
  region,
  world,
  serverRegionId,
  windowMinutes,
  offsetHours,
  manualTime,
  trackedOnly,
  onRegionChange,
  onWorldChange,
  onServerRegionChange,
  onWindowMinutesChange,
  onOffsetHoursChange,
  onManualTimeChange,
  onTrackedOnlyChange,
}) {
  return (
    <Box mt={3} component={Paper} className={classes.panel}>
      <Grid container spacing={2} alignItems="center" className={classes.controls}>
        <Grid item xs={12} sm={6} md={2}>
          <SelectFilter
            classes={classes}
            id="server-region-filter"
            label="Server time"
            value={serverRegionId}
            options={serverRegions}
            onChange={onServerRegionChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <SelectFilter classes={classes} id="region-filter" label="Region" value={region} options={regions} onChange={onRegionChange} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <SelectFilter classes={classes} id="world-filter" label="World" value={world} options={worlds} onChange={onWorldChange} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <NumberInput classes={classes} id="window-minutes" label="Window" value={windowMinutes} suffix="min" onChange={onWindowMinutesChange} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <NumberInput classes={classes} id="offset-hours" label="Offset" value={offsetHours} suffix="hr" onChange={onOffsetHoursChange} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <label className={classes.nativeLabel} htmlFor="manual-time">Manual time</label>
          <input
            className={classes.nativeInput}
            id="manual-time"
            onChange={(event) => onManualTimeChange(event.target.value)}
            type="time"
            value={manualTime}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="body2">Tracked only</Typography>
            <input
              checked={trackedOnly}
              className={classes.trackToggle}
              onChange={(event) => onTrackedOnlyChange(event.target.checked)}
              type="checkbox"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FiltersPanel;
