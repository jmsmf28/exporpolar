import React from 'react';
import content from '../content';

export default function Search() {
    return (
        <div>
            <input type="text" className="rounded-lg h-3 w-20 placeholder-gray-900 font-bold pl-2 text-xxs ml-3" placeholder={content.search.placeholder} name="search" />
        </div>
    )
}

