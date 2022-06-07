module.exports.handler =async function handler() {
    console.log("I asasssssssadasdddaaM  Dhrsadfgdsasumil Patel");

    return {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": JSON.stringify({a:"a",b:"b"}),
        "isBase64Encoded": false
    };
}