import "./Messages.scss";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  const lastMessage = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eius cum, assumenda qui est ipsa modi molestiae nostrum dolorum repudiandae, nisi minus eveniet laborum! Vel atque culpa consectetur hic dolores.`;

  const dummyDate = "1 day ago";

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>{currentUser.username}</td>
            <td>
              <Link to="/message/123" className="link">
                {lastMessage.substring(0, 100)}...
              </Link>
            </td>
            <td>{dummyDate}</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>{currentUser.username}</td>
            <td>
              <Link to="/message/123" className="link">
                {lastMessage.substring(0, 100)}...
              </Link>
            </td>
            <td>{dummyDate}</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>{currentUser.username}</td>
            <td>
              <Link to="/message/123" className="link">
                {lastMessage.substring(0, 100)}...
              </Link>
            </td>
            <td>{dummyDate}</td>
          </tr>
          <tr>
            <td>{currentUser.username}</td>
            <td>
              <Link to="/message/123" className="link">
                {lastMessage.substring(0, 100)}...
              </Link>
            </td>
            <td>{dummyDate}</td>
          </tr>
          <tr>
            <td>{currentUser.username}</td>
            <td>
              <Link to="/message/123" className="link">
                {lastMessage.substring(0, 100)}...
              </Link>
            </td>
            <td>{dummyDate}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
