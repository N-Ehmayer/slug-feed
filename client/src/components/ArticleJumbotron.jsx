import React from 'react';
import ArticleTag from './ArticleTag.jsx';

const ArticleJumbotron = (props) => {
  const colours = ['pink', 'blue', 'indigo', 'purple', 'orange', 'green'];
  const articleTags = props.article.tags && props.article.tags.map((tag, index) => {
    return <ArticleTag key={tag.id} colour={colours[index % colours.length]} tag={tag}/>
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card card-image jumbo-fix" style={{backgroundImage: `url(${props.article.hero_img_url})`}}>
            <div className="text-white text-center rgba-stylish-light py-5 px-4">
              <div className="py-5">
                <h2 className="article-hero-tagline pt-3 mb-5 font-bold mx-auto" style={{'fontSize': '30px'}}>{props.article.tagline}</h2>
              </div>
            </div>
            <div className="rgba-stylish-light d-flex justify-content-between align-items-end">
              <div className="article-tag-container">{articleTags}</div>
              <span className="text-white badge rounded-circle overall-rating">
                <i className="text-white fa fa-thumbs-up"></i>
                {' ' + Math.floor(props.article.agreement * 100) + '%'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleJumbotron;

