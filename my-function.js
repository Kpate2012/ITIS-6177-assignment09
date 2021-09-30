exports.handler = async (event) => {
    if(event.httpMethod === 'GET'){
        return getSentence(event);
    }
};

const getSentence = event =>{
    if(event && event.queryStringParameters && event.queryStringParameters.keyword){
            let keyword = event.queryStringParameters.keyword;
            let res = "Komal Patel says "+ keyword;
            return{
                statusCode:200,
                body:JSON.stringify(res)
                 }
    } else{
        return{
                statusCode:400,
                body:JSON.stringify({error:"Add Keyword"})
             }
            }
}