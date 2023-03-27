import generateTypes from './scripts/generateBlokTypes';

export default {
    ...(process.env.NODE_ENV === 'development' ? [generateTypes()] : [])
};
