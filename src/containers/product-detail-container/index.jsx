import React from 'react';
import { getProduct } from '../../sdk/products';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/product-detail';

const ProductDetailsContainer = () => {
  const [data, setData] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    getProduct(id)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
        console.log(res); // Verificar si los datos se reciben correctamente
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Aquí puedes manejar el error de manera apropiada, por ejemplo, mostrando un mensaje al usuario.
      });
  }, [id]);

  console.log(id); // Verificar si el ID del producto se recibe correctamente

  return (
    <div>
      <ProductDetail data={data} /> {/* Asegurarse de que los datos se pasan al componente */}
    </div>
  );
};

export default ProductDetailsContainer;