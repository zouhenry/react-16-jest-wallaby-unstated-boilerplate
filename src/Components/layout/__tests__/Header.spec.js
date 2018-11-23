import React from 'react';
import Header from '../Header';
import {render,mount, shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from "unstated";

configure({ adapter: new Adapter() });
describe('Header', function () {
    it('should match snapshot', ()=>{
        const actual = render(<Provider><Header classes={{}}></Header></Provider>);
        expect(toJson(actual)).toMatchSnapshot();
    })
});
