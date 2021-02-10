
/* This demonstrates the use of React Hook called 'useContext'. By using this 'useContext' hook we don't need to use
   'context.Consumer'. It returns the 'value' passed by the 'context.Provider', just use as the syntax given below.
*/

import {useContext} from 'react';
import {stateListContext} from '../App';

export default function Level2Component (props) {

    /* use React Hook - 'useContext' and pass the context we created in Parent App.js component. This 'useContext' function returns
       the 'value' passed under 'context.Provider. The 'value' here is stored in the stateList (keeping same name as passed within
       'context.Provider'). The stateList can be used as required. If state changes, the components re-renders    */

    const stateList = useContext(stateListContext);
    return (
        <div>
            <h2>{stateList.name}</h2>
            <h3>{stateList.address.city}</h3>
            <h3>{stateList.address.zip}</h3>
            <button onClick={()=>{stateList.setName("Kabhi")}}>Change Name</button>
        </div>
    );
}


