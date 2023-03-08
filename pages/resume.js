import Ant from '../components/AntLayout';


export default function Resume(){
    const headerContent = <h1> Resume </h1>
    const pageConent =
    <div>
        <h1> Page Content </h1>
    </div>    

return (
    <Ant header={headerContent} content={pageConent}/>
)
}
