import './OrderSummary.scss';

function OrderSummary({
  order,
  selectedItemId,
  handleSelectItem,
  handleRemoveItem,
}) {
  return (
    <>
      <section className="order__summary">
        <div className="order__banner">
          <h1 className="order__banner-header">Order Summary</h1>
        </div>
        <div className="order__list">
          {order.map((item) => (
            <div className="order__item" key={item.id}>
              <p className="order_item-name">{item.name}...</p>
              <p className="order_item-price">...{item.price}</p>
            </div>
          ))}
        </div>
        <div className="order__footer">
          <div className="order__footer-container">
            <h1 className="order__footer-subtotal">subtotal</h1>
          </div>
          <div className="order__footer-container">
            <h1 className="order__footer-tax">tax</h1>
          </div>
          <div className="order__footer-container">
            <h1 className="order__footer-total">total</h1>
          </div>
        </div>
        <div className="order__number">Trans: 1234</div>
      </section>
    </>
  );
}

export default OrderSummary;
