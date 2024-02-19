function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  Object.keys(reactElement?.props).forEach((property) => {
    domElement.setAttribute(property, reactElement?.props[property]);
  });

  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit google',
};

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);
