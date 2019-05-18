import React from 'react';

import {Api} from './index';

describe('character api call',()=>{
    it ('should load single character data', () => {
        const api = new Api();
        return api.character('character',2)
            .then(
                data => {
                    expect(data).toBeDefined();
                    expect(data.id).toEqual(2);
                    expect(data.name).toEqual('Morty Smith')
                }
            )
    })
});
