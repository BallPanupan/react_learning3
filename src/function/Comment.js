function Comment(props) {
  console.log("Hello function comment");

  return (
    <div className="Comment">
    <div className="UserInfo">
      <div className="UserInfo-name">
      {props.author2}
      {props.author.name}
        
      </div>
    </div>
    <div className="Comment-text">
      {props.text}
    </div>
    <div className="Comment-date">
    </div>
  </div>
  );
}

export default Comment;