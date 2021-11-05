const Queue = require('bull');

const sendRatingMailqueue = new Queue("sendRatingMail", {
  redis: {
     host: "127.0.0.1",
     port: 6379,
  },
});

const options = {
  delay: 1,
  attempts: 3,
};

(async() => {
  let count = 0;
  setInterval(() => {
    const data = {
      email: `test${count}@gmai.com`,
   };
   console.log(data);
  sendRatingMailqueue.add(data, options);
  count++;
  }, 100)
})();

