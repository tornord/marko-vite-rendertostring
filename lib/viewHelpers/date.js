import moment from 'moment';
moment.locale('sv-SE');
moment.defineLocale('sv-REL', {
  parentLocale: 'sv',
  relativeTime: {
    future: 'om %s',
    past: '%s',
    s: 'Just nu',
    ss: 'Just nu',
    m: '1 min sedan',
    mm: '%d min sedan',
  },
});

export function format(date, str) {
  return moment(date).format(str);
}

export function literalDate(date) {
  return date ? format(date, 'D MMMM YYYY') : '';
}

export function literalDateRange(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const start = literalDate(startDate).split(' ');
  const end = literalDate(endDate).split(' ');
  const daysDiffer = start[0] !== end[0];
  const monthsDiffer = start[1] !== end[1];
  const yearsDiffer = start[2] !== end[2];
  if (daysDiffer && !monthsDiffer && !yearsDiffer) {
    return `${start[0]}–${end[0]} ${end[1]} ${end[2]}`;
  }
  if (monthsDiffer && !yearsDiffer) {
    return `${start[0]} ${start[1]} – ${end[0]} ${end[1]} ${end[2]}`;
  }
  if (yearsDiffer) {
    return `${start[0]} ${start[1]} ${start[2]} – ${end[0]} ${end[1]} ${end[2]}`;
  }
  return `${start[0]} ${start[1]} ${start[2]}`;
}
