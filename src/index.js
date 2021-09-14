import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function render(props) {
  console.log('props',props);
  
  props.onGlobalStateChange(
    (state, prev) => {
      console.log('child-react onGlobalStateChange', state, prev)
      setTimeout(() => {
        console.log('5s之后更改状态');
        props.setGlobalState({
          user: 'ssssssssssssss',
        });
      }, 5000);
  }, true
)
  const { container } = props;
  ReactDOM.render(<App data={props}/>, container ? container.querySelector('#child-react') : document.querySelector('#child-react'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react17] react app bootstraped');
}

export async function mount(props) {
  console.log('[react17] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#child-react') : document.querySelector('#child-react'));
}
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
