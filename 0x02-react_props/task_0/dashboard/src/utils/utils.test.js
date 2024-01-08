/** @jest-environment jsdom */
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'


describe('Util', () => {
  test('render full year', ()=> {
   expect(getFullYear()).toBe(2024)
  })
 
  test('conditionally render text', ()=> {
   expect(getFooterCopy(true)).toBe('Holberton School')
  })
 
  test('render some texts', () => {
   expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
  });
});