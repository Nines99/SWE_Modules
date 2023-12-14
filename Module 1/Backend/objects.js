// objects in javascript contain keys (or properties) with corresponding values
const user = {
    "first_name" : "Sammy",
    "last_name" : "Shark",
    "age" : 25,
    "followers" : 987,
    "location" : "Oceania"
    }
    // we can access properties with dot notation
    console.log(user.first_name); // Sammy
    console.log(user.age); // 25

    // or with array style square bracket syntax
    console.log(user["last_name"]); // Shark
    console.log(user["location"]); // Oceania

    user['example property'] = "new value"
    user.followers = 988; // we can also assign new values to object properties
    user.location = 'Pacific Ocean'; // or create new properties

    const admin = {
        "name" : "Henry",
        "alias" : "Nines",
        "age" : 24,
        "score" : 9877,
        "location" : "Oceania",
        "health" : "Healthy",
        }

        console.log(admin.name); 
        console.log(admin.alias);
        console.log(admin.age); 
        console.log(admin.score);
        console.log(admin.location); 
        console.log(admin.health);
