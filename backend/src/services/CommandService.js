import CommandRepository from '../repositories/CommandRepository.js';
const validTypes = ["P" ,"G"];
const validStatuses = ["O", "C"];
const getAllCommands = async () => {
      const command = await CommandRepository.getAllCommands();
      return command ;
};

const getCommandById = async ( {id} ) => {
        id = null;
        await validateIdParam({ id: id });
        const command = await CommandRepository.getCommandById({ id: id});
        return command ;
};

const saveCommand = async ({ name, type, status }) => {
        await validateNameParam({ name: name });
        await validateTypeParam({ type: type });
        await validateStatusParam({ status: status });
        CommandRepository.saveCommand({ name, type, status });
        
};

const updateCommandById = async ({ id, name, type, status }) => {
      await validateIdParam({ id: id });
      await validateNameParam({ name: name });
      await validateTypeParam({ type: type });
      await validateStatusParam({ status: status });
      CommandRepository.updateCommandById({ id: id, name: name, type: type, status: status });
};

const deleteCommandById = async ({ id }) => {
      await validateIdParam({ id: id });
      CommandRepository.deleteCommandById({ id: id});
      
};

const validateIdParam = async ({ id }) => {
      if (!id) {
            throw { code: 400, message: "ID parameter is required." };
      }
}

const validateNameParam = async ({ name }) => {
      if (!name) {
            throw { code: 400, message: "Name parameter is required." };
      }
}

const validateTypeParam = async ({ type }) => {
      if (!type) {
            throw { code: 400, message: "Type parameter is required." };
      }
      if(validTypes.includes(type)){
            throw { code: 400, message: "Type parameter is invalid." };
      }
}

const validateStatusParam = async ({ status }) => {
      if (!status) {
            throw { code: 400, message: "Status parameter is required." };
      } 
      if(validStatuses.includes(status)){
            throw { code: 400, message: "Status parameter is invalid." };
      }
};

export default { getAllCommands, getCommandById, saveCommand, updateCommandById, deleteCommandById };