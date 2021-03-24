import "./CommentScreen.css";
import Comment from "../components/Comment";
import Input from "../components/Input";

const CommentScreen = () => {
    return (
        <div className="commentscreen">
            <h2 className="commentscreen_title">Comments</h2>
            <div className="commentscreen_newcomment">
                
            </div>
            <div className="commentscreen_pastcomments">
                <Input />
               <Comment />
            </div>
            
        </div>
    );
}

export default CommentScreen;
