import {type Immobilier} from "../type/interface"

interface MapProps{
    user: Immobilier;
}
export default function Map({user}: MapProps){

    return (
    <>
<div>

<div>
<img src={user.image} alt="image-immobilier" />
{user.superhost && <h1>{user.superhost}</h1> }
</div>

<div>
    {user.title && <h1>{user.title}</h1> }
    {user.description && <p>{user.description}</p>}
</div>

<div>
{user.capacity.bedroom && <span>{user.capacity.bedroom}</span> }
{user.capacity.people && <span>{user.capacity.people}</span> }
</div>

<hr />

 <div>
{user.price && <span>{user.price}</span> }
{user.rating && <span>{user.rating}</span> }
</div>   

</div>
    
    </>
    )

}