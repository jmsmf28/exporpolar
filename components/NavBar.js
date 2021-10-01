import React from 'react';
import content from '../content';
import Search from './Search';

export default function NavBar() {
  return (
    <div
    /* style={{
      background: '#091c29',
    }} */

    >
      <div className="bg-gray-400 w-3/4 h-1 mx-auto"></div>
      <div className="flex items-center justify-between w-3/4 mx-auto py-2 text-white font-dosis">
        <h1 className="text-xl font-bold text-gray-800">
          {content.nav.logo}{' '}
          <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
        </h1>
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <span key={index} className="text-xs mr-4 text-gray-900">
                {link.text}
              </span>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-800 rounded-sm w-3/4 h-6 mx-auto flex items-center justify-between text-white font-dosis">
        <div>
          {content.nav.linksBottom.map((link, index) => {
            return (
              <span key={index} className="text-xs ml-4">
                {link.text}
              </span>
            );
          })}
        </div>
        <div className="text-xs mr-4">
          <Search />
        </div>
      </div>
    </div>
  );
}
