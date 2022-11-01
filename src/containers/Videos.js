import Product from '../components/Product'
import { useState, useEffect } from 'react'
import { data } from '../utils/data'
import { customFetch } from '../utils/customFetch'

const Videos = () => {
  const [datos, setDatos] = useState([])

  const deleteVideo = (id) => {
    let nuevosDatos = datos.filter(item => item.id != id)
    setDatos(nuevosDatos)
  }

  // componentDidMount
  useEffect(() => {
    // customFetch(2000, data)
    //   .then(response => setDatos(response))
    //   .catch(err => console.log(err))

    fetch("https://api.mercadolibre.com/sites/MLA/search?q=telefonos")
      .then(response => response.json())
      .then(response => setDatos(response.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
    {
      datos.map(item => (
        <Product
        key={item.id}
        title={item.title}
        price={item.price}
        stock={item.available_quantity}
        thumbnail={item.thumbnail}
        deleteVideo={() => deleteVideo(item.id)} />
      ))
    }
    </>
  )
}

export default Videos;