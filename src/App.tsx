import './App.css'
import {VirtualScroller} from "primereact/virtualscroller";
import React, {useState} from "react";
import {classNames} from "primereact/utils";
import axios from "axios";
function App() {
    const [posts, setPosts] = useState([]);

    React.useEffect(() => {
        axios.get("https://my-json-server.typicode.com/StGreg13/PicassoTest/posts").then((response) => {
            setPosts(response.data);
            console.log("posts", posts)
        });
    }, []);

    const widthSize = () => {
        return "700px"
    }

    const itemTemplate = (post, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                <i>{post.id}</i> <b>{post.title}</b>
                <p>{post.text}</p>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <VirtualScroller
                items={posts}
                itemSize={50}
                itemTemplate={itemTemplate}
                className="border-1 surface-border border-round"
                style={{ width: widthSize(), height: '200px' }} />
        </div>
    );
}

export default App
