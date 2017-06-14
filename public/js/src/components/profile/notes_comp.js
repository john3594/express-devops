import React from 'react'
import $ from 'jquery'
import Note from '../others/note_comp'
import Nothing from '../others/nothing_comp'
import * as fn from '../../functions/functions'

export default class Notes extends React.Component{
    render(){
        let { notes: { notes }, dispatch, user: { user_details } } = this.props,
            getid = $('#profile_data').data('getid'),
            map_notes = notes.map(note => {
                return <Note key={note.note_id} {...note} dispatch={dispatch} user_details={user_details} />
            })
            console.log(user_details);
        return(
            <div class='notes' >
                { notes.length == 0 ? <Nothing mssg={ fn.MeOrNot(getid) ? "You have no notes" : `${user_details.username} got no notes` } /> : map_notes }
            </div>
        )
    }
}
