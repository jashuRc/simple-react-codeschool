class StoryBox extends React.Component {
	/*render() {
		return(<div> Hello World !!! </div>);
	}*/

	render() {
		
		//Date object
		const now = new Date();
		const topicList = ['HTML', 'JavaScript', 'React'];

	
		/*
		return React.createElement("div", null,
			React.createElement("h3", null, "Stories App"),
			React.createElement("p", { className: "lead" }, "Current Time ", now.toTimeString())
			); */

		return (
			<ul>
				{topicList.map(topic => <li>{topic}</li>)}
			</ul>
		)	
	}
}

class NewComponent extends React.Component {
	render() {
		return (
			<CommentBox />		
		);	
	}
}

class Comment extends React.Component {
	render() {
		return(
			<div className="comment">
				<p className="comment-header">{this.props.author}</p>
				<p className="comment-body">
				{this.props.body}
				</p>
				<div className="comment-footer">
					<a href="#" className="comment-footer-delete"> Delete comment </a>
				</div>
			</div>		
		);
	}
}

class CommentBox extends React.Component {
	constructor() {
		super();

		this.state = {
			showComments: false
		};
	}
	_getComments() {
		const commnetList = [
			{ id: 1, author: 'Morgon McCirciut', body: 'Great Picture !'},
			{ id: 2, author: 'Bending Bender', body: 'Excellent stuff'}
		];
		return commnetList.map((comment) => {
			return (
			<Comment
				author={comment.author} body={comment.body} key={comment.id} />
			);
		})					
	}

	_getCommentsTitle(commentCount) {
		if (commentCount === 0) {
			return 'No comments yet';
		} else if (commentCount === 1) {
			return '1 comment';
		} else {
			return `${commentCount} comments`;
		}
	}
	_handleClick() {
		this.setState({
			showComments: !this.state.showComments
		});
	}
	render() {
		const comments = this._getComments();
		
		let commentNodes;
		if (this.state.showComments) {
			commentNodes = <div className="comment-list">{comments}</div>;
		}
		
		let buttonText = "Show Comments";

		if (this.state.showComments) {
			buttonText = "Hide comments";
		}
		
		return(
			
			<div className="comment-box">
				<h3>Comments</h3>
				<button onClick={this._handleClick.bind(this)}>{buttonText}</button>
				<h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4> 			
					{commentNodes}
			</div>
		)
	}
}

ReactDOM.render(
	<NewComponent />, document.getElementById('story-app')
);
