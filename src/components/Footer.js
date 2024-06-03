import React from 'react';
import { Link } from 'gatsby';

import { Twitter, GitHub, Linkedin, Instagram, Rss } from 'react-feather';
import Strava from '../assets/strava.inline.svg';
import Sitemap from '../assets/sitemap.inline.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer className="flex justify-between items-center w-full mx-auto max-w-content-md py-8 px-5">
        <div className="flex space-x-6">
          <a
            href="https://mobile.twitter.com/jedr_blaszyk"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-none text-normal hover:text-link"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com/jedrazb"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-none text-normal hover:text-link"
          >
            <GitHub />
          </a>
          <a
            href="https://www.strava.com/athletes/jedr_blaszyk"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-none text-normal hover:text-link"
          >
            <Strava />
          </a>
          <a
            href="https://www.linkedin.com/in/jedrzej-blaszyk/"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-none text-normal hover:text-link"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.instagram.com/cycling.jedr/"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-none text-normal hover:text-link"
          >
            <Instagram />
          </a>
        </div>
        <div className="flex space-x-6">
          <Link
            to="/sitemap-index.xml"
            className="shadow-none text-normal hover:text-link"
          >
            <Sitemap />
          </Link>
          <Link
            href="/rss.xml"
            rel="noopener noreferrer"
            className="shadow-none text-normal hover:text-link"
          >
            <Rss />
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
