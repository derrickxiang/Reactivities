import React, { FormEvent, useState} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import {v4 as uuid } from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    submitting: boolean;
}

const ActivityForm: React.FC<IProps> = ({setEditMode, 
    activity: initializeFormActivity,
    createActivity,
    editActivity,
    submitting
}) => {

    const initializeForm = () => {
        if (initializeFormActivity) {
            return initializeFormActivity;
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            };
        }
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleSubmit = () => {
        if (activity.id.length ===0) {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity);
        }
        else {
            editActivity(activity);
        }
    }

    const hanldeInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const{ name, value} = event?.currentTarget;
        setActivity({...activity, [name]: value});
    }

  return (
    <Segment clearing>
        <Form>
            <Form.Input onChange={hanldeInputChange}
                name='title' placeholder='Title' value={activity.title}/>
            <Form.TextArea rows={2} 
            onChange={hanldeInputChange}
            name='description' 
            placeholder='Description' value={activity.description}/>
            <Form.Input 
            onChange={hanldeInputChange}
            name='category' 
            placeholder='Category' value={activity.category} />
            <Form.Input type='datetime-local' 
            onChange={hanldeInputChange}
            name='date' 
            placeholder='Date'
             value={activity.date} />
            <Form.Input 
            onChange={hanldeInputChange}
            name='city' 
            placeholder='City' value={activity.city} />
            <Form.Input 
            onChange={hanldeInputChange}
            name='venue' 
            placeholder='Venue' value={activity.venue} />
            <Button 
            loading={submitting}
            floated='right' positive type='submit'
            onClick={handleSubmit}
            content='Submit' />
            <Button floated='right' onClick={()=>setEditMode(false)} type='button ' content='Cancel' />
            
        </Form>
    </Segment>
  )
}

export default ActivityForm
