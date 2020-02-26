import '../../carbon-components.min.css';
import '../../ni-carbon.css';

export default { title: 'Button' };

export const withText = () => '<button class="bx--btn bx--btn--primary">Hello World</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.classList.add('bx--btn', 'bx--btn--primary')
  button.innerText = '😀 😎 👍 💯';
  return button;
};