/* sophisticated_code.js */

// This code demonstrates an elaborate and complex implementation of a social media platform.
// It includes class definitions, inheritance, complex data structures, and functions.

// Class definition for a User
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.friends = [];
    this.posts = [];
  }

  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    return post;
  }
}

// Class definition for a Post
class Post {
  constructor(content, user) {
    this.content = content;
    this.user = user;
    this.comments = [];
  }

  addComment(content, user) {
    const comment = new Comment(content, user);
    this.comments.push(comment);
    return comment;
  }
}

// Class definition for a Comment
class Comment {
  constructor(content, user) {
    this.content = content;
    this.user = user;
  }
}

// Function to generate random usernames and emails
function generateRandomUsernamesAndEmails(numUsers) {
  const usernames = [];
  const emails = [];

  for (let i = 0; i < numUsers; i++) {
    const username = generateRandomUsername();
    const email = generateRandomEmail();
    usernames.push(username);
    emails.push(email);
  }

  return [usernames, emails];
}

// Function to generate a random username
function generateRandomUsername() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

// Function to generate a random email
function generateRandomEmail() {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
  const username = generateRandomUsername();
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${username}@${domain}`;
}

// Main code execution
const numUsers = 10;
const [usernames, emails] = generateRandomUsernamesAndEmails(numUsers);
const users = [];

for (let i = 0; i < numUsers; i++) {
  const user = new User(usernames[i], emails[i]);
  users.push(user);
}

users[0].addFriend(users[1]);
users[0].addFriend(users[2]);

const post = users[0].createPost("Hello, everyone!");
post.addComment("Nice post!", users[1]);
post.addComment("I totally agree!", users[2]);

console.log(users);
console.log(post);

// ... continue with more complex and creative logic ...