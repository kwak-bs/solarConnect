import moment from 'moment';

export default function disabledDate(current : object) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}