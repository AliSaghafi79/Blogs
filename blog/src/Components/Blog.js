import BlogList from "./BlogList";
import { useEffect, useState } from "react"
import Header from "./Header";
import Load from '../Images/loading.gif'

const Blog = () => {
    const [data, setData] = useState([])
    const [loading, steLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {

            fetch('http://localhost:8000/blogs')
                .then((res) => {
                    return res.json()
                })
                .then((blog) => {
                    setData(blog)

                    steLoading(false)
                })
        }, 1000)


    }, [])

    return (
        <>
            <Header text="Blog" />
            {loading && <img className="LoadImg" alt="Loading..." src={Load} />}
            {data && <BlogList data={data} />}
        </>

    );
}

export default Blog;