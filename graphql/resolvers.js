const User = require('../models/users');
const Employee = require('../models/employee');

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users.");
      }
    },

    getEmployee: async (_, { id }) => {
        try {
          const employee = await Employee.findById(id);
          return employee;
        } catch (err) {
          console.log(err);
          throw new Error("Failed to fetch employee.");
        }
      }
  },

  Mutation: {
    createUser: async (_, { userInput: { username, email, password } }) => {
      try {
        const newUser = await User.create({ username, email, password });
        return { username: newUser.username, email: newUser.email , password: newUser.password};
      } catch (err) {
        console.log(err);
        throw new Error("Failed to create a user.");
      }
    },
    createEmployee: async (_, { employeeInput: { first_name, last_name, email, salary, gender } }) => {
        try {
          const newEmployee = await Employee.create({ first_name, last_name, email, salary, gender });
          return newEmployee;
        } catch (err) {
          console.log(err);
          throw new Error("Failed to create an employee.");
        }
    },
    //allow user to update their own information
    // allow user to create new account
    // allow user to delete their own account
    // allow user to update their own accounteli

    deleteEmployee: async (_, { id }) => {
        try {
          await Employee.findByIdAndDelete(id);
          return true;
        } catch (err) {
          console.log(err);
          throw new Error("Failed to delete an employee.");
        }
      },
    //update employee
    updateEmployee:  async (_, {id}) =>{
        try {
            const employee = await Employee.findById(id);
            return employee;
          } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch employee.");
          }
    },
}
};

module.exports = resolvers;