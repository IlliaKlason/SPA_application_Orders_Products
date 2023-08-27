import React from "react";
import { useCallback, useMemo, useState } from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import './OrdersPage.scss';

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Link, useParams } from "react-router-dom";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import * as ordersActions from "../../features/orders/ordersSlice";
import * as productsActions from "../../features/products/productsSlice";

import { Order } from "../../types/Order";
import { Currency } from "../../types/Currency";
import { Product } from "../../types/Products";

export const Orders = React.memo(() => {
  const [show, setShow] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const { orders } = useAppSelector(state => state.orders);
  const { products } = useAppSelector(state => state.products);
  const { orderId = 0 } = useParams();
  const dispatch = useAppDispatch();

  const activeOrder = useMemo(
    () => orders.find(order => order.id === +orderId), 
    [orders, orderId]);

  const activeProducts = useCallback(
    (id: number): Product[] => products.filter(product => product.order === id),
    [products]);

  const activeProductsPrice = useCallback((id: number, currency: Currency) => {
    const prices = activeProducts(id).map(product => product.price);
    const sum = prices.reduce((prev, cur) => {
      const oneValue = cur.find(onePrice => {
        if (onePrice.symbol === currency) {
          return onePrice.value;
        }
      })

      return oneValue ? oneValue.value + prev : prev;
    }, 0);

    return sum;
  }, [activeProducts]);

  const handleClose = () => {
    setShow(false);
    setSelectedOrder(null)
  }

  const handleRemove = () => {
    if (selectedOrder) {
      dispatch(ordersActions.remove(selectedOrder.id));
      dispatch(productsActions.remove(selectedOrder.id));
    }
    setShow(false);
    setSelectedOrder(null)
  }

  const handleDeleteButton = (order: Order) => {
    setShow(true);
    setSelectedOrder(order)
  }

  const handleDate = (date: string) => {
    const newDate = new Date(date);
    console.log(newDate.toLocaleDateString());
    const month = newDate.getMonth() < 9 
      ? `0${newDate.getMonth() + 1}` 
      : (newDate.getMonth() + 1);

    return `${month} / ${newDate.getFullYear()}`
  }

  return (
    <div className="d-flex py-5 orders">
      {!orders.length && <h2 className="px-5">There are no orders yet</h2>}

      <ListGroup as="ul" className="px-5 orders__order order">
        {orders.map(order => (
          <ListGroup.Item
            key={order.id}
            as="li"
            className="
              d-flex 
              justify-content-between 
              align-items-center 
              gap-3 
              mb-2 
              border 
              rounded
              order__group 
            "
          >
            <Link 
              to={`../orders/${order.id}`} 
              className="
                d-flex 
                justify-content-between 
                align-items-center 
                gap-3
                text-decoration-none
                order__link
              "
            >
              <div className="fw-bold">{order.title}</div>

              <div>
                <div className="fw-bold">{activeProducts(order.id).length}</div>
                {activeProducts(order.id).length > 1 ? 'products' : 'product'}
              </div>

              <div className="ms-2 me-auto">
                <div className="text-center">{handleDate(order.date)}</div>
                <div className="fw-bold">{new Date(order.date).toLocaleDateString()}</div>
              </div>

              <div className="ms-2 me-auto">
                {`${activeProductsPrice(order.id, Currency.USD)} ${Currency.USD}`}
                <div className="fw-bold">
                  {`${activeProductsPrice(order.id, Currency.UAH)} ${Currency.UAH}`}
                </div>
              </div>
            </Link>

            <CloseButton 
              onClick={() => handleDeleteButton(order)} 
              className="order__close-button opacity-100"
            />
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete the order?</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedOrder?.title}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleRemove}>
            Deleate
          </Button>
        </Modal.Footer>
      </Modal>

      {activeOrder && (
        <>
          <ProductsList />

          <Link to={"/orders"}>
            <CloseButton 
              className="
                close-button 
                rounded-circle 
                bg-white 
                opacity-100 
                p-2
                border
              " 
            />
          </Link>
        </>
      )}
    </div>
  )
})
