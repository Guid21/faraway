import { render } from '@testing-library/react';
import { Field } from './Field';

describe('Field', () => {
  it('renders correctly', () => {
    const { container } = render(<Field title="title">content</Field>);

    expect(container).toMatchSnapshot();
  });
});
