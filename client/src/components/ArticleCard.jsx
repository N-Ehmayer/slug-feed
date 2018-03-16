import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class ArticleCard extends Component {

    render() {

        const articles = this.props.articles.map((article) => {
          return (
            <div>
              <Card>
                <CardImage className="img-fluid" src={article.hero_img_url} />
                <CardBody>
                  <CardTitle>{article.title}</CardTitle>
                  <CardText>{article.tagline}</CardText>
                  <Link to={`/articles/${article.id}`}>Read more ..</Link>
                </CardBody>
              </Card>
            </div>
          )
        })

        return (
          <div>
            {articles}
          </div>
        );
    }
}

export default ArticleCard
