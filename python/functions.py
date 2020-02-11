students = []


def get_students_titlecase():
    students_titlecase = []
    for student in students:
        students_titlecase = student['name'].title()
    return students_titlecase


def print_students_titlecase():
    students_titlecase = get_students_titlecase()
    print(students_titlecase)
    

def add_student(name, student_id=339):
    student = {'name': name, 'student_id' : student_id}
    students.append(student)


student_list = get_students_titlecase()

def add_student_question(answer = None):
    answer = input('Do you want to add a student?  Please say yes or no. ')

    if answer == 'Yes':
        student_name = input('Enter student name: ')
        student_id   = input('Enter student Id: ')

        add_student(student_name, student_id)
        print_students_titlecase()
        answer = ''
        add_student_question()
    
add_student_question()
