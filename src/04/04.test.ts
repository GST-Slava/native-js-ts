export {}

test('should take old mens older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    /*  const predicate = (age: number) => {
          return age > 90;
      } функция predicate 1 способ*/

    //const predicate = (age: number) => age > 90; Аналогичная запись predicate в сокращенном варианте 2способ

    const oldAges = ages.filter(age => age > 90);//аналогичная запись как в верхних вариантах. Сразу передаем в oldAges

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})


test('should take curses chipper 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ]
    /*const chipPredicate = (course: CourseType) => {
        return course.price < 160;
    } аналогично с верхними функциями рефакторинг и более компактная запись ниже*/

    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
    expect(chipCourses[1].title).toBe('REACT');
})


test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Coffee', isDone: false},
        {id: 4, title: 'Tea', isDone: true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);

})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Coffee', isDone: false},
        {id: 4, title: 'Tea', isDone: true},
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].id).toBe(1);
    expect(uncompletedTasks[1].id).toBe(3);

})


