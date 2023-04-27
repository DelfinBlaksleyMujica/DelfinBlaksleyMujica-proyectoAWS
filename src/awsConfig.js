const AWS = require("aws-sdk");

//Configuracion de AWS
AWS.config.update({
    region:"us-east-1"
});

//Configurar los servicios
//DynamoDB-base de datos
const dynamoDB = new AWS.DynamoDB.DocumentClient();//Instancia de la base de datos creada en aws
const dynamoTableName = "productos-table";//Me aseguro que tenga el mismo nombre de la tabla que le puse en AWS

//SNS-servicio de mensajeria
const sns = new AWS.SNS();//Instancia que me va a permitir usar sns desde mi aplicacion de node js
const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:736469273453:notificationsEmail";//Esto se puede manejar con variables de entorno

module.exports = { dynamoDB , dynamoTableName , sns , SNS_TOPIC_ARN }