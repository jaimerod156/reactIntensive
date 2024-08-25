import {v4 as uuidv4} from "uuid";

const mockData=[
    {
        id: uuidv4(),
        title: "📋 Por hacer",
        tasks:[
            {
                id:uuidv4(),
                title:"Inscribirse al curso de javascript"
            },
            {
                id:uuidv4(),
                title:"Inscribirse al curso de html+css"
            },
            {
                id:uuidv4(),
                title:"Inscribirse al curso de react"
            },

        ]
    },
    {
        id: uuidv4(),
        title: "✏️ En progreso",
        tasks:[
            {
                id:uuidv4(),
                title:"Curso de javascript"
            },
            {
                id:uuidv4(),
                title:"Curso de html+css"
            }
        ]
    },
    {
        id: uuidv4(),
        title: "✔️ Completado",
        tasks:[
            {
                id:uuidv4(),
                title:"Curso HTML"
            }
        ]
    }
];

export default mockData;