/**
 * Created by Jihann on 2015/9/28.
 */
class Button extends React.Component{

    //这里的就和普通的类一样，都是普通方法
    del(){
        alert('del');
    }

    render () {
        return (
            <form>
                <input type="button" onClick={() => alert('Hello React')} value="show"/><br/>
                <input type="button" onClick={this.del} value="del"/>
            </form>
        );
    }
}

React.render(<Button />, document.getElementById('comment'));