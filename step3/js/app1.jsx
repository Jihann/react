/**
 * Created by Jihann on 2015/9/28.
 */

class Comment extends React.Component{
    render() {
        return (
            <div>
                <div className="comment-body">
                    {this.props.children}
                </div>
                <div className="comment-author">
                    - {this.props.author}
                </div>
            </div>
        )
    }
}

class CommentForm extends React.Component{
    render () {
        return (
            <div className="comment-form">CommentForm</div>
        )
    };
}

class CommentList extends React.Component{
    render () {
        var comments = this.props.comments.map(function(comment, index) {
            return (
                <Comment key={'comment-' + index} author={comment.author}>{
                    comment.content}
                </Comment>
            )
        });
        return (
            <div className="comment-list">
                {comments}
            </div>
        )
    };
}

//渲染dom结构会重新渲染整个,利用React的this.state属性，渲染发生变化的dom
class CommentBox extends React.Component{
    constructor(props) {
        //super(props);
        this.state = {
          comments : props.comments || []
        };
    }

    //相当于jquery api的domReady方法
    componentDidMount() {
        console.log('------------- ready dom --------------');
    }

    render () {
        return (
            <div className="comment-box">
                <h1>Comments</h1>
                <CommentList comments={this.state.comments}/>
                <CommentForm />
            </div>
        );
    }
}
var comments = [
    {author : "Jihann", content : "this my coment"}
];
box = React.render(<CommentBox comments={comments}/>, document.getElementById('comment'));