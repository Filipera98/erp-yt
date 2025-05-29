import CommandService from '../services/CommandService.js';

const getAllCommands = async (request, response) => {
     try{
        const commands = await CommandService.getAllCommands();
        console.log(command); 
        response.status(200).json({ message:`Command retrieved successfully`, commands: commands });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code).json({ message: `Error retrieving commands: ${error.message}`});
    }
};

const getCommandById = async (request, response) => {
   
    try{
        const command = await CommandService.getCommandById(request.params);
        console.log(command); 
        response.status(200).json({ message:`Command with ID retrieved successfully`, command: command });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code).json({ message: `Error retrieving command with ID: ${error.message}`});
    }
}; 

const saveCommand = async (request, response) => {
    try{
        await CommandService.saveComman(request.body);
        console.log(command); 
        response.status(201).json({ message:`Command persisted successfully`});                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code).json({ message: `Error persisting command: ${error.message}`});
    }
};

const updateCommandById = (request, response) => {
    try{
        const { id } = request.params;
        const { name, type, status } = request.body;
        CommandService.updateCommandById({ id: id, name: name, type: type, status: status }); 
        response.status(200).json({ message:`Command updated successfully.` });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code).json({ message: `Error updating command: ${error.message}`});
    }  
};

const deleteCommandById = (request, response) => {
    try{
        CommandService.deleteCommandById(request.params);
        console.log(command); 
        response.status(200).json({ message:`Command deleted successfully.` });                                             
    }catch(error){
            console.log(error); // todo inserir um logger
            response.status(error.code).json({ message: `Error deleting command: ${error.message}`});
    }    

};

export default { getAllCommands, getCommandById, saveCommand, updateCommandById, deleteCommandById };