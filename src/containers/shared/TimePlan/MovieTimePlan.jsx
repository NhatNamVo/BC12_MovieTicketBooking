const MovieTimePlan = (time) => {
  if (!!time) {
    const timePlan = time.slice(0, 10);
    const timeChange = timePlan.replaceAll("-", "/");
    const newTime = timeChange.split("/").reverse().join("/");
    return newTime;
  }
  return;
};
export default MovieTimePlan;
