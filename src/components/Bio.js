import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = ({ isBike }) => {
  return (
    <div className="flex mb-4">
      <div className="mr-2 mb-0 w-16 min-w-16 h-16 rounded-full overflow-hidden transform translate-z-0">
        {isBike ? (
          <StaticImage
            src="../assets/profile-pic-bike.jpg"
            alt="Profile pic"
            width={90}
            height={90}
          />
        ) : (
          <StaticImage
            src="../assets/profile-pic.jpg"
            alt="Profile pic"
            width={90}
            height={90}
          />
        )}
      </div>

      <p className="max-w-xs">
        Blog by{' '}
        <a
          href="https://mobile.twitter.com/jedr_blaszyk"
          className="text-blue-500 hover:underline"
        >
          Jedr Blaszyk
        </a>
        . Tech, cycling, photography & travelling.
      </p>
    </div>
  );
};

export default Bio;
