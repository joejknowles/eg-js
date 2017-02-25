import { schema } from 'normalizr';

const event = new schema.Entity('events');

export const arrayOfEvents = new schema.Array(event);
