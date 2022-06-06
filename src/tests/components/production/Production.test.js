import { shallow } from "enzyme";
import { Production } from "../../../components/production/Production";

describe('test to Production', () => { 

  test('should show to Production component', () => { 

    const prodText = 'Elaboracion de la carne';

    const wrapper = shallow(<Production />);

    const text = wrapper.find('h1').text();

    expect(text).toBe(prodText);
  })
})