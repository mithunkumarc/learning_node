
create crud folder : 
crud> npm init

mongoose used as mongo client to connect database

mongoose provide api to interact with database (schema, model and crud methods)


config.js : mongo db config
route.js : list of url paths
model.js : create schema and (template/class for model object)
controller.js : implementations crud methods(how to move this to service layer? not clear)

to run , crud> node index.js (any file u choosen as main file : package.json file)

courtesy : 

https://www.zeptobook.com/how-to-create-restful-crud-api-with-node-js-mongodb-and-express-js/

https://github.com/zeptobook/NodeAPI

https://mongoosejs.com/docs/api/model.html
