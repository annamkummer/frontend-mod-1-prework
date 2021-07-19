/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  addLike() {
    this.numberOfLikes += 1;
  }

  addComment(newComment) {
    this.comments.push(newComment);
  }
};

var tweetOne = new Tweet("Harry", "New broomstick!", "09:33AM 09/12/1999", 12, ["Brilliant!", "What model?", "The Slytherins don't stand a chance!"]);
var tweetTwo = new Tweet ("Ron", "Never trust a rat", "11:43PM 06/04/2000", 23, ["Cats forever!", "Rats are beau'iful, misunderstood creatures"]);
var tweetThree = new Tweet ("Hermione", "O.W.L results are in!", "10:15AM 08/10/2002", 0, ["We know you want to ask..."]);

console.log(tweetOne, tweetTwo, tweetThree);

tweetOne.addLike();
console.log(tweetOne);

tweetThree.addComment("What'd you get?");
console.log(tweetThree);
