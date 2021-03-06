'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const basename = path.basename(__filename);
const sequelize = require('../connection/index');

/* Custom handler for reading current working directory */
const models = process.cwd() + '/db/models/' || __dirname;



/* fs.readdirSync(__dirname) */
fs.readdirSync(models)
	.filter(file => {
		return (
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
		);
	})
	.forEach(file => {
    
		/* const model = sequelize["import"](path.join(__dirname, file)); */
		// console.log("Lo que rompe: ", require(`./${file}`))
		const model = require(`./${file}`)
		// console.log("before")
		sequelize[model.name] = model;
	});

Object.keys(sequelize).forEach(modelName => {
	if (sequelize[modelName].associate) {
		sequelize[modelName].associate(sequelize);
	}
});

// console.log("DB: ", sequelize)
// sequelize.sync({ force: true })

sequelize.sequelize = sequelize;
sequelize.Sequelize = Sequelize;


module.exports = sequelize;