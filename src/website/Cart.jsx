import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import axios from "axios";

const Cart = () => {
  const [cartData, setCartData] = useState(null);

  function getCarts() {
    axios
      .get(`${BASE_URL}cart/get-carts`)
      .then((success) => {
        if (success.data.status === 1) {
          setCartData(success.data.carts);
        } else {
          console.log(success.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    getCarts();
  }, []);

  function increase(pId, qty) {
    const newQty = qty + 1;

    axios
      .put(`${BASE_URL}cart/change-qty?pid=${pId}&qty=${newQty}`)
      .then((success) => {
        if (success.data.status === 1) {
          alert(success.data.msg);
          getCarts();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function deleteProduct(cartId) {
    axios
      .delete(`${BASE_URL}cart/delete?id=${cartId}`)
      .then((success) => {
        if (success.data.status === 1) {
          alert(success.data.msg);
          getCarts();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  //   console.log(cartData);

  return (
    <div>
      {cartData?.map((data, i) => {
        return (
          <div key={i}>
            <div>{data?.pId?.title}</div>
            <p>quantity: {data?.qty}</p>
            <button onClick={() => increase(data?.pId._id, data?.qty)}>
              Increase
            </button>
            <button
              className="p-2 border cursor-pointer"
              onClick={() => deleteProduct(data._id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
