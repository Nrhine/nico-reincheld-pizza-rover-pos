import './ItemMods.scss';
import { v4 as uuid } from 'uuid';
import pizzaAddOns from '../../../data/add-ons.js';

function ItemMods({
  order,
  setOrder,
  addToOrder,
  selectedItemId,
  handleRemoveItem,
  selectedModType,
  setSelectedModType,
  setModifications,
}) {
  const selectedItem = order.find((item) => item.id === selectedItemId);

  const handleCopyItem = () => {
    if (selectedItem) {
      const newItem = {
        ...selectedItem,
        id: uuid(),
      };
      addToOrder(newItem);
    }
  };

  const handleModTypeSelect = (type) => {
    setSelectedModType(type);
  };

  const handleOptionSelect = (option) => {
    if (selectedModType) {
      // update modifications
      setModifications((prevMods) => ({
        ...prevMods,
        [selectedModType]: [...prevMods[selectedModType], option],
      }));

      // create updatedItem
      const updatedItem = {
        ...selectedItem,
        modifications: {
          ...selectedItem.modifications,
          [selectedModType]: [
            ...selectedItem.modifications[selectedModType],
            option,
          ],
        },
      };

      // update the order array
      setOrder((prevOrder) =>
        prevOrder.map((item) =>
          item.id === selectedItem.id ? updatedItem : item
        )
      );
    }
  };

  //   const handleOptionSelect = (option) => {
  //     if (selectedModType) {
  //       setModifications((prevMods) => ({
  //         ...prevMods,
  //         [selectedModType]: [...prevMods[selectedModType], option],
  //       }));
  //     }
  //   };

  return (
    <section className="mods">
      <h1 className="mods__header">Modifications</h1>
      <div className="mods__button-container">
        <div className="mods__button-top">
          <p className="mods__button" onClick={() => handleModTypeSelect('no')}>
            NO
          </p>
          <p
            className="mods__button mods__button-middle"
            onClick={() => handleModTypeSelect('easy')}
          >
            EASY
          </p>
          <p
            className="mods__button"
            onClick={() => handleModTypeSelect('extra')}
          >
            EXTRA
          </p>
        </div>
        <div className="mods__button-divider"></div>
        <div className="mods__button-bottom">
          <p
            className="mods__button"
            onClick={() => handleModTypeSelect('sub')}
          >
            SUB
          </p>
          <p
            className="mods__button mods__button-middle"
            onClick={() => handleCopyItem()}
          >
            COPY
          </p>
          <p
            className="mods__button"
            onClick={() => handleRemoveItem(selectedItemId)}
          >
            DELETE
          </p>
        </div>
      </div>
      <div className="mods__option-container">
        {pizzaAddOns.map((option) =>
          !option.abbreviation ? (
            <div
              className="mods__option"
              key={option.id}
              onClick={() => handleOptionSelect(option)}
            >
              {option.name}
            </div>
          ) : (
            <div
              className="mods__option"
              key={option.id}
              onClick={() => handleOptionSelect(option)}
            >
              {option.abbreviation}
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default ItemMods;
