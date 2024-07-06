import React from "react";

const NewsItem=(props)=>{
 
    let { title, description, ImageUrl,url,author,publishedAt } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!ImageUrl?"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijNhc4qbt4.s/v1/1200x804.jpg":ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By { !author?"Unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a  rel="noreferrer" href={url} className="btn btn-sm btn-info">
              ReadMore
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
