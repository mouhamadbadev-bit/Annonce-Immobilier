import {type Immobilier} from "../type/interface"
import Map from "./map"

interface ListProp{
    list: Immobilier[];
};

export default function Liste({list}: ListProp){
 
    return (
        <>
        {list.map((e)=>{
            return <Map key={e.id} user={e} />

        }
    )}
        </>
    )


}