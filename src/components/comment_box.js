import React from 'react';

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { comment: ''};
    }

    handleChange(event) {
        this.setState({ comment: event.target.value });
    }

    render() {
        return (
            <div className="CommentBox">
                <textarea
                    onChange={ this.handleChange.bind(this) }
                    value={ this.state.comment }
                />
                <button>Submit</button>
            </div>
        )
    }
}