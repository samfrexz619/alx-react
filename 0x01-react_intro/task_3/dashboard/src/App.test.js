import { shallow } from 'enzyme'
import App from './App'


describe('App', () => {
  it('should render App component without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.exists()).toBe(true)
  })

  it('should render div with App-header', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-header')).toHaveLength(1)
  })

  it('should render div with App-body', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-body')).toHaveLength(1)
  })

  it('should render div with App-footer', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-footer')).toHaveLength(1)
  })
})