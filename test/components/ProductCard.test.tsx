import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';
describe('it', () => {
  it('renders without crashing', () => {
    const wrapperTest = renderer.create(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );

    expect(wrapperTest.toJSON()).toMatchSnapshot();
  });

  it('Debe incrementar el contador', () => {
    const wrapperTest = renderer.create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1, product1)}>Sumar</button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapperTest.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Debe incrementar el contador', () => {
    render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1, product1)}>Sumar</button>
          </>
        )}
      </ProductCard>
    );

    const button = screen.getByRole('button', { name: 'Sumar' });

    expect(button).toBeInTheDocument();

    const preCounter = screen.queryByText(1);

    expect(preCounter).not.toBeInTheDocument();

    fireEvent.click(button);

    const counter = screen.getByText(1);

    expect(counter).toBeInTheDocument();
  });

  //   it('debe de mostrar el componente con el nombre del producto', () => {
  //     const wrapperTest = renderer.create(
  //       <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
  //     );

  //     expect(wrapperTest.toJSON()).toMatchSnapshot();
  //   });
});
