import React from "react";

const NewsItem = (props)=> {

  let {author,source,date,title,description,imageUrl,newsUrl} = props;

  return (

    <div className="my-4 container" key={newsUrl}>
        
      <div className="card ">
        <span className="position-absolute p-1 top-0  translate-middle badge rounded-pill bg-success" style={{left:"90%" , zIndex:"1"}}>{source}
        </span>
        <img src={imageUrl} style={{height: "300px"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title? title.slice(0,55):""}...</h5>
          <p className="card-text">{description? description.slice(0,90):""}...</p>
          <p className="card-text"><small className="text-danger">By {author? author : "unknown"} on {date? new Date(date).toGMTString() : "unknown"}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>

    </div>

  );
  
}

export default NewsItem
