import React, { useEffect, useMemo, useState } from 'react';
import Container from '@material-ui/core/Container';
import AppHeader from '../components/AppHeader';
import BossTable from '../components/BossTable';
import FiltersPanel from '../components/FiltersPanel';
import Footer from '../components/Footer';
import StatsGrid from '../components/StatsGrid';
import { STORAGE_KEY } from '../data/config';
import BOSSES from '../data/bosses.json';
import { DEFAULT_SERVER_REGION, SERVER_REGIONS, getServerRegion } from '../data/serverRegions';
import useBossTimerStyles from '../styles/useBossTimerStyles';
import { getNextSpawn, getServerTimeDate } from '../utils/time';

function loadTrackedState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && typeof saved === 'object' ? saved : {};
  } catch (error) {
    return {};
  }
}

function getServerDate(now, offsetHours, manualTime, serverRegion) {
  const serverDate = getServerTimeDate(now, serverRegion.timeZone, offsetHours);

  if (!manualTime) {
    return serverDate;
  }

  const [hours, minutes] = manualTime.split(':').map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return serverDate;
  }

  const manualDate = new Date(serverDate);
  manualDate.setHours(hours, minutes, 0, 0);
  return manualDate;
}

function TrackerPage() {
  const classes = useBossTimerStyles();
  const [now, setNow] = useState(new Date());
  const [trackedState, setTrackedState] = useState(loadTrackedState);
  const [trackedOnly, setTrackedOnly] = useState(true);
  const [serverRegionId, setServerRegionId] = useState(DEFAULT_SERVER_REGION);
  const [region, setRegion] = useState('All');
  const [world, setWorld] = useState('All');
  const [windowMinutes, setWindowMinutes] = useState(30);
  const [offsetHours, setOffsetHours] = useState(0);
  const [manualTime, setManualTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trackedState));
  }, [trackedState]);

  const serverRegion = useMemo(() => getServerRegion(serverRegionId), [serverRegionId]);

  const serverDate = useMemo(
    () => getServerDate(now, offsetHours, manualTime, serverRegion),
    [manualTime, now, offsetHours, serverRegion],
  );

  const bosses = useMemo(() => BOSSES.map((boss) => ({
    ...boss,
    tracked: trackedState[boss.id] ?? boss.tracked,
  })), [trackedState]);

  const regions = useMemo(() => ['All', ...Array.from(new Set(BOSSES.map((boss) => boss.region))).sort()], []);
  const worlds = useMemo(() => ['All', ...Array.from(new Set(BOSSES.map((boss) => boss.world))).sort()], []);

  const rankedBosses = useMemo(() => bosses
    .map((boss) => getNextSpawn(boss, serverDate))
    .filter((boss) => !trackedOnly || boss.tracked)
    .filter((boss) => region === 'All' || boss.region === region)
    .filter((boss) => world === 'All' || boss.world === world)
    .sort((a, b) => a.minutesUntil - b.minutesUntil), [bosses, region, serverDate, trackedOnly, world]);

  const upcomingBosses = rankedBosses.filter((boss) => boss.minutesUntil <= Number(windowMinutes));
  const spawningNow = rankedBosses.filter((boss) => boss.spawningNow);
  const trackedCount = bosses.filter((boss) => boss.tracked).length;

  const toggleTracked = (id) => {
    const current = bosses.find((boss) => boss.id === id);
    setTrackedState((previous) => ({
      ...previous,
      [id]: !current.tracked,
    }));
  };

  return (
    <>
      <AppHeader classes={classes} serverDate={serverDate} serverRegion={serverRegion} />

      <Container maxWidth="lg" className={classes.main}>
        <StatsGrid
          classes={classes}
          spawningNowCount={spawningNow.length}
          totalBosses={BOSSES.length}
          trackedCount={trackedCount}
          upcomingCount={upcomingBosses.length}
          visibleCount={rankedBosses.length}
          windowMinutes={windowMinutes}
        />

        <FiltersPanel
          classes={classes}
          manualTime={manualTime}
          offsetHours={offsetHours}
          onManualTimeChange={setManualTime}
          onOffsetHoursChange={setOffsetHours}
          onRegionChange={setRegion}
          onServerRegionChange={setServerRegionId}
          onTrackedOnlyChange={setTrackedOnly}
          onWindowMinutesChange={setWindowMinutes}
          onWorldChange={setWorld}
          region={region}
          regions={regions}
          serverRegionId={serverRegionId}
          serverRegions={SERVER_REGIONS}
          trackedOnly={trackedOnly}
          windowMinutes={windowMinutes}
          world={world}
          worlds={worlds}
        />

        <BossTable
          bosses={rankedBosses}
          classes={classes}
          onResetTracking={() => setTrackedState({})}
          onToggleTracked={toggleTracked}
          windowMinutes={windowMinutes}
        />

        <Footer classes={classes} />
      </Container>
    </>
  );
}

export default TrackerPage;
