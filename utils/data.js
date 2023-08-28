const users = [
    ['Aaran','Aaran@gmail.com'],
    ['Abdallah','Abdallah@gmail.com'],
    ['Abdul','Abdul@gmail.com'],
    ['Abdul-Aziz','Abdul-Aziz@gmail.com'],
    ['Abdulbasir','Abdulbasir@gmail.com'],
    ['Abdulkadir','Abdulkadir@gmail.com'],
    ['Smith','Smith@gmail.com'],
    ['Jones','Jones@gmail.com'],
    ['Coollastname','Coollastname@gmail.com'],
    ['Ze','Ze@gmail.com'],
    ['Zechariah','Zechariah@gmail.com'],
    ['Zeek','Zeek@gmail.com'],
    ['Zeeshan','Zeeshan@gmail.com']
    ['Zeid','Zeid@gmail.com'],
    ['Zein','Zein@gmail.com'],
    ['Zen','Zen@gmail.com'],
    ['Zendel','Zendel@gmail.com'],
    ['Zenith','Zenith@gmail.com'],
    ['Zishan','Zishan@gmail.com'],
    ['Xander','Xander@gmail.com'],
    ['Jared','Jared@gmail.com'],
    ['Courtney','Courtney@gmail.com'],
    ['Gillian','Gillian@gmail.com'],
    ['Clark','Clark@gmail.com'],
    ['Jared','Jared@gmail.com'],
    ['Grace','Grace@gmail.com'],
    ['Kelsey','Kelsey@gmail.com'],
    ['Tamar','Tamar@gmail.com'],
    ['Alex','Alex@gmail.com'],
    ['Mark','Mark@gmail.com'],
    ['Tamar','Tamar@gmail.com'],
    ['Farish','Farish@gmail.com'],
    ['Sarah','Sarah@gmail.com'],
    ['Nathaniel','Nathaniel@gmail.com'],
    ['Parker','Parker@gmail.com']
  ];



  const thoughts = [
    'I disagree!',
    'I tried your algorithm, here were the results',
    'This was awesome',
    'Thank you for the great content',
    'Please check out my video response',
    'Like and subscribe to my channel please',
    'Reply: The side effects of in app purchases on digital marketplaces',
    'How to disagree with someone',
    'iPhone review',
    'how-to video',
    'video essay on the history of video games',
    'How to make money on the App Store',
    'Learn NextJS in five minutes (Not clickbate)',
    'Movie trailer',
    'Hello world',
    'Another possible solution to the algorithm',
    'Apology video',
    'Submission for startup pitch',
    'Weather is crazy today',
    'Bootcamp is hard',
    'Today is a good day',
    'Exploring this beautiful world'
  ];


const getRandomArrItem = (arr) => {
    a = Math.floor(Math.random() * arr.length)
    // console.log(a)
    // console.log(users.length)
    return arr[a]
    // arr[Math.floor(Math.random() * arr.length)];
}

const getRandomUser = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        let temp = getRandomArrItem(users)
        results.push({
            username: temp[0],
            email: temp[1],
        })}
    return results
}

// To make sure thought have a registered usert, userResult comes from getRandomUser;
// int in getRandomUser() and getRandomThought() should be the same
const getRandomThought = (userResult,int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            username:userResult[i].username,
            thoughtText: getRandomArrItem(thoughts),
        })}
    return results
}

module.exports = { getRandomUser, getRandomThought };

  let user = getRandomUser(5)
  let thought = getRandomThought(user,5)
  console.log(user)
  console.log(thought)