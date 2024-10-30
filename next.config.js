module.exports = () =>{
  
    if(process.env.context && process.env.context !== "/"){
       if(process.env.context.startsWith("/")){
         baseUrl =  process.env.context;
         assetBaseUrl = process.env.context;
         distDirUrl = process.env.context;
       }else {
         baseUrl = "/"+process.env.context;
         assetBaseUrl = "/"+process.env.context;
         distDirUrl= "/"+ process.env.context;
       }

     let env =  {
        basePath: baseUrl, 
        assetPrefix:  assetBaseUrl,
        distDir: distDirUrl
     }
     return env;
    }
    return {};
    }
