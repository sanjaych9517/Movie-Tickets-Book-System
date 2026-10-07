const timeFormat = (minutes) => {
  const houres = Math.floor(minutes / 60);
  const minutesRemender = minutes % 60;
  return `${houres}h ${minutesRemender}m`;
};

export default timeFormat;
