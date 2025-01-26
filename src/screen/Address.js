import React, { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import AddressItem from "../components/AddressItem";
import { useGlobalContext } from "../context";

const Address = () => {
  const { addressList, setAddressList } = useGlobalContext();
  const navigate = useNavigate();
  //input radio state
  const [selectedAddress, setSelectedAddress] = useState("");
  const [isNewAddress, setIsNewAddress] = useState(false);
  //Value to <Addressitem />
  const [singleAddress, setSingleAddress] = useState({
    city: "",
    address: "",
    CAP: "",
    nation: "",
    number: "",
  });

  //Add first addrees input radio active
  useEffect(() => {
    if (addressList.length > 0 && !selectedAddress) {
      setSelectedAddress(addressList[0].city);
    }
  }, [addressList, selectedAddress]);

  const handleChangeInputRadio = (event) => {
    setSelectedAddress(event.target.value);
  };

  //Change form value
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setSingleAddress({ ...singleAddress, [name]: value });
  };

  //Form submit
  const HandleSubmit = (e) => {
    e.preventDefault();
    setIsNewAddress(false);

    if (
      singleAddress.city &&
      singleAddress.address &&
      singleAddress.CAP &&
      singleAddress.nation &&
      singleAddress.number
    ) {
      setAddressList([
        ...addressList,
        {
          ...singleAddress,
        },
      ]);
      setSingleAddress({
        city: "",
        address: "",
        CAP: "",
        nation: "",
        number: "",
      });
    } else {
      alert("form is empty");
    }
  };

  const RemoveAddress = (city) => {
    setAddressList((prevAddressList) => {
      return prevAddressList.filter(
        (addressToDelete) => addressToDelete.city !== city
      );
    });
  };

  return (
    <div className="px-4 my-12 xl:px-40">
      <h1 className="mb-8 text-xl font-semibold">Select Address</h1>

      {addressList.map((item) => {
        return (
          <AddressItem
            key={item.city}
            handleChangeInputRadio={handleChangeInputRadio}
            selectedAddress={selectedAddress}
            RemoveAddress={RemoveAddress}
            item={item}
          ></AddressItem>
        );
      })}

      <div
        className={`relative mb-16 text-center ${
          isNewAddress ? "hidden" : "block"
        }`}
      >
        <hr className="border-black border-dashed text-clip"></hr>
        <button
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  w-6 h-6 rounded-[50%] bg-black flex justify-center items-center"
          onClick={() => setIsNewAddress(true)}
        >
          <FiPlus className="text-lg text-white"></FiPlus>
        </button>
        <p className="mt-4">Add New Address</p>
      </div>

      <form
        className={`grid grid-cols-1 gap-3 m-16 lg:grid-cols-2 ${
          isNewAddress ? "block" : "hidden"
        }`}
      >
        <div>
          <p className="mb-1">City</p>
          <input
            type="text"
            placeholder="City"
            className="w-full px-3 py-2 border rounded-lg"
            required
            name="city"
            value={singleAddress.city}
            onChange={HandleChange}
          ></input>
        </div>
        <div>
          <p className="mb-1">Address</p>
          <input
            type="text"
            placeholder="Address"
            className="w-full px-3 py-2 border rounded-lg"
            required
            name="address"
            value={singleAddress.address}
            onChange={HandleChange}
          ></input>
        </div>
        <div>
          <p className="mb-1">CAP</p>
          <input
            type="number"
            placeholder="CAP"
            className="w-full px-3 py-2 border rounded-lg"
            required
            name="CAP"
            value={singleAddress.CAP}
            onChange={HandleChange}
          ></input>
        </div>
        <div>
          <p className="mb-1">Nation</p>
          <input
            type="text"
            placeholder="Nation"
            className="w-full px-3 py-2 border rounded-lg"
            required
            name="nation"
            value={singleAddress.nation}
            onChange={HandleChange}
          ></input>
        </div>
        <div>
          <p className="mb-1">Telephone Number</p>
          <input
            type="number"
            placeholder="Telephone number"
            className="w-full px-3 py-2 border rounded-lg"
            required
            name="number"
            value={singleAddress.number}
            onChange={HandleChange}
          ></input>
        </div>
        <button
          className="w-full py-4 mx-auto text-center border border-black rounded-lg lg:py-0 max-w-80 "
          onClick={(e) => HandleSubmit(e)}
        >
          Submit
        </button>
      </form>

      <div className="flex items-center justify-between gap-6 xl:justify-end">
        <button
          className="flex-1 py-6 font-medium border border-black rounded-md max-w-52"
          onClick={() => navigate(`/Cart`)}
        >
          Back
        </button>
        <button
          className={`flex-1 py-6 font-medium text-white bg-black border rounded-md max-w-52 ${
            addressList <= 0 ? "opacity-30" : "opacity-100"
          }`}
          onClick={() => navigate(`/Checkout/Shipping`)}
          disabled={addressList <= 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Address;
