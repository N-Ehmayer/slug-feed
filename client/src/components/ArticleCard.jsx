import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class ArticleCard extends Component {

    render() {

        const articles = this.props.articles.map((article) => {

          return (
            <Card className="col-5 mx-auto">
            <div className="view-card">
              <div className="card-img h-100" style={ { backgroundImage: 'url(' + article.hero_img_url + ')'} }>
              </div>
              </div>
              <CardBody>
                <CardTitle>{article.title}</CardTitle>
                <CardText>{article.tagline}</CardText>
                <Link to={`/articles/${article.id}`}>Read more ..</Link>
              </CardBody>
            </Card>
          )
        })

        return (
          <div className="row">
            {articles}
          </div>
        );
    }
}

export default ArticleCard
