import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe("Footer component", () => {

    //snapshot test
    test('renders Footer component as expected', () => {
    //render the component
    const component = renderer.create(<Footer/>)
    //convert to json
    const componentJSON = component.toJSON()
    //expect the json component to match the snapshot
    expect(componentJSON).toMatchSnapshot();
    })

    //behavior test
    test('Footer props passed as expected', () => {
        //render the component
        const component = renderer.create(<Footer test={'test'}/>) 
        //convert to tree
        const componentT = component.toTree()
        //expect the props to match a provided string
        expect(componentT.props.test).toBe('test')  
     })
   
})