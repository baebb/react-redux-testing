import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';

//set up testing enviroment to run like a browser in command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);


//build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers)}>
            <ComponentClass />
        </Provider>
    );

    return $(ReactDOM.findDOMNode(componentInstance)); //produces HTML of element
}


//build help for simulating events


//set up chai-jquery

export {renderComponent, expect}