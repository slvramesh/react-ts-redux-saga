import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import ManageContact from "./ManageContact";

let container: any = null;
let store: any;
const mockStore = configureStore([]);
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  store = mockStore({});
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render a ManageContact", () => {
  act(() => {
    render(
      <Provider store={store}>
        <ManageContact />
      </Provider>,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"content\\">
      <div class=\\"contactForm\\">
        <div class=\\"addCon\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiButton-label\\">Add</span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
      </div>
      <div class=\\"contactList\\">
        <p>No records!</p>
      </div>
      <div></div>
    </div>"
  `);
});
