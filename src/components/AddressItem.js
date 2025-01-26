import React from "react";
import { FaPen } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";

const AddressItem = ({
  selectedAddress,
  handleChangeInputRadio,
  RemoveAddress,
  item,
}) => {
  const { city, address, nation, number, CAP } = item;

  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-4 p-6 mb-6 rounded-lg bg-product_bg">
        <input
          type="radio"
          id="address-1"
          value={city}
          name="address"
          checked={selectedAddress === city}
          onChange={handleChangeInputRadio}
          required
        ></input>
        <div className="w-full">
          <div className="flex gap-6 mb-4">
            <p className="text-lg">{city}</p>
            {/* <div className="flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-black rounded">
              HOME
            </div> */}
          </div>
          <div className="flex justify-between gap-4 mb-2">
            <p>{`${address} , ${nation} , ${CAP}`}</p>
            <div className="flex items-center gap-6">
              {/* <button>
                <FaPen className="w-4 h-4"></FaPen>
              </button> */}
              <button onClick={() => RemoveAddress(city)}>
                <RiCloseLargeLine className="w-4 h-4"></RiCloseLargeLine>
              </button>
            </div>
          </div>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressItem;
