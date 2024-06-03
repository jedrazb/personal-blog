import React from 'react';
import { GatsbyImage, getImage, getSrc, getSrcSet } from 'gatsby-plugin-image';
import classnames from 'classnames';

import { selectThumbnailFromSrcSet } from '../utils/imageUtils';

import '@fancyapps/ui/dist/fancybox.css';

const ImageComponent = ({
  image,
  alt,
  isRow = false,
  noPadding = false,
  description,
}) => {
  return (
    <figure
      className={classnames(
        'block',
        'max-w-screen-lg',
        'focus:outline-none focus:shadow-none select-none',
        {
          'mb-1.5': isRow,
          'mb-0': noPadding,
          'mb-6': !isRow && !noPadding,
        }
      )}
    >
      <a
        href={getSrc(image)}
        data-fancybox="gallery"
        data-caption={description}
        data-thumb={selectThumbnailFromSrcSet(getSrcSet(image))}
        className="no-underline text-transparent"
        itemType="https://schema.org/ImageObject"
        itemScope=""
      >
        <GatsbyImage
          image={getImage(image)}
          itemProp="contentUrl"
          alt={alt ? alt : description ? description : getSrc(image)}
        />
      </a>
    </figure>
  );
};

export default ImageComponent;
