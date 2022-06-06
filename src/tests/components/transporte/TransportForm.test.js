import { shallow } from "enzyme";
import { Transport } from "../../../components/transporte/Transport";

describe('test to transport screen', () => { 

  test('should show to Transport component', () => { 

    const transportText = 'Transporte';

    const wrapper = shallow(<Transport />);

    const text = wrapper.find('h1').text();

    expect(text).toBe(transportText);
  })
})
