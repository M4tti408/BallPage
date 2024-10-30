import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../utils/cart.slice";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : screen.width <= 800 ? (
        <>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image
                  className={styles.imageImage}
                  src={item.image}
                  height="90"
                  width="65"
                />
              </div>

              <p>{item.product}</p>

              <p>$ {item.price}</p>

              <p>{item.quantity}</p>

              <div className={styles.buttons}>
                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  style={{ borderRadius: "5px" }}
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  style={{ borderRadius: "5px" }}
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{ borderRadius: "5px" }}
                >
                  x
                </button>
              </div>

              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Total price: $ {getTotalPrice()}</h2>
        </>
      ) : (
        <>
          <div className={styles.kolumn}>
            {cart.map((item) => (
              <div className={styles.body}>
                <div className={styles.image}>
                  <Image
                    className={styles.imageImage}
                    src={item.image}
                    height="90"
                    width="65"
                  />
                </div>

                <p>{item.product}</p>

                <p>{item.quantity}</p>

                <div className={styles.buttons}>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    style={{ borderRadius: "5px" }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    style={{ borderRadius: "5px" }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    style={{ borderRadius: "5px" }}
                  >
                    x
                  </button>
                </div>

                <p>$ {item.quantity * item.price}</p>
              </div>
            ))}
          </div>

          <h2>Total price: $ {getTotalPrice()}</h2>
        </>
      )}
    </div>
  );
}
