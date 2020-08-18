const Bossy = require('@hapi/bossy');

const definition = {
    h: {
        description: 'Show help',
        alias: 'help',
        type: 'boolean'
    },
    n: {
        description: 'Show your name',
        alias: 'name'
    }
};

const args = Bossy.parse(definition);

if (args instanceof Error) {
    console.error(args.message);
    return;
}

if (args.h || !args.n) {
    console.log(Bossy.usage(definition, 'hello -n <name>'));
    return;
}

console.log('Hello ' + args.n);
console.log('Hello ' + args.name);
