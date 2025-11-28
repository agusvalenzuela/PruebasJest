const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  // ✅ TAREA 2 - NUEVAS PRUEBAS:

// 1. add() - usuario que NO está en la lista
test('add() should add user when user is not in the list', () => {    
    const userController = new UserController(); // Nuevo controller para test aislado
    const user = new User(1, "Juan", "juan@test.com");
    
    // Verificar que la lista está vacía al inicio
    expect(userController.getUsers().length).toBe(0);
    
    // Agregar usuario
    userController.add(user);
    
    // Verificar que el usuario fue agregado
    expect(userController.getUsers()).toContain(user);
    expect(userController.getUsers().length).toBe(1);
});

// 2. remove() - usuario que NO está en la lista
test('remove() should handle non-existent user gracefully', () => {    
    const userController = new UserController();
    const nonExistentUser = new User(999, "No Existe", "noexiste@test.com");
    
    // La lista debe estar vacía
    expect(userController.getUsers().length).toBe(0);
    
    // Intentar remover usuario que no existe
    userController.remove(nonExistentUser);
    
    // Verificar que la lista sigue vacía (no hubo error)
    expect(userController.getUsers().length).toBe(0);
});

// 3. findByEmail() - 2 pruebas unitarias
describe('findByEmail()', () => {
    test('should find user by existing email', () => {
        const userController = new UserController();
        const user = new User(1, "Maria", "maria@test.com");
        userController.add(user);
        
        const foundUser = userController.findByEmail("maria@test.com");
        
        expect(foundUser).toBe(user);
        expect(foundUser.email).toBe("maria@test.com");
    });
    
    test('should return undefined for non-existing email', () => {
        const userController = new UserController();
        const user = new User(1, "Maria", "maria@test.com");
        userController.add(user);
        
        const foundUser = userController.findByEmail("noexiste@test.com");
        
        expect(foundUser).toBeUndefined();
    });
});

// 4. findById() - 2 pruebas unitarias  
describe('findById()', () => {
    test('should find user by existing id', () => {
        const userController = new UserController();
        const user = new User(123, "Carlos", "carlos@test.com");
        userController.add(user);
        
        const foundUser = userController.findById(123);
        
        expect(foundUser).toBe(user);
        expect(foundUser.id).toBe(123);
    });
    
    test('should return undefined for non-existing id', () => {
        const userController = new UserController();
        const user = new User(123, "Carlos", "carlos@test.com");
        userController.add(user);
        
        const foundUser = userController.findById(999);
        
        expect(foundUser).toBeUndefined();
    });
});