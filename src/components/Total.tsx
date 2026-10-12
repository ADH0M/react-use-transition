import React from "react";

interface Props {
  isPending: boolean;
  quantity: number;
}

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Total: React.FC<Props> = ({ isPending, quantity }) => {
  if (isPending) {
    return (
      <div className="total-box loading">
        <div className="skeleton-text"></div>
        <span>جاري حساب السعر...</span>
      </div>
    );
  }
  
  return (
    <div className="total-box success">
      <span>الإجمالي:</span>
      <strong>{intl.format(quantity * 9999)}</strong>
    </div>
  );
};

export default Total;