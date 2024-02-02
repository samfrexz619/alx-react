/** @jest-environment jsdom */
import React from 'react'
import { uiReducer } from './uiReducer';



describe('uiReducer', ()=> {
  it('initial state', function () {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });
})
