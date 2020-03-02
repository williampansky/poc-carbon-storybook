import { document } from 'global';
import { withActions } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import {
  array,
  boolean,
  button,
  color,
  date,
  select,
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';

import '../../carbon-components.min.css';
import '../../ni-carbon.css';
import htmlButton from './button.html';
import mdx from './button.mdx';

export const withText = () => htmlButton;

export const inaccessible = () => {
  return (
    `<button
      class="bx--btn bx--btn--primary"
      style="background-color:#6aa239; color:white;"
    >
        Inaccessible button
    </button>`
  )
};

export const Simple = () => {
  const name = text('Name', 'John Doe');
  const age = number('Age', 44);
  const content = `I am ${name} and I'm ${age} years old.`;
  return `<button class="bx--btn bx--btn--primary">${content}</div>`;
};

export default {
  title: 'Button',
  decorators: [withA11y, withActions('mouseover', 'click .bx--btn'), withKnobs],
  parameters: {
    docs: {
      page: mdx
    }
  }
};

