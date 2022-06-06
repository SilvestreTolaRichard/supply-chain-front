import { shallow } from "enzyme";
import { Lot } from "../../../components/lot/Lot";

describe('test to Lot', () => {

  test('should show to Lot component', () => { 

    const lotText = 'Lotes';

    const wrapper = shallow(<Lot />);

    const text = wrapper.find('h1').text();

    expect(text).toBe(lotText);
  })
})
