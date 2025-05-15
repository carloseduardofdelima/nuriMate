import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

export default function WeekCalendar(props) {
    return (
        <div className='calendar' style={{ height: '70vh', marginTop: '2rem' }}>
            <Calendar
                startAccessor="start"
                endAccessor="end"
                defaultDate={new Date()}
                localizer={localizer}
                showMultiDayTimes
                defaultView="week"
                views={['month', 'week', 'day', 'agenda']}
            />
        </div>
    )
}
