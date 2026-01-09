import styles from './page.module.scss'
import { notFound } from 'next/navigation'
import { prisma } from '../../../../prisma/prisma-client'
import Image from 'next/image'
import { Button } from '@/ui/Button/Button'
import { Minus } from '@/assets/Minus'
import { Plus } from '@/assets/Plus'

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const productId = Number(id)

  if (!productId) notFound()

  const product = await prisma.product.findUnique({
    where: { id: productId },
  })

  if (!product) notFound()

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.left}>
          <Image
            className={styles.img}
            alt={product.name}
            src={product.imageUrl}
            width={520}
            height={520}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <h2 className={styles.title}>Название</h2>
            <div className={styles.weight}>300 г</div>
            <h3 className={styles.subtitle}>Описание</h3>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              optio dolorem praesentium placeat! Et, delectus porro molestiae
              aut quos exercitationem, tempore vero vel temporibus est repellat
              veniam maxime saepe perferendis?
            </div>
            <h3 className={styles.subtitle}>Состав</h3>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              optio dolorem praesentium placeat!
            </div>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.itemValue}>19</div>
                <div className={styles.itemLabel}>Белки</div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemValue}>11</div>
                <div className={styles.itemLabel}>Жиры</div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemValue}>15</div>
                <div className={styles.itemLabel}>Углеводы</div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemValue}>214</div>
                <div className={styles.itemLabel}>Ккал</div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.price}>400 TMT</div>

            <Button className={styles.btn}>
              {/* <span className={styles.minus}>
                <Minus />
              </span> */}
              <span>Добавить</span>
              {/* <span className={styles.plus}>
                <Plus />
              </span> */}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
