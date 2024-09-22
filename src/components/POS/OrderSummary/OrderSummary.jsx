import './OrderSummary.scss';

function OrderSummary({ order, setOrder, selectedItemId, handleSelectItem }) {
  const taxRate = 0.07; //fFairField county... more will be added later
  let subtotal = 0;
  let tax = 0;
  let total = 0;

  function getTotals() {
    order.forEach((item) => {
      let itemTotal = item.price;

      Object.keys(item.modifications).forEach((modType) => {
        item.modifications[modType].forEach((modification) => {
          if (modification.price > 0.0) {
            itemTotal += modification.price;
          }
        });
      });

      subtotal += itemTotal;

      if (item.taxed === true) {
        const itemTax = itemTotal * taxRate;
        tax += itemTax;
      }
    });

    total = subtotal + tax;
  }

  getTotals();

  const handleModRemoval = (item, modType, modification) => {
    const updatedMods = item.modifications[modType].filter(
      (mod) => mod.name !== modification.name
    );

    const updatedItem = {
      ...item,
      modifications: {
        ...item.modifications,
        [modType]: updatedMods,
      },
    };

    setOrder((prevOrder) =>
      prevOrder.map((orderItem) =>
        orderItem.id === item.id ? updatedItem : orderItem
      )
    );
  };

  return (
    <>
      <section className="order__summary">
        <div className="order__banner">
          <h1 className="order__banner-header">Order Summary</h1>
        </div>
        <div className="order__list">
          {order.map((item) => (
            <div
              className={`order__item ${
                item.id === selectedItemId ? 'order__item--selected' : ''
              } `}
              key={item.id}
              onClick={() => {
                handleSelectItem(item.id);
              }}
            >
              <div className="order__item-top">
                <p className="order_item-name">{item.name}...</p>
                <p className="order_item-price">...{item.price}</p>
              </div>
              <div className="order__item-bottom">
                <div className="order__item-mods">
                  {Object.keys(item.modifications).map(
                    (modType) =>
                      item.modifications[modType].length > 0 && (
                        <div
                          className="order__item-mods-container"
                          key={modType}
                        >
                          <strong className="order__item-mods-type">
                            {modType.toUpperCase()}:{' '}
                          </strong>
                          {item.modifications[modType].map((modification) => (
                            <div
                              className="order__item-mod"
                              key={modification.name}
                              onClick={() =>
                                handleModRemoval(item, modType, modification)
                              }
                            >
                              {modification.name}
                            </div>
                          ))}
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order__footer">
          <div className="order__footer-container">
            <h1 className="order__footer-subtotal">subtotal...</h1>
            <h1 className="order__footer-totals">${subtotal.toFixed(2)}</h1>
          </div>
          <div className="order__footer-container">
            <h1 className="order__footer-tax">tax...</h1>
            <h1 className="order__footer-totals">${tax.toFixed(2)}</h1>
          </div>
          <div className="order__footer-container">
            <h1 className="order__footer-total">total...</h1>
            <h1 className="order__footer-totals order__footer-grand-total">
              ${total.toFixed(2)}
            </h1>
          </div>
        </div>
        <div className="order__number">Trans: 1234</div>
      </section>
    </>
  );
}

export default OrderSummary;
