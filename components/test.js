const docRef = await addDoc(collection(db, "posts"), {
    message: inputRef.current.value,
    name: session.user.name,
    email: session.user.email,
    timestamp: serverTimestamp(),
  }).then((doc) => {
    const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, "data_url");
    
    removeImage();


{/* 
uploadTask.on(
        "state_change",
        null,
        (error) => console.error(error),
        () => {
            storage.ref('posts').child(doc.id).getDownloadURL().then((url) => {
                db.collection("posts").doc(doc.id).set({
                    postImage: url
                }, 
                {merge: true}
                )
              })      
        }
        )
    }
*/}           
    
