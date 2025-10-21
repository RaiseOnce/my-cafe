import ProductCard from '../ProductCard/ProudctCard'
import styles from './ProductCards.module.scss'
import burgerImg from '../../assets/burger.jpg'

const products = [
  {
    id: 1,
    name: 'Бургер',
    weight: '200 г',
    price: 150,
    image: burgerImg,
    link: '/product/burger',
    count: 3,
  },
  {
    id: 2,
    name: 'Пицца',
    weight: '450 г',
    price: 300,
    image: burgerImg,
    bookmark: true,
  },
  {
    id: 3,
    name: 'Суши',
    weight: '120 г',
    price: 200,
    image: burgerImg,
  },
]

export default function ProductCards() {
  return (
    <div className={styles.productCards}>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}
