import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className="link">
            {"MESSAGES"}
          </Link>
          {"> JOHN DOE >"}
        </span>
        <div className="messageArea">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              voluptate magni nemo rerum laudantium nostrum veniam tempore fugit
              tempora deserunt aut enim sed, consequuntur itaque tenetur,
              perferendis est fugiat ratione.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              voluptate magni nemo rerum laudantium nostrum veniam tempore fugit
              tempora deserunt aut enim sed, consequuntur itaque tenetur,
              perferendis est fugiat ratione.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              voluptate magni nemo rerum laudantium nostrum veniam tempore fugit
              tempora deserunt aut enim sed, consequuntur itaque tenetur,
              perferendis est fugiat ratione.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              voluptate magni nemo rerum laudantium nostrum veniam tempore fugit
              tempora deserunt aut enim sed, consequuntur itaque tenetur,
              perferendis est fugiat ratione.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              voluptate magni nemo rerum laudantium nostrum veniam tempore fugit
              tempora deserunt aut enim sed, consequuntur itaque tenetur,
              perferendis est fugiat ratione.
            </p>
          </div>
        </div>

        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write amessage"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
