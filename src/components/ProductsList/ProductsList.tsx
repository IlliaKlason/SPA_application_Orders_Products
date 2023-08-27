import React from "react";
import { useCallback, useMemo } from "react";
import ListGroup from "react-bootstrap/esm/ListGroup"
import { useAppSelector } from "../../app/hooks"
import { useParams } from "react-router-dom";
import { ProductType } from "../../types/ProductType";

export const ProductsList = React.memo(() => {
  const { orders } = useAppSelector(state => state.orders);
  const { products } = useAppSelector(state => state.products);
  const productType = useAppSelector(state => state.productType);
  const { orderId = 0 } = useParams();

  const findOrder = useCallback(
    (id: number) => orders.find(order => order.id === id)?.title, 
    [orders]);

  const productsToShow = useMemo(() => {
    if (orderId) {
      return products.filter(product => product.order === +orderId);
    } else if (productType === ProductType.ALL) {
      return products;
    }
    else {
      return products.filter(product => product.type === productType);
    }
  }, [orderId, products, productType]);

  return (
    <ListGroup as="ul">
      {productsToShow.map(({ id, title, type, guarantee, price, order }) => (
        <ListGroup.Item
          key={id}
          as="li"
          className="d-flex justify-content-between align-items-center gap-3"
        >
          <div className="fw-bold">{title}</div>

          {type}

          <div>
            <div className="fw-bold">{new Date(guarantee.start).toLocaleDateString()}</div>
            <div className="fw-bold">{new Date(guarantee.end).toLocaleDateString()}</div>
          </div>

          <div>
            {price.map(({ symbol, value }) =>
              <div>{`${value} ${symbol}`}</div>
            )}
          </div>

          <div className="fw-bold">{findOrder(order)}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
})