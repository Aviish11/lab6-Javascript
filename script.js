// function getUserProfile() {
//     return new Promise((resolve, reject) => { setTimeout(() => {
//         var myTest = 1;
//         let success = (myTest > 0); 
//             if (success) {
//                 console.log("Getting data from server");
                
//                 resolve("Profile name is Avish");
//             } else {
//                 reject("Failed to get user profile.");
//             }
//     }, 1000);
//     });
// }


// function getPosts() {
//     return new Promise((resolve, reject) => { setTimeout(() => {
//         var myTest = 1;
//         let success = (myTest > 0); 
//             if (success) {
//                 console.log("Getting data from server");
//                 resolve("Posts");
//             } else {
//                 reject("Failed to get posts.");
//             }
//     }, 1200);
//     });
// }

// function getComments() {
//     return new Promise((resolve, reject) => { setTimeout(() => {
//         var myTest = 1;
//         let success = (myTest > 0); 
//             if (success) {
//                 console.log("Getting data from server");
//                 resolve("Posts comments");
//             } else {
//                 reject("Failed to get comments.");
//             }
//     }, 1500);
//     });
// }

// function getDataInSequence() {

//     getUserProfile()
//         .then((profile) => {
//             console.log(profile);
//             return getPosts();
//         })
//         .then((posts) => {
//             console.log(posts);
//             return getComments();
//         })
//         .then((comments) => {
//             console.log(comments);
//         })
    
// }

// getDataInSequence();


function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getDataInSequence() {
    console.log("Getting profile from server..");
    await delay(1000);  
    var myTest = 1;
    if ((myTest > 0)) {
        console.log("Profile name is Avish");
    } else {
        console.log("Error: Failed to get user profile.");
        return;
    }

    console.log("Getting posts from server..");
    await delay(1200); 
    var myTest = 1;
    if ((myTest > 0)) {
        console.log("Posts");
    } else {
        console.log("Error: Failed to get posts.");
        return; 
    }

    console.log("Getting comments from server..");
    await delay(1500);  
    var myTest = 0;
    if ((myTest > 0)) {
        console.log("Posts comments");
    } else {
        console.log("Error: Failed to get comments.");
        return; 
    }

    console.log("All tasks completed in sequence.");
}

getDataInSequence();





async function getUserProfile() {
    return "Profile name is Avish";
}

async function getPosts() {
    return "Posts";
}

async function getComments() {
    return "Posts comments";
}

async function getUserContent() {

    const profile =  await getUserProfile();
    await delay(1000); 

    console.log("User profile retrieved:", profile);

    const posts =  await getPosts();
    await delay(1200); 
    console.log("Posts retrieved:", posts);

    const comments =  await getComments();
    await delay(1500); 
    console.log("Comments retrieved:", comments);

    const resultSummary = {
        profile: profile,
        posts: posts,
        comments: comments,
    };

    console.log("All data retrieved successfully:", resultSummary);
}

getUserContent();

