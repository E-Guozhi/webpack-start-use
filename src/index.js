import _ from 'lodash';
import printMe from './print';

function component () {
  const ele = document.createElement('div');
  const btn = document.createElement('buttom');
  ele.innerHTML = _.join(['Hello1', 'webpack', '岂能长少年'], ' ');
  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  ele.appendChild(btn)
  return ele;
}
document.body.appendChild(component())