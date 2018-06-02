import {
    setEntries,
    next,
    vote
} from './core';

import { Map } from 'immutable'; 

export default function reducer(state = Map(), action) {
    // Figure out which function to call and call it
    switch (action.type) {

        case 'SET_ENTRIES': {
            return setEntries(state, action.entries);
        }

        case 'NEXT': {
            return next(state);
        }
        case 'VOTE': {
            return state.update('vote', voteState => vote(voteState, action.entry));
        }

        console.error('Failed to find action', action);
        return state;
    }
}

/*
type State = {
    entries: [],
    vote: {
        tally: {
            [movie: string]: string;
        },
        pair: []
    }
}
*/