import React from 'react';
import { connect } from 'react-redux';

// import { saveComment } from '../actions/index';
import * as actions from '../actions/index';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { comment: ''};
    }

    handleChange(event) {
        this.setState({ comment: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="CommentBox">
                <textarea
                    onChange={ this.handleChange.bind(this) }
                    value={ this.state.comment }
                />
                <div>
                    <button action="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox);