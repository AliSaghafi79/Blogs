import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const BlogList = (props) => {

    const Navigate = useNavigate();
    
    const Delete = (dlt) =>{
        fetch('http://localhost:8000/blogs/'+dlt , {
            method:'DELETE',
        }).then(() => {
            Navigate(0);
          })
    }
    return (
        <div className="blogList">
            {props.data.map(blogsData => (

                <div className="blogBox" key={blogsData.id}>
                    <RiDeleteBin6Line onClick={() => Delete(blogsData.id)} className="Delete"/>
                    <div className="blogTitle">

                        <p>{blogsData.title} </p>
                    </div>
                    <div className="blogText">
                        <p>{blogsData.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;