import { shallow } from "enzyme";
import { Welcome } from "../../../components/meat/Welcome";

describe('test to home screen', () => { 

  test('should show to Welcome component', () => { 

    const welcome = 'Bienvenido a InfoMeat!!';

    const wrapper = shallow(<Welcome />);

    const text = wrapper.find('span').text();

    expect(text).toBe(welcome);
  })
})
