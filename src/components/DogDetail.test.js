import React from "react";
import DogList from "./DogList";
import renderer from "react-test-renderer";
//behavior test
test("Provide Dog list as expected", () => {
  //render the component
  const component = renderer.create(<DogList test={"test"} />);
  //convert to tree
  const componentT = component.toTree();
  //expect the props to match a provided string
  expect(componentT.props.test).toBe("test");
});
