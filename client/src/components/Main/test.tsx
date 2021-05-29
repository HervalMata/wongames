import { render, screen } from "@testing-library/react";

import Main from "./index";

describe('<Main />', () => {
  it('should render the heading', function () {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  });
})
