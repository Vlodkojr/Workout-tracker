import { NewPlan } from './NewPlan';

export const EditPlan = ({ editPlan }) => {
    return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center" }}>Edit Plan</h1>
            <NewPlan editPlan={editPlan} />
        </div>
    )
}