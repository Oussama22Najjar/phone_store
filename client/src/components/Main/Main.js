import Products from "../Products/Products";

export const Main = ({ textSearch, match: { url } }) => {
  console.log(url);
  return (
    <div>
      <Products textSearch={textSearch} url={url} />
    </div>
  );
};
