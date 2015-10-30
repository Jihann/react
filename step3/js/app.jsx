/**
 * Created by Jihann on 2015/9/28.
 */

class Comment extends React.Component {
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

class CommentForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault(); //阻止浏览器默认行为
        const author = this.refs.author.getDOMNode().value.trim();
        const content = this.refs.content.getDOMNode().value.trim();
        const form = this.refs.form.getDOMNode();
        console.log('----- author : ' + author + ' , content : ' + content);

        this.props.onSubmit({author : author, content : content});
        form.reset();
    }

    render () {
        return (
            <form className="comment-form" ref="form" onSubmit={e => {this.handleSubmit(e)}}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Input your content" ref="content" />
                <input type="submit"  value="add"/>
            </form>
        )
    };
}

class CommentList extends React.Component {
    render () {
        var comments = this.props.comments.map(function(comment, index) {
            return (
                <Comment key={'comment-' + index} author={comment.author}>
                    {comment.content}
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

class CommentBox extends React.Component {
    constructor(props) {
        //super(props);
        this.state = {
          comments : props.comments || []
        };
    }

    loadDataFromServer() {

        jQuery.ajax({
            type : "GET",
            url : this.props.url,
            dataType : "json",
            success : (comments) => {
                //this在这里指的是jquery当前返回的对象，作用域为success方法
                //所以需要重新指向到react的this对象中，用bind绑定
                this.setState(
                    {
                        comments : comments
                    }
                );
            }
        });
    }

    componentDidMount() {
        console.log('------------- ready dom --------------');
        this.loadDataFromServer();
    }

    handleNewComment(comment) {

        //现在客户端渲染，假设成功，请求后台，返回的结果其实是一样的
        const comments = this.state.comments;
        const newComments = comments.concat([comment]);
        this.setState({comments : newComments});

        /*jQuery.ajax({
            type : "POST",
            url : this.props.url,
            dataType : "json",
            data : comment,
            success : comments => {
                this.setState(
                    {
                        comments : comments
                    }
                )
            },
            error : (xhr, status, err) => {
                console.log(err.toString());
                this.setState({comments : comments});
            }
        });*/
        console.log('---------------------');
    }

    render () {
        return (
            <div className="comment-box">
                <h1>Comments</h1>
                <CommentList comments={this.state.comments}/>
                <CommentForm onSubmit={(comment) => this.handleNewComment(comment)}/>
            </div>
        );
    }
}
box = React.render(<CommentBox url="json/comments.json"/>, document.getElementById('comment'));