import React from 'react';

export default React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    getDefaultProps: function() {

    },

    render: function() {
        return <div>Hello {this.props.name}!</div>;
    }

});
