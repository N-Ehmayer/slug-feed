import React from 'react';
import { Card, CardTitle } from 'mdbreact';


const ArticleCard = (props) => {
  const author = props.author;
  if (!author) { return false; }
  return (
    <Card>
      <CardTitle className="p-2">
        <img className='rounded-circle user-avatar mx-2' src={author.picture} alt='author' />
        <span className=''> -- {author.displayName}</span>
      </CardTitle>
    </Card>
  )
}

export default ArticleCard;
