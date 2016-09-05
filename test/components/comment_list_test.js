import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentList, null,
            {comments: ['big cat', 'another comment']});
    });

    it('shows an li for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {
        expect(component.find('li')).to.contain('big cat');
        expect(component.find('li')).to.contain('another comment');
    });
});