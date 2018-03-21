import React from 'react';
import ArticleTag from './ArticleTag.jsx';

const ArticleJumbotron = (props) => {
  const colours = ['pink', 'blue', 'indigo', 'purple', 'orange', 'green'];
  const thumbsUp = ( Math.floor(props.article.agreement * 100 ) ) > 70;
  const articleTags = props.article.tags && props.article.tags.map((tag, index) => {
    return <ArticleTag key={tag.id} colour={colours[index % colours.length]} tag={tag}/>
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card card-image jumbo-fix" style={{backgroundImage: `url(${props.article.hero_img_url})`}}>
            <div className="text-white text-justify-right rgba-stylish-light py-5 px-4">
              <div className="container">
                <div className="col-8">
                <h2 className="article-hero-tagline pt-3 font-bold mx-auto" style={{'fontSize': '30px'}}>{props.article.tagline}</h2>
                </div>
              </div>
            </div>
            <div className="rgba-stylish-light d-flex justify-content-between align-items-end">
              <div className="container-fluid row ">
              <div className="col-3">
              </div>
              <div className="col-6 article-tag-container">{articleTags}</div>
              </div>
              <div className="rating-box">
                {thumbsUp ?
                <span className="badge rounded-circle thumb-up">
                  <div className="gaint-thumb">
                     <i className="fa fa-thumbs-up "></i>
                  </div>
                </span> :
                <span className="badge rounded-circle thumb-down">
                  <div className="gaint-thumb">
                     <i className="fa fa-thumbs-down "></i>
                  </div>
                </span>
                }
                <div className="overall-rating">
                  <h2>{' ' + Math.floor(props.article.agreement * 100) + '%'}</h2>
                  <p className>Positive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleJumbotron;

