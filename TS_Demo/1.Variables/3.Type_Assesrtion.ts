let message = 'abc'

let fake_message;
fake_message='cdef'

let endswithc = message.endsWith('c');
//if variable is initizaed and defined later then intellinse will not be shown.
//in this case we need type assertion.
let fake_message_endswithc= (<string>fake_message).endsWith('c');
let alternateway = (fake_message as string).endsWith('c');