import {ManType} from "./ManComponent";


export let props: ManType;
beforeEach(() => {
    props = {
        name: 'Slava',
        age: 35,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Nemiga street'
            }
        }
    }
})


test('destructuring object', () => {

    /* const age = props.age;
     const lessons = props.lessons;*/
    const {age, lessons} = props; //данная строка эквивалентна двум верхним
    const {title} = props.address.street

    /* const a = props.age;
     const l = props.lessons;*/
//можно использовать краткую запись псевдонимов

    expect(age).toBe(35);
    expect(lessons.length).toBe(3);

    /*expect(a).toBe(35);
    expect(l.length).toBe(2);*/
    //аналогично записи выше , но с сокращенными названиями псевдонимов

    expect(title).toBe('Nemiga street')
    expect(title.length).toBe(13)

})

test('destructuring array', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ...restLessons] = props.lessons
    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')

    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')

})