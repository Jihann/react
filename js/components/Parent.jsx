/**
 * Created by Jihann on 2015/9/27.
 */

var Child = require('./Child.jsx');
var Parent = React.createClass({
    render : function() {
        return (
            <div>
                <div>Hello World</div>
                <Child />
            </div>
        )
    }
});

module.exports = Parent;