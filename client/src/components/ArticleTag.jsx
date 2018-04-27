import React from 'react';
import { Link } from 'react-router-dom';
const ArticleTag = (props) => {
  return (
    <span key={props.tag.id} className={'article-tag badge badge-pill ' + props.colour}>
      <Link to={`/tags/${props.tag.url_slug}?id=${props.tag.id}`} className='text-white'>{props.tag.display_name}</Link>
    </span>
  )
}

export default ArticleTag;
