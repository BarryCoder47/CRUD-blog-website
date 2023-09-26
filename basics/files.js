const fileSystem = require('fs');



//reading files
fileSystem.readFile('./docs/blog1.txt', (err, data) =>{
   if(err){
    console.log(err);
   }
   console.log(data.toString());
})
console.log('last line');

//writing files
fileSystem.writeFile('./docs/blog1.txt', 'Hello, world' , ()=>{
    console.log('file was written');
})
fileSystem.writeFile('./docs/blog2.txt', 'Hello, again' , ()=>{
    console.log('file was written');

})


//directories
if(!fileSystem.existsSync('./assets')){
fileSystem.mkdir('./assets', (err) =>{
    if(err){
        console.log(err);
    }
    console.log('Folder created')
});

}else{
    fileSystem.mkdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('Folder created')
    })
}

//deleting files
if(fileSystem.existsSync('./docs/deleteme.txt')){
    fileSystem.unlink('./docs/deleteme.txt', (err) => {
        if (err){
            console.log(err);
        }
        console.log('file deleted');
    })
}