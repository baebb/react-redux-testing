import React from 'react';
import {connect} from 'react-redux';

const CommentList = (props) => {
// class CommentList extends React.Component {
    const list = props.comments.map((comment,i) => <li key={i}>{comment}</li>);
    // renderComments(comment) {
    //     return (
    //         <li className="comment" key={comment}>
    //             {comment}
    //         </li>
    //     )
    // }

    // render() {
    return (
        <ul className="CommentList">
            {/*{this.props.comments.map(comment => this.renderComments(comment))}*/}
            {list}
        </ul>
    );
}

function mapStateToProps(state) {
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentList);