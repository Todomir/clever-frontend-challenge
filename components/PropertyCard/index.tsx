import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Suspense } from 'react';

import { Location, Property } from '../../model/property.model';
import { Fallback as BadgeFallback } from '../atoms/Badge';
import Skeleton from '../atoms/Skeleton';
import styles from './style.module.css';

const Badge = dynamic(() => import('../atoms/Badge'), { suspense: true });

export interface PropertyCardProps {
  property: Property;
  location: Location;
}

export function Fallback() {
  return (
    <div className={styles['property-card']}>
      <div className={styles['property-card__image']}>
        <Skeleton height="100%" width="100%" />
      </div>
      <div className={styles['property-card__body']}>
        <div className={styles['property-card__header']}>
          <div className={styles['property-card__header__title']}>
            <Skeleton width="80%" />
            <BadgeFallback />
          </div>
          <div
            className={styles['property-card__header__subtitle']}
            style={{ gap: '4px', marginBottom: '8px' }}>
            <Skeleton width={70} />
            <Skeleton width={200} />
          </div>
        </div>
        <section className={styles['property-card__address']}>
          <Skeleton width={150} />
          <Skeleton width={60} />
        </section>
        <section className={styles['property-card__overview']}>
          <Skeleton height={10} width="100%" />
          <Skeleton height={10} width="100%" />
          <Skeleton height={10} width="80%" />
        </section>
      </div>
    </div>
  );
}

export default function PropertyCard({
  property,
  location,
}: PropertyCardProps) {
  const [firstImage] = property.images;
  return (
    <article className={styles['property-card']}>
      <picture className={styles['property-card__image']}>
        <Image
          alt={property.name}
          layout="fill"
          objectFit="cover"
          src={`https://${firstImage.prefix}${firstImage.suffix}`}
        />
      </picture>
      <section className={styles['property-card__body']}>
        <header className={styles['property-card__header']}>
          <div className={styles['property-card__header__title']}>
            <h2>{property.name}</h2>
            <Suspense fallback={<BadgeFallback />}>
              {property.isFeatured && <Badge>Featured</Badge>}
            </Suspense>
          </div>
          <h3 className={styles['property-card__header__subtitle']}>
            {property.overallRating && (
              <span>{property.overallRating.overall}/10</span>
            )}
            {property.lowestPricePerNight.value}{' '}
            {property.lowestPricePerNight.currency}/night
          </h3>
        </header>
        <section className={styles['property-card__address']}>
          <p>
            {property.address1}
            {property.address2 && ` - ${property.address2}`}
          </p>
          <p>
            {location.city.name} | {location.city.country}
          </p>
        </section>
        <section className={styles['property-card__overview']}>
          <p>{property.overview}</p>
        </section>
      </section>
    </article>
  );
}
