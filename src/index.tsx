import {Component, ReactDOM} from 'react';

class FeedListing extends Component<any, any> {
	public render(){
		return <div>I list content</div>;
	}
}

ReactDOM.render(<FeedListing/>, document.getElementById("pocketReaderApp"));