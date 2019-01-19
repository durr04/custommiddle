import React from "react";
import renderer from 'react-test-renderer';
import Sum from "../app/sum.react";

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
    });

    it('should function exist',() =>{
        expect(10 + 10).toEqual(21);
    })
    it('function test',() =>{
        
        const component = renderer.create(
            <Sum msg="message">Message</Sum>,
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
        
    })
  }); 