import { Component } from "react";

import axios from "axios";

import { ArticleList } from "./components/NewsList/ArticleList";

import styles from "./App.module.scss";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1/";

class App extends Component {
	constructor() {
		super();
		this.state = { articles: [] };
	}

	async componentDidMount() {
		let res = await axios.get("/search?query=hacking");

		this.setState({ articles: res.data.hits });
	}

	render() {
		console.log(this.state);

		return (
			<>
				<div className={styles["container"]}>
					<ArticleList articles={this.state.articles} />
				</div>
			</>
		);
	}
}

export default App;
