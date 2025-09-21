import { Component } from "react";

import { ArticleListItem } from "./ArticleListItem";

import styles from "./ArticleList.module.scss";

export class ArticleList extends Component {
	render() {
		return (
			<>
				<ul className={styles["article-list"]}>
					{this.props.articles.map((article) => (
						<ArticleListItem date={article.created_at} author={article.author} title={article.title} url={article.url} points={article.points} />
					))}
				</ul>
			</>
		);
	}
}
