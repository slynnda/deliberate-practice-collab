student = {
    'name' : 'Mark',
    'student_id' : 15163,
    'feedback' : None
}

student['last_name'] = 'Johanhannsen'

try:
    last_name = student['last_name']
    numbered_last_name = 3 + last_name
except KeyError:
    print('Not in the dict, yo')
except TypeError as error:
    print('Get your act together man')
    print(error)
except Exception:
    print('Gimme them errors')
