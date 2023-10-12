const Product = ({ ...props }) => {
  console.log("rendering Product ", props.title);
  return (
    <div className="border rounded p-3 w-2/12 bg-white">
      <img src={props.image} alt="" />
      <div>{props.title}</div>
      <div>$ {props.price}</div>
    </div>
  );
};

export default Product;
