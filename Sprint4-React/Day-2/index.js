const parent = React.createElement(
  'div', 
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', { className: 'heading' }, "Welcome to ReactJS")
  )
);
//React.createElement("type of element",attributes for that element,content to be displayed inside the created element)

//React gave us bundler which take care all the above things and we can write code in JSX format
//npx create-react-app my-app for creating react app with all the configurations done by default

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
