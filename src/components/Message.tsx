interface Message {
  userImg: string;
  username: string;
  date: string;
  children: string;
  userColor: string;
}

const Message = ({ userImg, username, date, children, userColor }: Message) => {
  return (
    <div className="message">
      <img className="userImg" src={userImg} alt="" />
      <div className="content">
        <div className="message-info">
          <h4 className={`username ${userColor}`}>{username}</h4>
          <p className="date">{date}</p>
        </div>
        <p className="message-content">{children}</p>
      </div>
    </div>
  );
};

export default Message;
