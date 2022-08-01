import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('it', () => {
  it('renders without crashing', () => {
    const wrapperTest = renderer.create(
      <ProductImage img="http://test-image.jpg" />
    );

    expect(wrapperTest.toJSON()).toMatchSnapshot();
  });

  it('debe de mostrar el componente con la imagen del producto', () => {
    const wrapperTest = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapperTest.toJSON()).toMatchSnapshot();
  });
});
