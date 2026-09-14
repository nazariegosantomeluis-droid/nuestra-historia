import { useEffect, useState } from "react";

export interface ElapsedTime {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Calendar-aware difference between `start` and `now`, expressed as
 * years/months/days/hours/minutes/seconds (each field is a natural
 * "remainder", e.g. "1 year, 7 months, 3 days...").
 */
function computeElapsed(start: Date, now: Date): ElapsedTime {
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const daysInPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += daysInPrevMonth;
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  if (years < 0) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return { years, months, days, hours, minutes, seconds };
}

/** Live, ticking elapsed time since `startDateIso`. Updates every second. */
export function useElapsedTime(startDateIso: string): ElapsedTime {
  const [elapsed, setElapsed] = useState(() =>
    computeElapsed(new Date(startDateIso), new Date())
  );

  useEffect(() => {
    const start = new Date(startDateIso);
    const tick = () => setElapsed(computeElapsed(start, new Date()));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [startDateIso]);

  return elapsed;
}
