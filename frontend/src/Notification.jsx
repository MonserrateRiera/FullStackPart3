import './Notification.css';
import { Toast } from 'react-bootstrap';

const Notification =({message, clasname})=>{

    if(message === null){
        return null;
    }
    return(
        <Toast bg={clasname.toLowerCase()}>
            <Toast.Header>
                <strong className="me-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body className={clasname}>
                {message}
            </Toast.Body>
        </Toast>
    )
}





// const Notification = ({message, clasname})=>{

//     if(message === null){
//         return null;
//     }
//     //const clasname = message.clasname;
//     //console.log(clasname);
//     return (
//         <div className={clasname}>
//             {message}
//         </div>
//     )
// }

export default Notification;