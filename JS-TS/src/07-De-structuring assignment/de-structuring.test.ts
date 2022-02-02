import {ManPropsType} from "./DeStructuring";

let props: ManPropsType;

beforeEach(()=>{
    props = {
        name: "Andrey",
        age: 31,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "react"}],
        address: {
            street:{
                title: "Lipchansky"
            }
        }
    }
})



test("a", () => {

    /*const age = props.age
    const lessons = props.lessons*/

    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(31)
    expect(lessons.length).toBe(3)
    expect(title).toBe("Lipchansky")
})

test("b", () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    //const [ ls1 ] = props.lessons      // тоже самое. Это деструктуризация массива
    const [, ls2, ...restLessons] = props.lessons;      // тоже самое. Это деструктуризация массива

    expect(l1.title).toBe("1");
    expect(l2.title).toBe("2");

    expect(ls2.title).toBe("2");

    //expect(ls1.title).toBe("1")
   // expect(ls2.title).toBe("2")
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')

    expect(restLessons[0]).toStrictEqual({name: "react", title: "3"})

})