import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const showMenu = () => {
    console.log('\n1. Add todo');
    console.log('2. Show todos');
    console.log('3. Exit');
    rl.question('Choose an option: ', handleMenu);
};

const handleMenu = (option) => {
    switch (option) {
        case '1':
            addTodo();
            break;
        case '2':
            showTodos();
            break;
        case '3':
            rl.close();
            break;
        default:
            console.log('Invalid option');
    }
}

const addTodo = () => {
    rl.question('Enter a todo: ', (todo) => {
        todos.push(todo);
        showMenu();
    });
}

const showTodos = () => {
    console.log('\nTodos:');
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
    showMenu();
}

showMenu();