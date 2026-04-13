const CYCLE_MINUTES = 12 * 60;

function parseSpawnTimes(value) {
  return value.split('/').map((time) => {
    const [hourPart, minutePart] = time.trim().split(':');
    const hour = Number(hourPart) % 12;
    const minute = Number(minutePart);
    return hour * 60 + minute;
  });
}

function minutesFromDate(date) {
  return (date.getHours() % 12) * 60 + date.getMinutes() + date.getSeconds() / 60;
}

function dateFromCycleMinutes(baseDate, minutesUntil) {
  return new Date(baseDate.getTime() + minutesUntil * 60000);
}

export function getAsiaDate(now, offsetHours) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).formatToParts(now);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const base = new Date(now);
  base.setHours(Number(values.hour) + Number(offsetHours || 0), Number(values.minute), Number(values.second), 0);
  return base;
}

export function formatClock(date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

export function formatServerClock(date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);
}

export function formatCountdown(totalMinutes) {
  const totalSeconds = Math.max(0, Math.round(totalMinutes * 60));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, '0')}m`;
  }

  return `${minutes}m ${String(seconds).padStart(2, '0')}s`;
}

export function getNextSpawn(boss, serverDate) {
  const currentCycleMinute = minutesFromDate(serverDate);
  const spawnMinutes = parseSpawnTimes(boss.spawnTimes);
  const ranked = spawnMinutes
    .map((spawnMinute) => ({
      cycleMinute: spawnMinute,
      minutesUntil: (spawnMinute - currentCycleMinute + CYCLE_MINUTES) % CYCLE_MINUTES,
    }))
    .sort((a, b) => a.minutesUntil - b.minutesUntil);

  const next = ranked[0];
  return {
    ...boss,
    nextSpawn: dateFromCycleMinutes(serverDate, next.minutesUntil),
    minutesUntil: next.minutesUntil,
    spawningNow: next.minutesUntil < 1,
  };
}
