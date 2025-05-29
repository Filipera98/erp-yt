import db from '../config/database.js';
    const getAllCommands = async () => {
    const [rows] = await db.query('SELECT id, name, type, STATUS, created_at, update_at FROM COMMAND');
    return rows;
};

const getCommandById = async ( {id} ) => {
    const [rows] = await db.query('SELECT id, name, type, STATUS, created_at, update_at FROM COMMAND WHERE ID = ?', [id]);
    return rows;
};

const saveCommand = ({ name, type, status }) => {
    db.query('INSERT INTO COMMAND (name, type, status) VALUES (?, ?, ?)', [name, type, status]);

};

const updateCommandById = ({ id, name, type, status }) => {
    db.query('UPDATE COMMAND SET name = ?, type = ?, status = ? WHERE id = ?', [name, type, status, id]);
};

const deleteCommandById = ({ id }) => {
    db.query('DELETE FROM COMMAND WHERE ID= ?', [id]);
};




export default { getAllCommands, getCommandById, saveCommand, updateCommandById, deleteCommandById };