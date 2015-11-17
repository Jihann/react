
// this.props获取属性
var ContentMode = React.createClass({
   render : function() {
        return (
            <div className="ContentMode">
                <div class="contents">{this.props.contents}</div>
            {this.props.children}
            </div>
        )
   }
});
var Page = React.createClass({
   render : function() {
       return (
           <div className="homepage">
                <ContentMode contents="logen">first</ContentMode>
                <ContentMode contents="logen2">second</ContentMode>
           </div>
       )
   }
});
React.render(
  React.createElement(Page, null), document.getElementById("content")
);

