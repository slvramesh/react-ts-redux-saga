import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import App from "./App";

const mockStore = configureStore([]);

describe("App Component ->", () => {
  let store: any;
  let component: any;

  let container: any = null;
  beforeEach(() => {
    store = mockStore({});

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );

    container = document.createElement("div");
    document.body.appendChild(container);
  });

  it("should render", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should render a App", () => {
    act(() => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
        container
      );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"MuiContainer-root MuiContainer-maxWidthLg\\">
        <div class=\\"App\\">
          <div class=\\"content\\">
            <div class=\\"contactForm\\">
              <div class=\\"addCon\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiButton-label\\">Add</span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
            </div>
            <div class=\\"contactList\\">
              <p>No records!</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>"
    `);
  });
});

//import React from 'react';
// import { render } from '@testing-library/react';
// import { unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
//import ShallowRenderer from 'react-test-renderer'

// import App from './App';
// import ManageContact from './contact/ManageContact';
// import Container from '@material-ui/core/Container';

// // test('renders learn react link', () => {
// //   const { getByText } = render(<App />);
// //   const linkElement = getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// let container: any = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it('should render correctly with title and description', () => {
//   const wrapper = ShallowRenderer(
//     <App />
//   );

//   expect(toJson(wrapper)).toMatchSnapshot();
// });

// it("renders with or without a name", () => {
//   act(() => {
//     render(<App />, container);
//   });
//   expect(container.textContent).toBe("Hey, stranger");

// });

// import * as ShallowRenderer from 'react-test-renderer/shallow';

// // in your test:
// const renderer = ShallowRenderer.createRenderer();
// renderer.render(<App />);
// const result = renderer.getRenderOutput();

//expect(result.type).toBe('div');
// expect(result.props.children).toEqual([
//   <Container maxWidth="lg">
//     <div className="App">
//       <ManageContact />
//     </div>
//   </Container>
// ]);

// it("renders with or without a name", () => {
//   act(() => {
//     render(<App />, container);
//   });
//   expect(container.textContent).toBe("Hey, stranger");

// });

// import ReactDOM from "react-dom";

// import "./App.scss";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
