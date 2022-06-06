import { shallow } from "enzyme";
import { SearcherMeat } from "../../../components/meat/SearcherMeat";


describe('test to transport screen', () => { 

  test('should show to Transport component', () => { 

    const searchText = 'Informacion de la carne';

    const wrapper = shallow(<SearcherMeat />);

    const text = wrapper.find('h1').text();

    expect(text).toBe(searchText);
  })
})
