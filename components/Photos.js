import { useEffect, useState } from "react"
import Post from "./Post"
import { collection, onSnapshot, query, orderBy} from "@firebase/firestore";
import { db } from "../firebase";
import Photo from "./Photo";



function Photos() {
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
    });
    
    

    }, [db])

    return (
        <div className="grid grid-cols-3 gap-2 max-w-5xl">
           {posts.map((post) => (
                <Photo 
                    key={post.id}
                    id={post.id}
                    className='w-1/4'
                    img={post.data().image}
                   
                />

            ))}
          
            
        </div>
    )
}

export default Photos
