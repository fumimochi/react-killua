import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength70 = maxLengthCreator(70);

const Dialogs = (props) => {    
 
    let state = props.dialogsPage;
    
    let dialogsElements = state.dialogsData
    .map( d => <DialogItem name={d.name} id={d.id} />); 

    let messagesElements = state.messagesData
    .map(m => <Message message={m.message}/> )

    let newMessageBody = state.newMessageBody;
 
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody); 
    };

    if(!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogsElements }
                </div>
                <div>
                    <div className={s.messages}>
                        <div className={s.messagesItems}>
                            { messagesElements }
                            <AddMessageFormRedux onSubmit={addNewMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'} placeholder='Enter your message'
                validate={ [required, maxLength70] } />
            </div>
            <div>
                <button>Add new note</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm( { form: 'dialogAddMessageForm' } )(AddMessageForm);

export default Dialogs;