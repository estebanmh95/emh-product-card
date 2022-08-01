import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('it', () => {
  it('renders without crashing', () => {
    const wrapperTest = renderer.create(
      <ProductTitle title="custom title" className="custom class" />
    );

    expect(wrapperTest.toJSON()).toMatchSnapshot();
  });

  it('debe de mostrar el componente con el nombre del producto', () => {
    const wrapperTest = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapperTest.toJSON()).toMatchSnapshot();
  });
});
