import "./Comment.css";
import FixedStar from "./Fixedstar"
const Comment = () => {
    return (
        <div>
        <div className="comment">
                <p className="comment_user">AliceWu</p>
                <p className="comment_product">The Classic White Protein Meal</p>
                <p className="comment_details">This product is the best I have every used! Worth a try! My cats love it!</p>
                <FixedStar />
                </div>
        <div className="comment">
        <p className="comment_user">User1</p>
        <p className="comment_product">The Red Meat energy Meal</p>
        <p className="comment_details">My cat loved it, highly recommend!</p>
        <FixedStar />
        </div>
        <div className="comment">
                <p className="comment_user">User2</p>
                <p className="comment_product">The Savory "Baaaaa" Meal</p>
                <p className="comment_details">I was worried that My cat won't adjust well to raw meat, but they switch to this just fine</p>
                <FixedStar />
        </div>
        <div className="comment">
                <p className="comment_user">User3</p>
                <p className="comment_product">The Mystery Box</p>
                <p className="comment_details">My cat loved it and it's a fun experience for both of us</p>
                <FixedStar />
        </div>
</div>
    )
}
export default Comment;
