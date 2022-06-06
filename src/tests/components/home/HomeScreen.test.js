import { render } from "@testing-library/react";
import { HomeScreen } from "../../../components/home/HomeScreen";

describe('test to home screen', () => {

  test('should show HomeScreen very good', () => {
    const wrapper = render(<HomeScreen />);
    expect(wrapper).toMatchSnapshot();
  })

})