export default function formatDate(date) {
  let newDate = new Date(date);
  let day = (newDate.getDate() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  let month = (newDate.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  let year = newDate.getFullYear();
  return day + "-" + month + "-" + year;
}