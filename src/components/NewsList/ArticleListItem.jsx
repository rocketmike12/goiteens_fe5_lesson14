import { Component } from "react";

import styles from "./ArticleList.module.scss";

export class ArticleListItem extends Component {
	render() {
		return (
			<>
				<li className={styles["article-list__item"]}>
					<p className={styles["article-list__date"]}>{new Date(this.props.date).toLocaleDateString("en-us")}</p>
					<p className={styles["article-list__author"]}>
						by <i>{this.props.author}</i>
					</p>
					<p className={styles["article-list__title"]}>{this.props.title}</p>
					<p className={styles["article-list__url"]}>
						<a href={this.props.url}>{this.props.url.length >= 30 ? this.props.url.slice(0, 27) + "..." : this.props.url}</a>
					</p>
					<p className={styles["article-list__points"]}>+{this.props.points}</p>
				</li>
			</>
		);
	}
}
