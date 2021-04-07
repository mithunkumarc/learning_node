#### express.js
#### output returns after 5 secs

        app.get("/demo", async (req, res, next ) => {
          const result = await new Promise((resolve, reject) => {
            setTimeout(() => resolve("hello world promise"), 5000);
          });
          res.send(result);
        })
