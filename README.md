# EMH-Product-Card

Este es un paquete de pruebas de despliegue en NPM


### Esteban Marin

```
  import { ProductCard, ProductImage, ProductTitle, ProductButtons} from 'emh-product-card'
```

```
  <ProductCard
    product={product}
    initialValues={{ count: 4, maxCount: 10 }}
  >
    {(args) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )}
  </ProductCard>
```