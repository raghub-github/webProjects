import chalk from 'chalk';

// Basic usage
console.log(chalk.blue('Hello, world!')); // Text in blue
console.log(chalk.bold.red('Error!'));    // Bold red text
console.log(chalk.green.underline('Success!')); // Underlined green text

// Chaining styles
console.log(chalk.yellow.bgBlue.bold('Attention!'));

// Nesting styles
console.log(chalk.red(`Warning: ${chalk.bold('Critical Error!')}`));

// Using hex or RGB colors
console.log(chalk.hex('#FFA500')('This is orange!'));
console.log(chalk.rgb(128, 0, 128).bold('Purple text.'));
console.log(chalk.bgRgb(0, 128, 128).white('Teal background.'));