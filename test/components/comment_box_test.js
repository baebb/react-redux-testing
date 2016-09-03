import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    let component;

    beforeEach (() => {
        component = renderComponent(CommentBox);
    });

    it('has correct class name', () => {
        expect(component).to.have.class('CommentBox');
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering text', () => {
        beforeEach (() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows text that is entered', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('clears text on submission', () => {

        });
    });
});