import { Img200x200, InnerCard } from '../screens/styled';

const InfoCard = (props) => {
    return (
        <InnerCard>
            {(props.name && props.age && props.photo && props.bio) &&
                <div>
                    <h2>{props.name + ","} {props.age}</h2>
                    <Img200x200 src={props.photo} />
                    <p>{props.bio}</p>
                </div>
            }
        </InnerCard>
    )
}

export default InfoCard