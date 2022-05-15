/**
 * format timestamp to readable format:
 * using Intl.DateTimeFormat api,
 * formatTime receives timeInSeconds and returns a readable format.
 * eg: formatTime(21600) => output: '06:)0'
 *
 * ===================
 *
 */

export const formatTime = (timeInSeconds) =>
  new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'short',
    timeZone: 'UTC',
  }).format(timeInSeconds * 1000);

/**
 * format number to percentage
 * eg: formatPercentage(36) => output: '36%'
 *
 * ===================
 *
 */

export const formatNumberToPercentage = (number) => `${number.toFixed(1)}%`;

/**
 * format date to format yyyy-mm-dd
 *
 * ===================
 *
 */

export const formatDate = (date) =>
  new Intl.DateTimeFormat('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
