const renderMovie = (Layout, datas) => {
  return datas.map((data, idx) => {
    return <Layout data={data} />;
  });
};
export default renderMovie;