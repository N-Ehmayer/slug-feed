import React from 'react';
import { Card, CardTitle } from 'mdbreact';


const ArticleCard = (props) => {
  const author = props.author;
  if (!author) { return false; }
  return (
    <Card className='my-4 author-card'>
      <CardTitle className="p-2">
        <div className='container row'>
        <div className='col-1'>
        <img className='rounded-circle author-avatar mt-2' src={author.picture} alt='author' />
        </div>
        <div className='col-9'>
        <span className='username py-3'>{author.displayName}</span>
        <p className="pl-4">&nbsp;&nbsp;Blogger for Entrepreneur.ca, Addicted2Lighthouse, and Slug Publications: The Mission, Personal Growth and Startup Grind. </p>
        </div>
        </div>
      </CardTitle>
    </Card>
  )
}

export default ArticleCard;
