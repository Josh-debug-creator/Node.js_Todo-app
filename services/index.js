
const path = require('path');
const fs = require('fs');
const baseDir = path.join(__dirname, '../Todos')


// const deleted = function deleteTodo(name){
// const currentDir = './'
// const file = path.join(baseDir, currentDir)
// fs.unlink(file, function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//     console.log(file)
// })
// }
// deleteTodo()
// console.log(file)


class TodoService {
    createTodo (name, data) {
        let res;
        const filepath = path.join(baseDir, name);
        fs.appendFile(filepath, data, function (err,res) {
            if(err) {
                throw err
            }else {
                res = 'todo created successfully'
            }
        })

        return res
    }

    readTodo(data){
    
        // Read the contents of the directory
        fs.readdir(baseDir, (err, files) => {
          if (err) {
            console.error('Error reading directory:', err);
            return;
          }
          files.forEach(file => {
            const filePath = path.join(baseDir, file)
            // console.log(filePath);
            fs.readFile(filePath,'utf-8', function(err, data){
                if(err)
                throw err;
            const result =filePath + " " + data
                console.log(result)
            }
            )
        
          });
        });

    }


    readOneTodo (fileName) {
       let result;
        const file = path.join(baseDir, fileName)
         const fileContent = fs.readFile(file, 'utf-8', function(err,data) {
         if (err) {
        console.log('Error reading file:', err)
}
        else 
        result += data.toString()
        console.log(result)
     
    })
console.log(fileContent)
    }
    
deleteTodo(name){
    const file = path.join(baseDir, name)
    fs.unlink(file, function (err) {
        // if (err) throw err;
        // console.log('File deleted!');
        // console.log(file)
      });

}
          
        
    


    }





const todo = new TodoService()
module.exports = todo