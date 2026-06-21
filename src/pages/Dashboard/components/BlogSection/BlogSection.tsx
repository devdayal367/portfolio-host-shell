import './BlogSection.scss'
import {
    EditOutlined,
    ArrowRightOutlined
} from "@ant-design/icons";
import { Card } from "antd";

const BlogSection = (props: any) => {

    return (
        <Card className="blog-section">

            <div className="blog-section__header">

                <EditOutlined />

                <span>My Blog</span>

            </div>

            <div className="blog-section__list">

                {props.blogs.map((blog: any) => (

                    <div
                        key={blog.title}
                        className="blog-section__item"
                    >

                        <div className="blog-section__title">
                            {blog.title}
                        </div>

                        <div className="blog-section__date">
                            {blog.date}
                        </div>

                    </div>

                ))}

            </div>

            <div className="blog-section__footer">

                <span>View all articles</span>

                <ArrowRightOutlined />

            </div>

        </Card>
    );
};

export default BlogSection;