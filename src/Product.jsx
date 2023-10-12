const Product = ({name, price}) => {
  return (
    <div className="border rounded p-3 ">
      <div>{name}</div>
      <div>{price}</div>
    </div>
  )
}

export default Product