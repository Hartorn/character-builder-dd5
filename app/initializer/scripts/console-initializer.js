import { container as entityContainer } from 'focus-core/definition/entity';
import noop from 'lodash/utility/noop';

export default () => {
    console.info('|--- CONSOLE');

    if (process.env.NODE_ENV === 'production') {
        console.info('   |--- Production environnement, shutting down console.');
        console.log = noop;
        console.info = noop;
        console.warn = noop;
        console.error = noop;
    } else {
        console.info('   |--- Keeping console up.');
    }
}