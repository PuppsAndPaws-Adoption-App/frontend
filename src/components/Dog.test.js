// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from "react";
import Dog from "./Dog";
import renderer from "react-test-renderer";

describe("Dog and component", () => {
  //snapshot test
  test("renders Dog component as expected", () => {
    const dog = {
      name: "Cody",
      image: "/img/Cody.jpg",
      breed: "Breed: Boston Terrier",
      gender: "Sex: Male",
      age: "Age: Two years",
      size: "Weight: 10lbs",
      description: "Brown/Black/White",
      zipCode: "75115",
    };
    //render the component
    const component = renderer.create(<Dog key={dog.id} dog={dog} />);
    //convert to json
    const componentJSON = component.toJSON();
    //expect the json component to match the snapshot
    expect(componentJSON).toMatchSnapshot();
  });

  //behavior test
  test("Dog props passed as expected", () => {
    const dog = {
      name: "Cody",
      image: "/img/Cody.jpg",
      breed: "Breed: Boston Terrier",
      gender: "Sex: Male",
      age: "Age: Two years",
      size: "Weight: 10lbs",
      description: "Brown/Black/White",
      zipCode: "75115",
    };
    //render the component
    const component = renderer.create(<Dog key={dog.id} dog={dog} />);
    //convert to tree
    const componentT = component.toTree();
    //expect the props to match a provided string
    expect(componentT.props.dog.name).toBe("Cody");
  });
});
