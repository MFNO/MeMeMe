import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import { test, expect } from "vitest";

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
}

test("App renders fully", () => {
  const appComponent = toJson(renderer.create(<App />));
  expect(appComponent.length).toBe(2);
  expect(appComponent[0].children[0].children[0].children[0]).toBe("Socials");
});
