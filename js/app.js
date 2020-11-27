
var tweets = [
  {
    tweet: "Ya know I've got hairy legs..",
    username: 'SleepyJoe',
    created_at: '11-13-2020',
    age: '74',
  },
  {
    tweet: 'Listen here fat...',
    username: 'SleepyJoe',
    created_at: '11-13-2020',
    age: '97',
  },
  {
    tweet: 'Just let me smell you a little bit...',
    username: 'SleepyJoe',
    created_at: '11-13-2020',
    age: '97',
  },
  {
    tweet:
      'Good news is, for me, I’m here. The bad news for you is I’m coming back. And I want to see these beautiful young ladies. I want to see them dancing when they’re four years older, too,',
    username: 'SleepyJoe',
    created_at: '11-07-2020',
    age: '97',
  },
  {
    tweet:
      'Unlike the African American community, with notable exceptions, the Latino community is an incredibly diverse community with incredibly diverse attitudes about different things.',
    username: 'SleepyJoe',
    created_at: '08-25-2020',
    age: '97',
  },
  {
    tweet:
      'We hold these truths to be self-evident. All men and women are created, by the.... you know... you know the thing...',
    username: 'SleepyJoe',
    created_at: '03-03-2020',
    age: '97',
  },
  {
    tweet:
      'I got a lot of — I got hairy legs that turn … blonde in the sun,” Biden said. “And the kids used to come up and reach in the pool and rub my leg down so it was straight and then watch the hair come back up again. They’d look at it.',
    username: 'SleepyJoe',
    created_at: '02-03-2013',
    age: '97',
  },
  {
    tweet:
      'So I learned about roaches. I learned about kids jumping on my lap, And I’ve loved kids jumping on my lap. And I tell you what, the men are now all men. The guys I worked with down here, and they’re all guys at the time, they’re all good men.',
    username: 'SleepyJoe',
    created_at: '03-03-2017',
    age: '97',
  },
  {
    tweet:
      'Help me',
    username: 'SleepyJoeVictim#4157',
    created_at: '03-03-2017',
    age: '12',
  },
  {
    tweet:
      'Oh noes the bad man is gonna be president',
    username: 'SleepyJoeVictim#4201',
    created_at: '03-03-2017',
    age: '13',
  },

  {
    tweet: "it's a right to have badakathcare",
    username: 'SleepyJoe',
    created_at: '03-03-2020',
    age: '97',
  },

  {
    tweet: 'truaninonashufodopressure',
    username: 'SleepyJoe',
    created_at: '11-15-2020',
    age: '97',
  },
];

// for (var i = 1; i < tweets.length; i++) {
//   console.log("'" + tweets[i].tweet + "'" + "\nUsername: " + tweets[i].username + "\nCreated on: " + tweets[i].created_at );
// }

function hidethevictims(tweets) {
  return tweets.age >= 18;
}

var novictimtweets =  tweets.filter(hidethevictims);
console.log(novictimtweets)s