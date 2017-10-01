/**
 * this user reducer is a function which return to us a javascript object of our users
 * */
export default function () {
    return [
        {
            id: 0,
            username: "elmenus",
            name:"ElMenus Admin",
            password:"admin",
            description: "ElMenus Admin is the Admin of this app they can add , edit , delete anything in the app",
            thumbnail: "https://scontent-amt2-1.cdninstagram.com/t51.2885-19/10369265_479529652181504_45833849_a.jpg",
            role:'admin'
        },
        {
            id: 1,
            username: "melkotoury",
            name:"Mahmoud El Kotoury",
            password:"123456",
            description: "Mahmoud is Software Developer",
            thumbnail: "http://68.media.tumblr.com/avatar_7519b28ccc55_128.png",
            role:'dev'
        }
    ]
}