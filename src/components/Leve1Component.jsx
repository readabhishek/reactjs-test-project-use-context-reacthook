

/* This child component (at level 1) doesn't do much except calling the level 2 child component.
   Note: We are not passing any props or anything to next child, it's already been passed or taken care using
   'context.Provider' at App.js level (parent of the current component)
*/
import Level2Component from './Level2Component'

export default function Level1Component () {
    return (
        <Level2Component />
    );
}