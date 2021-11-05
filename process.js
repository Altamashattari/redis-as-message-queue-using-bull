const Queue = require('bull');

// const queue = new Queue('color queue', 'redis://127.0.0.1:6379');

// queue.process((job, done) => {
//     console.log(job);
//     done();
// });

// import * as Queue from "bull";

const sendRatingMailqueue = new Queue("sendRatingMail", {
   redis: {
      host: "127.0.0.1",
      port: 6379,
   },
});

const data = {
   email: "foo@bar.com",
};
const options = {
   delay: 1,
   attempts: 3,
};
sendRatingMailqueue.add(data, options);

sendRatingMailqueue.process(async (job) => {
   console.log(`process Id: ${process.pid} - ${job.data.email}`);
});