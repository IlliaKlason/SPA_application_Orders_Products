import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { setProductType } from '../../features/productType/productTypeSlice';
import { ProductType } from '../../types/ProductType';

export const ProductsPage = () => {
  const productType = useAppSelector(state => state.productType);
  const { products } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  return (
    <>
      {!products.length 
        ? (<h2 className="py-5 mx-5">There are no products yet</h2>) 
        : (
          <div className="d-flex flex-column py-5 mx-5">
            <DropdownButton
              className='mb-5'
              key='end'
              id={`dropdown-button-drop-end`}
              drop='end'
              variant="success"
              title={productType}
            >
              <Dropdown.Item onClick={() => dispatch(setProductType(ProductType.ALL))}>
                {ProductType.ALL}
              </Dropdown.Item>

              <Dropdown.Item onClick={() => dispatch(setProductType(ProductType.MONITORS))}>
                {ProductType.MONITORS}
              </Dropdown.Item>

              <Dropdown.Item onClick={() => dispatch(setProductType(ProductType.LAPTOPS))}>
                {ProductType.LAPTOPS}
              </Dropdown.Item>

              <Dropdown.Item onClick={() => dispatch(setProductType(ProductType.TABLETS))}>
                {ProductType.TABLETS}
              </Dropdown.Item>
              
              <Dropdown.Item onClick={() => dispatch(setProductType(ProductType.CABLES))}>
                {ProductType.CABLES}
              </Dropdown.Item>
            </DropdownButton>

            <ProductsList />
          </div>
          )
      }
    </>
  );
}
