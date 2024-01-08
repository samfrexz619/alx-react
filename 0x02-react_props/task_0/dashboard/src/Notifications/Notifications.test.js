import { shallow } from 'enzyme'
import Notifications from './Notifications.js'


describe('Notification component', ()=> {
  it('should render Notification component without crashing', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.exists()).toBe(true)
  })

  it('should render list of items', ()=> {
    const wrapper = shallow(<Notifications  />)
    expect(wrapper.find('li')).toHaveLength(3)
  })

  it('should render div with App-header', ()=> {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find("p").text()).toEqual('Here is the list of notifications')
  })
})