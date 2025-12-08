import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { createOrder, payOrder } from "../../actions/OrderAction";
import { useHistory } from "react-router-dom";
import VnPay from "./VnPay";
import MoMo from "./MoMo";
import { BASE_URL } from '../../constants/UserConstant';

export default function Payment(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [sdkReady, setSdkReady] = useState(false);
  const [choosePay, setChoosePay] = useState({
    payLater: false,
    payOnline: false,
  });

const { chooseProvince, chooseDistrict, chooseWard, getValues } = props;



  const { order } = useSelector((state) => state.orderInfo);


  const payLater = () => {
    setChoosePay({ payOnline: false, payLater: true });
  };

  const payOnline = () => {
    setChoosePay({ payLater: false, payOnline: true });
  };

  const successPaymentHandler = async (paymentResult) => {
    const OrderPaid = {
      ...order,
      status: "pendding",
      paymentMethod: "PayPal",
      paymentResult: {...paymentResult},
    };
    await dispatch(createOrder(OrderPaid));
    history.push("/orderSuccess");
  };

  const SendOrderPayLater = async () => {
    const OrderPaid = {
      ...order,
      status: "pendding",
      paymentMethod: "payLater",
    };

    await dispatch(createOrder(OrderPaid))
    history.push("/orderSuccess");
  };

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get(
        `${BASE_URL}/api/config/paypal`
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
  };
    addPayPalScript();
  }, []);
  return (
    <div className="choose-pay">
      <h4>CHỌN PHƯƠNG THỨC THANH TOÁN </h4>
      <div className="choose">
        <button
          type="submit"
          className={choosePay.payLater ? "active" : ""}
          onClick={() => payLater()}
        >
          Thanh toán khi nhận hàng
        </button>
        <button
          type="submit"
          className={choosePay.payOnline ? "active" : ""}
          onClick={() => payOnline()}
        >
          Thanh toán Online
        </button>
      </div>
      {choosePay.payLater ? (
        <div className="customer-order">
          <button onClick={SendOrderPayLater}>Đặt Hàng</button>
        </div>
      ) : (
        ""
      )}
      {choosePay.payOnline ? (
        <div className="online-payment-methods">
          <h5 style={{marginTop: '20px', marginBottom: '10px', color: '#333'}}>Chọn phương thức thanh toán online:</h5>
          
          {/* MoMo Payment */}
          <MoMo 
            chooseProvince={chooseProvince}
            chooseDistrict={chooseDistrict}
            chooseWard={chooseWard}
            getValues={getValues}
          />

          {/* VNPay Payment */}
          <VnPay 
            chooseProvince={chooseProvince}
            chooseDistrict={chooseDistrict}
            chooseWard={chooseWard}
            getValues={getValues}
          />

          {/* PayPal Payment */}
          <div style={{marginTop: '15px'}}>
            <p style={{fontSize: '14px', color: '#666', marginBottom: '10px'}}>
              Hoặc thanh toán qua PayPal:
            </p>
            <PayPalButton
              className="paypal-btn"
              style={{ layout: 'horizontal', tagline: false }}
              amount={(order?.totalPrice / 25000).toFixed(2)}
              currency="USD"
              onSuccess={successPaymentHandler}
            />
          </div>
        </div>
      ) : (
        ""
      )}

    </div>
  );
}
