import React from 'react';

const ArticleTag = (props) => {
  return (
    <span key={props.tag.id} className={'article-tag badge badge-pill ' + props.colour}>
      <a href={`/tags/${props.tag.url_slug}`} className='text-white'>{props.tag.display_name}</a>
    </span>
  )
}

export default ArticleTag;
