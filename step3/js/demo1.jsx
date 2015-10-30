/**
 * Created by Jihann on 2015/9/28.
 */
class Person extends React.Component{

    constructor() {
        this.state = {
            count : 0
        };
    }

    update() {
        this.setState({
           count: ++ this.state.count
        });
    }

    render () {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
}

count = React.render(<Person name="Jihann"/>, document.getElementById('container'));
